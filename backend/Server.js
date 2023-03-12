//Imports
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

//Initilize middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("Yo, we need a token brudda!")
  } else {
    jwt.verify(token, "jwtsecret", (err, decoded) => {
      if (err) {
        res.json({auth: false, message: "U failed to authenticate brudda" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
}
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  key: "userID",
  secret: "sessionSecret123",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60,
  },
}))

//Connect to mysql db
const db = mysql.createConnection({
  user: 'kai',
  host: 'localhost',
  password: 'root123',
  database: 'fitnesscentral'
});

//Display mysql db status
db.connect(function (err) {
  if (err) {
      console.log('Error connecting to Database',err);
      return;
  }
  console.log('Connection established');
});

//Post request for users registering (adds credentials to mysql db)
app.post("/registered", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  //Hash password using bcrypt
  bcrypt.hash(password,saltRounds,(err, hash) => {
    if (err) {
      console.log(err);
    }
  //Insert user details into db including hashed version of password
    db.query(
    "INSERT INTO users (username, email, password) VALUES (?,?,?)",
    [username, email, hash],
    (err, result) => {
    console.log(err);
    }
  );
  })
});

app.get('/dashboard', verifyJWT , (req, res) => {
  
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user});
  } else {
    res.send({loggedIn: false});
  }
})

//Post request for users logging in (checks credentials against mysql db)
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //Select username from mysql db that matches query sent from front end by user
  db.query(
    "SELECT * FROM fitnesscentral.users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
      //If result exists compare password given by user to password hash stored on mysql db
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
      //If response is a match send result back
            const id = result[0].id;
            const token = jwt.sign({id}, "jwtsecret", {
              expiresIn: 900,
            });
            req.session.user = result;

            console.log(req.session.user);
            res.json({auth: true, token: token, result: result});
          } else {
      //Else if username and password don't match what's on the db return this message
            //res.send({ message: "Incorrect username/password combination" });
            res.json({auth: false, result: result, message: "Incorrect username/password combination"});
          }
        })
      } else {
      //If user credentials don't exist return this message
        //res.send({ message: "User doesn't exist" });
        res.json({auth: false, result: result, message: "User doesn't exist"});
      }
    }
  );
});

//Listen to the port 3001
app.listen(3001, () => {
  console.log("Server running");
});