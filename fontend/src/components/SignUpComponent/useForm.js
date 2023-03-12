//Imports
import { useState, useEffect } from 'react';
import Axios from 'axios';

//Functionality of sign up form, handles change and client side validation, as well as post request to send user data 
// to mysql db when no errors are present in sign up form.
const useForm = (callback, validate) => {
    const [values, setValues] = useState({
    //Values array to store form values for validation
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    //variable declarations
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    //Handle change error function to set the error array values equal to form values in addition to setting the values for
    // the variables that are passed to the mysql db through an axios post request
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setUsernameReg(
            values.username
        );
        setPasswordReg(
            values.password
        );
        setEmailReg(
            values.email
        );
    };

    //Handle submit error function for prevent default values, and checking whether there are any errors in error array.
    const handleSubmit = e => {
        e.preventDefault();
        //Passes values array to validate function to check for errors, and then sets the outcome by using setErrors function
        setErrors(validate(values));
        //Sets isSubmitting variable to true
        setIsSubmitting(true);
    }

    //If no errors are present in error array list and isSubmitting is true then run the axios post request.
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            //Axios post request passes user sign up data (username, email, password) to the back end for data handling
            Axios.post('http://localhost:3001/registered', {
                username: usernameReg,
                email: emailReg,
                password: passwordReg
            }).then((response) => {
                console.log(response);
            });
            //Callback function to return close the data loop and return to parent component
            callback();
        }
    }, [errors] );
    return { handleChange, values, handleSubmit, errors }
};

export default useForm;