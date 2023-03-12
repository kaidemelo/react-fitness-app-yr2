//Imports
import React from 'react';
import Axios from 'axios';

const userAuthenticated = () => {
    Axios.get("http://localhost:3001/dashboard", {headers: {
    "x-access-token": localStorage.getItem("token")}}).then((response) => {
        console.log(response);
    });
}

//Content for when the log in form has succesfully been validated thorugh backend with mysql db and submitted
const success = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request!</div>
            {/* Image shown to replace log in form to confirm succesful submmission before redirect occurs. */}
            <img src="images/img-49.svg"
            alt="Success Image"
            className="form-img-2" onLoad={userAuthenticated(), redirect()}/>
        </div>
        // setIsAuth(true)
    )
};

const redirect = () => {
    
    window.setTimeout( function () {
        window.location="http://localhost:3000/dashboard";
    }, 1000);
};

export default success