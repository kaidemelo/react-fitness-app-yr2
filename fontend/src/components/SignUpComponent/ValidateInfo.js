export default function ValidateInfo(values) {
    //Validates sign up credentials (passes in values array list)
    
    //Errors array to store errors.
    let errors = {};

    //Username
    if(!values.username.trim()) {
        //No value = username required
        errors.username = "Username required";
    }

    //Email
    if(!values.email) {
        //No value = email required
        errors.email = "Email required";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //Non valid email address = email invalid
        errors.email = "Email address is invalid";
    }

    //Password
    if(!values.password) {
        //No value = password required
        errors.password = "Password required";
    } else if(values.password.length < 6) {
        //Non valid password (too short) = password invalid
        errors.password = "Password needs to be 6 characters or more";
    }

    if(!values.password2 && !values.password) {
        //No value in either password box so only show the first error message
    } else if (values.password2 !== values.password) {
        //Passwords 1 & 2 don't match = passwords do not match
        errors.password2 = "Passwords do not match";
    }

    return errors;
}