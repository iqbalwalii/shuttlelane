import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Airport from "../components/AirportNext";
import Passenger from "../components/Passenger";
import PickCar from "../components/PickCar";
import Contact from "../components/Contact";
import PaymentMethod from "../components/PaymentMethod";
import Included from "../components/Included";
import Summary from "../components/Summary";
import CarHireNext from "../components/CarHireNext";

export default class test extends Component {
  render() {
    return (
      <section style={{ width: "80vw", margin: "auto" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item sm={8}>
            <CarHireNext />
            <PickCar />
            <Summary />
            <button className="btnGrad">Book Now</button>
          </Grid>
          <Grid item sm={3} style={{ marginTop: "2rem" }}>
            <Summary />
            <Included />
          </Grid>
          <Grid item={12}>
            <Contact />
          </Grid>
        </Grid>
      </section>
    );
  }
}
