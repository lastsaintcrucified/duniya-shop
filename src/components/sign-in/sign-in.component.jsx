import React, { Component } from "react";
import {connect} from "react-redux";

import "./sign-in.styles.scss";

import {emailSignInStart, googleSignInStart} from "../../redux/user/user.action.js";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {emailSignInStart} = this.props;
    const {email,password} = this.state;
    emailSignInStart({email,password});

  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {googleSignInStart} = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account!!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
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
}


const mapDispatchToProps = dispatch =>({
  googleSignInStart: ()=>dispatch(googleSignInStart()),
  emailSignInStart:({email,password}) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
