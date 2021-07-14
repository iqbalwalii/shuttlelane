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
  const [selectedCar, setSelectedCar] = useState("");
  const carHandler = (e) => {
    setSelectedCar(e.target.value);
    console.log(selectedCar);
  };

  let data = {};
  const router = useRouter();
  console.log("userSta", userData);
  console.log(router.asPath.split("?")[1].split("&"));
  router.asPath
    .split("?")[1]
    .split("&")
    .forEach((item) => {
      let entry = item.split("=");
      data[entry[0]] = entry[1];
      console.log(entry);
      console.log(data);
    });
  // });
  return (
    <section style={{ width: "80vw", margin: "auto" }}>
      <Grid container spacing={2} justify="center">
        <Grid item sm={8}>
          <Airport data={data} />
          <PickCar carHandler={carHandler} selectedCar={selectedCar} />
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
