import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import {auth, signInWithGoogle } from "../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password}=this.state;
    

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });   
    }
    catch(err){
      console.log(err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.email}
            required
            name="email"
            handleChange={this.handleChange}
            label="email"
          ></FormInput>

          <FormInput
            type="password"
            value={this.state.password}
            required
            name="password"
            handleChange={this.handleChange}
            label="password"
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
