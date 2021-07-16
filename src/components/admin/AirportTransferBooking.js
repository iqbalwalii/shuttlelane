import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import styles from "../../styles/Dashboard.module.css";
import AirportBookingForm from "./AirportBookingForm";
import Modal from "./Modal";

const AirportTransferBooking = () => {
  const [pickupBookings, setPickupBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/booking/pickup")
      .then((res) => res.json())
      .then((data) => {
        setPickupBookings(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(pickupBookings);
  const [editMode, setEditMode] = useState(false);
  const onClickHandler = () => {
    setEditMode(true);
  };
  return (
    <>
      {editMode && (
        <Modal
          isOpen={editMode}
          onCloseHandler={() => {
            setEditMode(false);
          }}
        >
          <AirportBookingForm />
        </Modal>
      )}

      <Grid item xs={12}>
        <main
          style={{
            width: "98%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "1rem",
            }}
          >
            <h3>Airport Bookings</h3>
            <button className={styles.button} onClick={onClickHandler}>
              Add Booking
            </button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr className={styles.theading}>
                <th>#</th>
                <th>Booking reference</th>
                <th>Details</th>

                <th>Date & Time</th>
                <th>Passenger</th>
                <th>Amount</th>
                <th>Payment </th>
                <th>Booking Date</th>
                <th>Service </th>
              </tr>
            </thead>
            <tbody className={styles.tableContent}>
              {pickupBookings?.map((item, idx) => {
                return (
                  <tr>
                    <td
                      style={{
                        marginRight: "15px",
                        paddingLeft: "5px",
                        display: "inline-block",
                      }}
                    >
                      {++idx}
                    </td>
                    <td>{item.bookingReference}</td>
                    <td>
                      <p>{item.pickupAirport}</p>
                      <p>Vehicle Class: {item.carType}</p>
                      <p>Flight Number: {item.flightNumber}</p>
                      <p>Transfer Type: {item.formType}</p>
                      <p>Dropoff Address: {item.dropoffAddress}</p>
                    </td>

                    <td>
                      {item.arrivalDate.slice(0, 10)} <br /> & {item.time}
                    </td>
                    <td>
                      <p>
                        <span>{item.title}</span> <span>{item.firstName}</span>
                        <span>{item.lastname}</span>
                      </p>
                      <p>{item.emial}</p>
                      <p>
                        <span>+{item.countryCode}</span>{" "}
                        <span>{item.mobile}</span>{" "}
                      </p>
                      <p>Passengers: {item.passengers}</p>
                    </td>
                    <td>
                      NGN <br />
                      {item.amount}
                    </td>
                    <td>{item.paymentStatus}</td>
                    <td>
                      {item.createdAt.slice(0, 10)} <br /> & {item.time}
                    </td>
                    <td>Pending</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </Grid>
    </>
  );
};

export default AirportTransferBooking;
