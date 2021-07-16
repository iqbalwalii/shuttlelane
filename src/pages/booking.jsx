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

//   variables
let bookingObj = {};

let fields = {
  dropoffAddress: "",
  arrivalDate: "",
  passengers: "",
  pickupAirport: "",
  flightNumber: "",
};
const carRates = {
  Luxury: "2000",
  Executive: "1500",
  Economy: "1400",
  Shuttle: "1300",
  Business: "1000",
};
const passengerFields = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "",
  mobile: "",
};
// COMPONENT

const Booking = () => {
  const router = useRouter();
  try {
    router.asPath
      .split("?")[1]
      .split("&")
      .forEach((item) => {
        let entry = item.split("=");
        fields[entry[0]] = entry[1].split("+").join(" ");
      });
  } catch (error) {
    console.log("split err", error);
  }

  const [data, setData] = useState(fields);
  const [selectedCar, setSelectedCar] = useState("");
  const [total, setTotal] = useState("");
  const [passengerDetails, setPassengerDetails] = useState(passengerFields);

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

  bookingObj = {
    carType: selectedCar,
    ...passengerDetails,
    ...data,
  };

  console.log(bookingObj);
  console.log("passengerDetails", passengerDetails);
  console.log("Airport Details", data);

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
            subTotal={carRates[selectedCar] * 5}
          />
          <PaymentMethod
            bookingData={bookingObj}
            amount={carRates[selectedCar] * 5}
          />
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
