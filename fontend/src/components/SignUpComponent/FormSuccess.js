//Imports
import React from 'react'

//Content for when the sign up form has succesfully been validated and submitted
const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request!</div>
            {/* Image shown to replace sign up form to confirm succesful submmission before redirect occurs. */}
            <img src="images/img-49.svg"
            alt="Success Image"
            className="form-img-2"/>
            {/* Script to redirect user after sucessful sign up (redirects to login page after 1000ms) */}
            <script type="text/javascript">
                function Redirect() {
                    window.setTimeout( function () {
                        window.location="http://localhost:3000/login";
                    }, 1000)
                };
            </script>
        </div>
    )
}

export default FormSuccess
