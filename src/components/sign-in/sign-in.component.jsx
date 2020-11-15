import React, { useState } from "react";
import {connect} from "react-redux";

import "./sign-in.styles.scss";

import {emailSignInStart, googleSignInStart} from "../../redux/user/user.action.js";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

const SignIn =({emailSignInStart,googleSignInStart})=> {
  
    const [credintials,setCredintials] = useState({
      email: "",
      password: ""
    })
    
    const {email,password} = credintials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart({email,password});

  };

  const handleChange = e => {
    const { value, name } = e.target;
    setCredintials({...credintials, [name]: value });
  };

    
    return (
      <div className="sign-in">
        <h2>I already have an account!!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            value={email}
            required
            handleChange={handleChange}
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            required
            handleChange={handleChange}
            label="Password"
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }



const mapDispatchToProps = dispatch =>({
  googleSignInStart: ()=>dispatch(googleSignInStart()),
  emailSignInStart:({email,password}) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
