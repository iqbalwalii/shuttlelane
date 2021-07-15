import React from "react";
import { Typography, Grid } from "@material-ui/core";

import contactform from "../styles/ContactForm.module.css";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  render() {
    return (
      <Grid className={contactform.contactUs} style={{ marginTop: "2rem" }}>
        <Typography variant="h5" gutterBottom color="secondary">
          Contact Us
        </Typography>
        <form className={contactform.contact}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={this.state.name}
            onchange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={this.state.email}
            onchange={(e) => this.setState({ email: e.target.value })}
          />
          <textarea
            name="message"
            cols="22"
            rows="5"
            placeholder="Your Message"
            value={this.state.message}
            onchange={(e) => this.setState({ message: e.target.value })}
          ></textarea>
          <button className="btnGrad">SEND</button>
        </form>
      </Grid>
    );
  }
}
