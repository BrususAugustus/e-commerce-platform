import React from "react";
import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component"
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = ()=>{
    return(
        <div className="sign-in-and-sign-up">   
        <SignIn ></SignIn>
        <SignUp ></SignUp>
        </div>

    )
}

export default SignInAndSignUpPage;