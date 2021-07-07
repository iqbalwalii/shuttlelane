import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";

import contactform from "../styles/ContactForm.module.css";

export default class ContactForm extends React.Component {
  render() {
    return (
      <Grid className={contactform.contactUs} style={{ marginTop: "2rem" }}>
        <Typography variant="h5" gutterBottom color="secondary">
          Contact Us
        </Typography>
        <form className={contactform.contact}>
          <input type="text" name="" id="" placeholder="Full Name" />
          <input type="email" name="" id="" placeholder="Email Address" />
          <textarea
            name=""
            id=""
            cols="22"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <Button variant="contained" color="primary">
            Send.!
          </Button>
        </form>
      </Grid>
    );
  }
}
