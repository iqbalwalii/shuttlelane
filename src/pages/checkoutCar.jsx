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
import CarHire from "../components/CarHireNext";

import { Grid } from "@material-ui/core";

//   variables
let bookingData = {};

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

// HELPER FUNCTIONS

// create Booking
function createBooking(data, amount) {
  console.log("SUBMOISSSSSSs", data, amount);

  fetch("http://localhost:3001/api/booking/car", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      amount: amount,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("result fro server", data);
      return data;
    })
    .catch((err) => {
      console.log("err in catch", err);
    });
  return "created";
}

// validate

function validataDate(data) {
  console.log("validate data", data);
  return Object.values(data).includes("") || Object.values(data).includes(" ");
}

// COMPONENT
const CarBooking = () => {
  const [country, setcountry] = useState("");
  const [amount, setAmount] = useState(2000);
  const router = useRouter();

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("TRYIN GTO CREAT CAR BOOKING", bookingData);
    const verified = validataDate(bookingData);
    if (!verified) {
      const response = createBooking(bookingData, amount);
      console.log("VACK", response);
    } else {
      console.log("validation Error");
    }
  };

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
    console.log(name, value);
    setPassengerDetails((e) => {
      return { ...passengerDetails, [name]: value };
    });
  };

  bookingData = {
    carType: selectedCar,
    ...passengerDetails,
    ...data,
  };

  console.log(bookingData);
  console.log("passengerDetails", passengerDetails);
  console.log("Airport Details", data);
  console.log(country);

  return (
    <section style={{ width: "80vw", margin: "auto" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={8}>
          {/* <PickCar handler={carHandler} car={selectedCar} /> */}
          <div style={{ marginTop: "8rem" }}>
            <Passenger values={passengerDetails} handler={passengerHandler} />
          </div>
          <CarHire data={data} setData={setData} />
          {/*  <Summary
            title="Airport Transfer"
            total={carRates[selectedCar]}
            handler={setTotal}
            subTotal={carRates[selectedCar] * 5}
            country={country}
          />*/}

          <button
            onClick={onSubmitHandler}
            type="text"
            style={{ marginTop: "2rem" }}
            className="btnGrad"
          >
            hire
          </button>
        </Grid>
        <Grid item sm={3} style={{ marginTop: "8rem" }}>
          <Summary
            title="Airport Transfer"
            total={amount}
            // handler={setTotal}
            subTotal={amount * 2}
            country={country}
          />
          <Included />
        </Grid>
        <Grid item={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};
export default CarBooking;
