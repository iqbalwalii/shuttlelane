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
import FleetManagementBooking from "../../components/admin/FleetManagementBooking";

import styles from "../../styles/Dashboard.module.css";

const dashboard = () => {
  const [state, setState] = useState("Overview");
  const [PickupBookings, setPickupBookings] = useState([]);
  const onStateChange = (value) => {
    console.log("value", value);
    setState(value);
  };
  useEffect(() => {
    fetch("http://localhost:3001/api/booking/pickup")
      .then((res) => res.json())
      .then((data) => {
        setPickupBookings(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      aligh-items="flex-start"
      className={styles.container}
    >
      <Grid item sm={2}>
        <AdminAside onStateChange={onStateChange} />
      </Grid>
      <Grid item container justifyContent="space-evenly" sm={10}>
        {state == "Overview" ? (
          <Overview pickupCount={pickupBookings.length} />
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
        ) : (
          <div>Loading..!</div>
        )}
      </Grid>
    </Grid>
  );
};

export default dashboard;
