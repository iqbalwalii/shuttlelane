import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import styles from "../../styles/BookingForm.module.css";

const AirportBookingForm = (props) => {
  const [inputValues, setInputValues] = useState({
    transferType: "",
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
        <main className={styles.formContainer}>
          <form onSubmit={onSubmitHandler} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="transferType">Transfer Type</label>
              <select
                onChange={onChangeHandler}
                name="transferType"
                id="transferType"
              >
                <option value=" " disabled defaultValue>
                  Select Transfer Type
                </option>
                <option value="Airport Pickup">Airport Pick-up</option>
                <option value="Airport Dropoff">Airport Drop-off</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="carType">Car Type</label>
              <select onChange={onChangeHandler} name="carType" id="carType">
                <option value=" " disabled defaultValue>
                  Select Car Type
                </option>
                <option value="economy">Economy</option>
                <option value="bussiness">Bussiness</option>
                <option value="executive">Executive</option>
                <option value="luxury">Luxury</option>
                <option value="shuttle">Shuttle</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="title">Title</label>
              <select onChange={onChangeHandler} name="title" id="title">
                <option value=" " disabled defaultValue>
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
