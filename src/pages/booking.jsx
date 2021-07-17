import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Airport from "../components/AirportNext";
import AirportDropoff from "../components/AirportDropoff";
import Passenger from "../components/Passenger";
import PickCar from "../components/PickCar";
import Contact from "../components/Contact";
import PaymentMethod from "../components/PaymentMethod";
import Included from "../components/Included";
import Summary from "../components/Summary";

import { Grid } from "@material-ui/core";

//   variables
let bookingObj = {};

let fields = {};
// let dropoffFields = {
//   pickupAddress: "",
//   pickupDate: "",
//   passengers: "",
//   dropoffAirport: "",
// };
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
  const [country, setcountry] = useState("");
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        setcountry(response.country);
      })
      .catch((data, status) => {
        console.log("Request failed");
      });
  }, []);
  const router = useRouter();
  try {
    router.asPath
      .split("?")[1]
      .split("&")
      .forEach((item) => {
        let entry = item.split("=");
        fields[entry[0]] = entry[1].split("+").join(" ");
      });
    console.log("fields", fields);
  } catch (error) {
    console.log("split err", error);
  }
  const [data, setData] = useState(fields);

  const [selectedCar, setSelectedCar] = useState(fields.selectedCar || "");
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
  console.log(country);

  return (
    <section style={{ width: "80vw", margin: "auto" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={8}>
          {data.formType === "Airport-Dropoff" ? (
            <AirportDropoff data={data} setData={setData} />
          ) : data.formType === "Airport-Pickup" ? (
            <Airport data={data} setData={setData} />
          ) : (
            <div> Loading</div>
          )}
          <PickCar handler={carHandler} car={selectedCar} />
          <Passenger values={passengerDetails} handler={passengerHandler} />
          <Summary
            title="Airport Transfer"
            total={carRates[selectedCar]}
            handler={setTotal}
            subTotal={carRates[selectedCar] * 5}
            country={country}
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
