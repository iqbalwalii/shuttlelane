import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Modal from "./Modal";
import CarBookingForm from "./CarBookingForm";
import styles from "../../styles/Dashboard.module.css";

const CarBooking = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/booking/car")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [editMode, setEditMode] = useState(false);
  const onClickHandler = () => {
    setEditMode(true);
  };
  return (
    <>
      <Grid item sm={12}>
        <h2 style={{ textAlign: "center", color: "#554986" }}>
          Car Transfer Overview
        </h2>
      </Grid>
      {editMode && (
        <Modal
          isOpen={editMode}
          onCloseHandler={() => {
            setEditMode(false);
          }}
        >
          <CarBookingForm />
        </Modal>
      )}
      <Grid item xs={12}>
        <main>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "1rem",
            }}
          >
            <h3>Existing Bookings</h3>
            <button className={styles.button} onClick={onClickHandler}>
              Add Booking
            </button>
          </div>

          <table className={styles.table}>
            <thead style={{ backgroundColor: "red" }}>
              <tr className={styles.theading}>
                <th>#</th>
                <th>Booking reference</th>
                <th style={{ marginLeft: "-15px" }}>Details</th>
                <th>Date & Time</th>
                <th>Passenger</th>
                <th>Amount</th>
                <th>Booking Date</th>
                <th>Service Status</th>
              </tr>
            </thead>
            <tbody className={styles.tableContent}>
              {bookings?.map((item, idx) => {
                return (
                  <tr key={item.bookingReference}>
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
                      <p>Pickup: {item?.pickupAddress}</p>
                      <p>Vehicle : {item?.carType}</p>

                      <p>Passengers: {item?.passengers}</p>

                      <p>Destination: {item?.destination}</p>
                    </td>

                    <td>
                      {item?.date?.slice(0, 10)} <br /> & {item.time}
                    </td>
                    <td>
                      <p>
                        <span>{item?.title}</span>{" "}
                        <span>{item?.firstName}</span>
                        <span>{item?.lastName}</span>
                      </p>
                      <p>{item?.email}</p>
                      <p>
                        <span>+{item?.countryCode}</span>{" "}
                        <span>{item?.mobile}</span>{" "}
                      </p>
                    </td>
                    <td>
                      NGN <br />
                      {item.amount}
                    </td>

                    <td>
                      {item.createdAt.slice(0, 10)} <br />
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

export default CarBooking;
