//Imports
import React, { useState } from 'react';
import FormLogin from './FormLogin';
import './Login.css';
import Success from './loginSuccess';

//Form component for log in
const Form = () => {
    const [loginSubmitted, setloginSubmitted] = useState(false);

    function submitLoginForm() {
    //Function to complete the log in and change component being shown on the right side of the form
        setloginSubmitted(true);
    };

    return (
    //Left side of form content and ternary statement for showing right side content of form.
            <div className="form-container1">
                <span className="close-btn"></span>
                <div className="form-content-left1">
                {/* Image for left side of form */}
                    <img src="images/img-33.svg" alt="fitness image" className="form-img1"/>
                </div>
                {/* Ternary statement for right side of form */}
                {!loginSubmitted ? (<FormLogin submitLoginForm={submitLoginForm} />) : (<Success />) }
            </div>
    )
}

export default Form
