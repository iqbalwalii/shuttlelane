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
let fields = {
  dropoffAddress: "",
  dropoffDate: "",
  passengers: "",
  pickupAirport: "",

  flightNumber: "",
};
const Booking = ({ userData }) => {
  console.log("USERDATA:- ", userData);
  const router = useRouter();
  try {
    router.asPath
      .split("?")[1]
      .split("&")
      .forEach((item) => {
        let entry = item.split("=");
        fields[entry[0]] = entry[1];
      });
  } catch (error) {
    console.log("split err", error);
  }
  console.log("USERDATA FIELDS:- ", fields);
  const carRates = {
    Luxury: "2000",
    Executive: "1500",
    Ecomnomy: "1400",
    Shuttle: "1300",
    Business: "1000",
  };
  const [data, setData] = useState(fields);
  const [selectedCar, setSelectedCar] = useState("");
  const [total, setTotal] = useState("");
  const [passengerDetails, setPassengerDetails] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    mobile: "",
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

  return (
    <section style={{ width: "80vw", margin: "auto" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={8}>
          <Airport data={data} setData={setData} />
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
          {/* <Summary /> */}
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
