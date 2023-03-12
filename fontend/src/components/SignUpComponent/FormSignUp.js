//Imports
import React from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';
import './Form.css';

//Form sign up content for the right side of the form before the form is successfully submitted (text boxes, text, and error text)
const FormSignUp = ({submitForm}) => {
    // 4 functions/arrays being passed into useForm, submitForm and validate being passed from useForm into form (this file).
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right" >
            {/* When form is submitted run handleSubmit function */}
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out this form below.</h1>

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
                //When input text is changed run handle change function in useForm, also store the value in username inside the values array.
                    value={values.username}
                    onChange={handleChange} >
                    </input>
                    {/* Only if there is a username error in the errors array show it as paragraph text here */}
                    {errors.username && <p> {errors.username} </p>}
                </div>

                {/* Email */}
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    //When input text is changed run handle change function in useForm, also store the value in email inside the values array.
                    value={values.email}
                    onChange={handleChange} >
                    </input>
                    {/* Only if there is a email error in the errors array show it as paragraph text here */}
                    {errors.email && <p> {errors.email} </p>}
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
                    //When input text is changed run handle change function in useForm, also store the value in password inside the values array.
                    value={values.password}
                    onChange={handleChange} >
                    </input>
                    {/* Only if there is a password error in the errors array show it as paragraph text here */}
                    {errors.password && <p> {errors.password} </p>}
                </div>

                {/* Password Confirm */}
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input id="password2"
                    type="password"
                    name="password2"
                    className="form-input"
                    placeholder="Confirm your password"
                    //When input text is changed run handle change function in useForm, also store the value in password2 inside the values array.
                    value={values.password2}
                    onChange={handleChange} >
                    </input>
                    {/* Only if there is a password2 error in the errors array show it as paragraph text here */}
                    {errors.password2 && <p> {errors.password2} </p>}
                </div>
                
                {/* Submit button for sign up form */}
                <button className="form-input-btn" type="submit" >Sign Up</button>
                <span className="form-input-login">
                {/* Link to login page at bottom of form */}
                    Already have an account? Login <a href='/login'>here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignUp
