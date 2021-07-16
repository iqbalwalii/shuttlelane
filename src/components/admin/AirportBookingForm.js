import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import styles from "../../styles/BookingForm.module.css";

// HELPER FUNCTIONS
function createBooking(data) {
  console.log("SUBMOISSSSSSs", data);

  fetch("http://localhost:3001/api/booking/pickup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
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
function validataDate(data) {
  console.log("validate data", data);
  return Object.values(data).includes("") || Object.values(data).includes(" ");
}

const AirportBookingForm = (props) => {
  const [inputValues, setInputValues] = useState({
    formType: "",
    carType: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    mobile: "",
  });
  // const [transferTypeValue, setTransferTypeValue] =  useState(' ');
  // const [CarTypeValue, setCarTypeValue] =  useState(' ');
  // const [titleValue, setTitleValue] =  useState(' ');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("values are: ", inputValues);
    const verified = validataDate(inputValues);
    if (!verified) {
      const response = createBooking(inputValues);
      console.log("VACK", response);
    } else {
      console.log("validation Error");
    }
  };
  const onChangeHandler = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  // transferType: transferTypeValue, carType: CarTypeValue, title: titleValue,
  return (
    <>
      <Grid item sm={12}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "0",
          }}
        >
          Create Airport Transfer Booking
        </h2>
      </Grid>

      <Grid item xs={12}>
        <main
          className={styles.formContainer}
          style={{ height: "70vh", overflow: "scroll" }}
        >
          <form onSubmit={onSubmitHandler} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="formType">Transfer Type</label>
              <select onChange={onChangeHandler} name="formType" id="formType">
                <option value=" " disabled selected>
                  Select Transfer Type
                </option>
                <option value="Airport-Pickup">Airport Pick-up</option>
                <option value="Airport-Dropoff">Airport Drop-off</option>
              </select>
            </div>
            {inputValues.formType === "Airport-Pickup" ? (
              <>
                <div className={styles.inputGroup}>
                  <label htmlFor="pickupAirport">Select Pickup Airport</label>
                  <select
                    onChange={onChangeHandler}
                    name="pickupAirport"
                    id="pickupAirport"
                  >
                    <option selected disabled value="null" id="null">
                      Select Pickup Airport
                    </option>
                    <option value="Murtala Muhammed International Airport">
                      Murtala Muhammed International Airport
                    </option>
                    <option value="Murtala Muhammed Domestic Airport">
                      Murtala Muhammed Domestic Airport
                    </option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="flightNumber">Arrival Date</label>
                  <input
                    type="text"
                    placeholder="Flight number"
                    id="flightNumber"
                    name="flightNumber"
                    onChange={onChangeHandler}
                    value={inputValues.flightNumber}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="arrivalDate">Arrival Date</label>
                  <input
                    type="date"
                    placeholder="Arrival Date"
                    id="arrivalDate"
                    name="arrivalDate"
                    onChange={onChangeHandler}
                    value={inputValues.arrivalDate}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="dropoffAddress">Dropoff Address</label>
                  <input
                    type="text"
                    placeholder="Dropoff Address"
                    id="dropoffAddress"
                    name="dropoffAddress"
                    onChange={onChangeHandler}
                    value={inputValues.dropoffAddress}
                  />
                </div>
              </>
            ) : inputValues.formType === "Airport-Dropoff" ? (
              <>
                <div className={styles.inputGroup}>
                  <label htmlFor="dropoffAirport">Select Airport</label>
                  <select
                    onChange={onChangeHandler}
                    name="dropoffAirport"
                    id="dropoffAirport"
                  >
                    <option selected disabled value="null" id="null">
                      Select Dropoff Airport
                    </option>
                    <option value="Murtala Muhammed International Airport">
                      Murtala Muhammed International Airport
                    </option>
                    <option value="Murtala Muhammed Domestic Airport">
                      Murtala Muhammed Domestic Airport
                    </option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="pickupAddress">Pickup Address</label>
                  <input
                    type="text"
                    placeholder="Pickup Address"
                    id="pickupAddress"
                    name="pickupAddress"
                    onChange={onChangeHandler}
                    value={inputValues.pickupAddress}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="pickupDate">Pickup Date</label>
                  <input
                    type="date"
                    placeholder="Pickup Date"
                    id="pickupDate"
                    name="pickupDate"
                    onChange={onChangeHandler}
                    value={inputValues.pickupDate}
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <div className={styles.inputGroup}>
              <label htmlFor="carType">Car Type</label>
              <select onChange={onChangeHandler} name="carType" id="carType">
                <option value=" " selected>
                  Select Car Type
                </option>
                <option value="Economy">Economy</option>
                <option value="Bussiness">Bussiness</option>
                <option value="Executive">Executive</option>
                <option value="Luxury">Luxury</option>
                <option value="Shuttle">Shuttle</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="passengers">Passengers</label>
              <input
                type="number"
                placeholder="Number of Passengers"
                id="passengers"
                name="passengers"
                min="1"
                max="10"
                onChange={onChangeHandler}
                value={inputValues.passengers}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">Select Time</label>
              <input
                type="time"
                placeholder="Select Time"
                id="time"
                name="time"
                onChange={onChangeHandler}
                value={inputValues.time}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="title">Title</label>
              <select onChange={onChangeHandler} name="title" id="title">
                <option value=" " selected>
                  Select title
                </option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="ms">ms</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                onChange={onChangeHandler}
                value={inputValues.firstName}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                onChange={onChangeHandler}
                value={inputValues.lastName}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                onChange={onChangeHandler}
                value={inputValues.email}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="countryCode">Country Code</label>
              <select
                onChange={onChangeHandler}
                name="countryCode"
                id="countryCode"
              >
                <option value=" ">Select Country Code</option>
                <option value="IND">IND</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                placeholder="Mobile Number"
                id="mobile"
                name="mobile"
                onChange={onChangeHandler}
                value={inputValues.mobile}
              />
            </div>
            <button type="submit" className={styles.button}>
              Create Booking
            </button>
          </form>
        </main>
      </Grid>
    </>
  );
};

export default AirportBookingForm;
