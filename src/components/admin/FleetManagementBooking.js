import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import FleetBookingForm from "./FleetBookingForm";
// import styles from '../../styles/BookingForm.module.css';
import styles from "../../styles/Dashboard.module.css";

const FleetManagementBooking = () => {
  const [editMode] = useState(false);
  const [fleets, setFleets] = useState([]);
  useEffect(() => {
    fetch("http://shuttlelane.herokuapp.com/api/users")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setFleets(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const onClickHandler = () => {
    setEditMode(true);
  };
  return (
    <>
      <Grid item sm={12}>
        <h2 style={{ textAlign: "center", color: "#554986" }}>
          Fleet Management Overview
        </h2>
      </Grid>
      {editMode && (
        <Modal
          isOpen={editMode}
          onCloseHandler={() => {
            setEditMode(false);
          }}
        >
          <FleetBookingForm />
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
                <th>Company Details</th>
                <th>Fleet Details</th>
                <th>Contact Details</th>
                <th></th>
                <th>Country</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Available 24*7</th>
                <th>Office Open 24*7</th>
                <th>Operating Cities</th>
                <th>Operating Airports</th>
                <th>Vehicle Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={styles.tableContent}>
              {[1, 2, 3, 4, 5].map((fleet, idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                      <p>Name: {fleet.companyName}</p>
                      <p>Email: {fleet.companyEmail}</p>
                      <p>
                        Booking Number:
                        {fleet.bookingNumber}
                      </p>
                      <p>Address: {fleet.address}</p>
                      <p>City: {fleet.city}</p>
                      <p>Country: {fleet.country}</p>
                      <p>Open 24* 7 :{fleet.openHours}</p>
                    </td>
                    <td>
                      <p>Size: {fleet.fleetSize}</p>
                      <p>Type:{fleet.vehicleType}</p>
                      <p>available 24 * 7 :{fleet.operatingHours}</p>
                    </td>
                    <td>
                      <p>Name: {fleet.name}</p>
                      <p>Email:{fleet.contactEmail}</p>
                      <p>
                        Phone:
                        {fleet.Mobile}
                      </p>
                    </td>
                    <td>successful</td>
                    <td>
                      12/11/2019 <br /> 09:02 pm
                    </td>
                    <td>Pending</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Sum</td>
                <td>$180</td>
              </tr>
            </tfoot>
          </table>
        </main>
      </Grid>
    </>
  );
};

export default FleetManagementBooking;
