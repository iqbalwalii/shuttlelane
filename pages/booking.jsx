import React, { Component } from "react";
import { useRouter } from "next/router";
import Airport from "../components/AirportNext";
import Passenger from "../components/Passenger";
import PickCar from "../components/PickCar";
import Contact from "../components/Contact";
import PaymentMethod from "../components/PaymentMethod";
import Included from "../components/Included";
import Summary from "../components/Summary";

import { Grid } from "@material-ui/core";

const Booking = ({ userData }) => {
  const router = useRouter();
  console.log("userSta", userData);
  console.log(router.asPath);
  return (
    <section style={{ width: "80vw", margin: "auto" }}>
      <Grid container spacing={2} justify="center">
        <Grid item sm={8}>
          <Airport />
          <PickCar />
          <Passenger />
          <Summary />
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

export async function getServerSideProps(ctx) {
  console.log("inIntilsa props", ctx);
  return {
    props: {
      userData: "hello page",
    },
  };
}
