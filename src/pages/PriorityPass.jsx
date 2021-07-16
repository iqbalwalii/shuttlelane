import React, { Component } from "react";
import Airport from "../components/AirportNext";
import Passenger from "../components/Passenger";
import PickCar from "../components/PickCar";
import Contact from "../components/Contact";
import PaymentMethod from "../components/PaymentMethod";
import PriorityPassNext from "../components/PriorityPassNext";
import Included from "../components/Included";
import Summary from "../components/Summary";
import { useState } from "react";

import { Grid } from "@material-ui/core";

const Booking = () => {
  const carRates = {
    Luxury: "2000",
    Executive: "1500",
    Ecomnomy: "1400",
    Shuttle: "1300",
    Business: "1000",
  };
  const [selectedCar, setSelectedCar] = useState("");
  const [total, setTotal] = useState("");
  const [passengerDetails, setPassengerDetails] = useState({
    title: "hell",
    firstName: "Bound",
    lastName: "OKAT",
    email: "tunde@ehgue",
    countryCode: "91",
    mobile: "9898",
  });

  return (
    <section style={{ width: "80vw", margin: "auto" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={8}>
          <PriorityPassNext />
          <PickCar />
          <Passenger values={passengerDetails} />
          <Summary
            title="Airport Transfer"
            total={carRates[selectedCar]}
            handler={setTotal}
            subTotal={total * 5}
          />
          <PaymentMethod />
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
};

export default Booking;
