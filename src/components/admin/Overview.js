import React from "react";
import { Grid } from "@material-ui/core";
import {
  Flight,
  LocalShipping,
  LocalTaxi,
  TransferWithinAStation,
} from "@material-ui/icons";

import styles from "../../styles/Dashboard.module.css";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  maxWidth: "300px",
  maxHeight: "18vh",
  margin: "10px",
  color: "#f3f3f3",
  borderRadius: "5px",
  boxShadow: "0 0 15px 5px #e7e7e7",
};

const Overview = ({ bookings }) => {
  console.log("bookings", bookings);
  return (
    <>
      <Grid item sm={3}>
        <div className={styles.purpleBackground} style={card}>
          <div>
            <h1>{bookings?.length}</h1>
            <p>Airport Pickup Bookings</p>
          </div>
          <Flight fontSize="large" />
        </div>
      </Grid>
      <Grid item sm={3}>
        <div className={styles.greenBackground} style={card}>
          <div>
            <h1>115</h1>
            <p>Car Bookings</p>
          </div>
          <LocalTaxi fontSize="large" />
        </div>
      </Grid>
      <Grid item sm={3}>
        <div className={styles.pinkBackground} style={card}>
          <div>
            <h1>115</h1>
            <p>Priority Pass Bookings</p>
          </div>
          <TransferWithinAStation fontSize="large" />
        </div>
      </Grid>
      <Grid item sm={3}>
        <div className={styles.blueBackground} style={card}>
          <div>
            <h1>115</h1>
            <p>Fleet Management</p>
          </div>
          <LocalShipping fontSize="large" />
        </div>
      </Grid>
      <Grid item sm={6} className={styles.cardStat}>
        <h4>Last 5 Airport Pickup Bookings</h4>
        <p className={styles.entry}>
          <span>No</span> <span>Booking Ref</span>
          <span>Date & Time</span> <span>Transfer Type</span>
          <span>Payment </span>
        </p>
        {bookings?.slice(0, 5).map((item, idx) => {
          return (
            <p className={styles.entry}>
              <span>{++idx}</span> <span>{item.bookingReference}</span>
              <span>
                {item.arrivalDate?.slice(0, 10) ||
                  item.pickupDate?.slice(0, 10)}{" "}
                <br />& {item.time}
              </span>
              <span>{item.formType.split("-").join(" ")}</span>
              <span>{item.paymentStatus}</span>
            </p>
          );
        })}
      </Grid>
      <Grid item sm={6} className={styles.cardStat}>
        <h4>Last 5 Car Transfer Bookings</h4>
        <p className={styles.entry}>
          <span>No</span> <span>Booking Ref</span>
          <span>Date & Time</span> <span>Transfer Type</span>
          <span>Payment Status</span>
        </p>
      </Grid>
      <Grid item sm={6} className={styles.cardStat}>
        <h4>Last 5 Priority Pass Bookings</h4>
        <p className={styles.entry}>
          <span>No</span> <span>Booking Ref</span>
          <span>Date & Time</span> <span>Transfer Type</span>
          <span>Payment Status</span>
        </p>
      </Grid>
      <Grid item sm={6} className={styles.cardStat}>
        <div>
          <h4>Last 5 Airport Transfer Bookings </h4> <span>view all</span>
        </div>

        <p className={styles.entry}>
          <span>No</span> <span>Booking Ref</span>
          <span>Date & Time</span> <span>Transfer Type</span>
          <span>Payment Status</span>
        </p>
      </Grid>
    </>
  );
};

export default Overview;
