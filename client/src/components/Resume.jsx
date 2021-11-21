import { Button } from "@mui/material";
import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";

// Styles import
import styles from "./Resume.module.css";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      facebook: "",
      instagram: "",
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <div id="appbar-dummy"> Step no: {this.state.step}</div>
        {this.state.step === 1 && (
          <PersonalDetails handleChange={this.handleChange} />
        )}
        {this.state.step === 2 && <PersonalDetails />}
        {this.state.step === 3 && <PersonalDetails />}
        {this.state.step === 4 && <PersonalDetails />}
        <Button onClick={this.prevStep}>BACK</Button>
        <Button onClick={this.nextStep}>NEXT</Button>
      </React.Fragment>
    );
  }
}
