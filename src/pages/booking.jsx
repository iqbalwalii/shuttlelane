import React, { useState } from "react";
import { useRouter } from "next/router";
import Airport from "../components/AirportNext";
import Passenger from "../components/Passenger";
import PickCar from "../components/PickCar";
import Contact from "../components/Contact";
import PaymentMethod from "../components/PaymentMethod";
import Included from "../components/Included";
import Summary from "../components/Summary";

import { Grid } from "@material-ui/core";

const bookingObj = {};

//   component

const Booking = ({ userData }) => {
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

  const carHandler = (e) => {
    setSelectedCar(() => {
      return e.target.value;
    });
  };
  const passengerHandler = (name, value) => {
    setPassengerDetails((e) => {
      return { ...passengerDetails, [name]: value };
    });
  };

  bookingObj.selectedCar = selectedCar;

  console.log(bookingObj);
  console.log("passengerDetails", passengerDetails);
  let data = {};

  const router = useRouter();
  try {
    router.asPath
      .split("?")[1]
      .split("&")
      .forEach((item) => {
        let entry = item.split("=");
        data[entry[0]] = entry[1];
        console.log(entry);
        console.log(data);
      });
  } catch (error) {
    console.log("split err", error);
  }

  return (
    <section style={{ width: "80vw", margin: "auto" }}>
      <Grid container spacing={2} justify="center">
        <Grid item sm={8}>
          <Airport data={data} />
          <PickCar handler={carHandler} car={selectedCar} />
          <Passenger values={passengerDetails} handler={passengerHandler} />
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
