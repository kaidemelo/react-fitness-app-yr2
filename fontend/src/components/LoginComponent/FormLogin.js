//Imports
import React, { useState, useEffect } from 'react';
import './Login.css';
import Axios from 'axios';

//Form log in content for the right side of the form before the form is successfully submitted (text boxes, text, and error text)
const FormLogin = ({submitLoginForm}) => {
    //Variable declarations
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[active, setActive] = useState(false);
    const[loginStatus, setLoginStatus] = useState(false);

    //Login function for when form is submitted
    const login = () => {
        //Axios post request to send check user login details against database
        Axios.post('http://localhost:3001/login', {
                username: username,
                password: password
            }).then((response) => {
                //If respone recieved then run this code
                if (!response.data.auth) {
                //If response data is a message then set login status variable to the message (user/pass doesnt exist)
                    setLoginStatus(false);
                    activeHandler();
                } else {
                    localStorage.setItem("token", response.data.token);
                //If response isnt a message then set login status variable to the first part of array returned by db (users name)
                    setLoginStatus(true);
                    setActive(false);
                    activeHandler();
                //And then set submit login form to true
                    submitLoginForm(true);
                }
                console.log(response.data);
            });
    };

    const activeHandler = () => {
        if (loginStatus) {
            setActive(false)
        } else if (!loginStatus && !active) {
            setActive(true);
        }
    }

    useEffect(()=> {
        Axios.get('http://localhost:3001/login').then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username);
            }
        })
    }, [])

    return (
        <div className="form-content-right" >
            <form className="form">

                <h1>Welcome back. Login in to track your fitness and view your goals.</h1>

                {/* Username */}
                <div className="form-inputs">
                    <label htmlFor="username"
                    className="form-label">
                        Username
                    </label>
                    <input id="username"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Enter your username"
                    onChange={(e)=> {
                        setUsername(e.target.value);
                    }} >
                    </input>
                </div>

                {/* Password */}
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input id="password"
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                //When input text is changed pass event into error function, which sets password variable to its value.
                    onChange={(e)=> {
                        setPassword(e.target.value);
                    }} >
                    </input>
                    {/*Display login status here (user/pass is incorrect) */}
                    <p>
                    {active && !loginStatus ? "Invalid Username/Password" : ""}
                    </p>
                    
                    {/* <p> {active && !loginStatus ? "Invalid Username/Password" : setActive(false) } </p> */}
                </div>

                {/* Submit button for log in form */}
                <button className="form-input-btn" type="button" onClick={(e) => {
                    login();
                }}>Log In</button>
                <span className="form-input-login">
                    {/* Link to sign up page at bottom of form */}
                    Haven't made an account? Sign Up <a href='/sign-up'>here</a>
                </span>
            </form>
        </div>
    )
}

export default FormLogin