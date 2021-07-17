import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Grid } from "@material-ui/core";

import AirportTransferBooking from "../../components/admin/AirportTransferBooking";
import SuccessfullPayments from "../../components/admin/SuccessfullPayments";
import PriorityPassBooking from "../../components/admin/PriorityPassBooking";
import CarBooking from "../../components/admin/CarBooking";
import Overview from "../../components/admin/Overview";
import AdminAside from "../../components/admin/AdminAside";
import User from "../../components/admin/User";
import ExchangeRates from "../../components/admin/ExchangeRates";
import FleetManagementBooking from "../../components/admin/FleetManagementBooking";

import styles from "../../styles/Dashboard.module.css";

const dashboard = () => {
  const [state, setState] = useState("Overview");
  const [bookings, setBookings] = useState([]);
  const [carBookings, setCarBookings] = useState([]);

  const onStateChange = (value) => {
    console.log("value", value);
    setState(value);
  };
  useEffect(() => {
    // Airport Bookings
    fetch("http://localhost:3001/api/booking/pickup")
      .then((res) => res.json())
      .then((data) => {
        {
          console.log("IN DASH", data);
          setBookings(data.data);
        }
      })
      .catch((err) => console.log(err));

    // Car Bookings
    fetch("http://localhost:3001/api/booking/car")
      .then((res) => res.json())
      .then((data) => {
        {
          console.log("IN car DASh", data.data);
          setCarBookings(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      className={styles.container}
    >
      <Grid item sm={2}>
        <AdminAside onStateChange={onStateChange} />
      </Grid>
      <Grid item container justifyContent="space-evenly" sm={10}>
        {state == "Overview" ? (
          <Overview bookings={bookings} carBooking={carBookings} />
        ) : state.includes("Car") ? (
          <CarBooking />
        ) : state.includes("Airport") ? (
          <AirportTransferBooking />
        ) : state.includes("Priority") ? (
          <PriorityPassBooking />
        ) : state.includes("User") ? (
          <User />
        ) : state.includes("Fleet") ? (
          <FleetManagementBooking />
        ) : state.includes("Rates") ? (
          <ExchangeRates />
        ) : (
          <div>Loading..!</div>
        )}
      </Grid>
    </Grid>
  );
};

export default dashboard;
