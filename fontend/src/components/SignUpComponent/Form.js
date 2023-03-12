//Imports
import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

//Form component for sign up
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
    //Function to complete the sign up and change component being shown on the right side of the form
        setIsSubmitted(true);
    };

    return (
    //Left side of form content and ternary statement for showing right side content of form.
            <div className="form-container">
                <span className="close-btn"></span>
                <div className="form-content-left">
                {/* Image for left side of form */}
                    <img src="images/img-50.svg" alt="spaceship" className="form-img"/>
                </div>
                {/* Ternary statement for right side of form */}
                {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
            </div>
    )
}

export default Form
