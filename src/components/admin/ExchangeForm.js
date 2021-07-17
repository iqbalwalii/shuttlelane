import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import styles from "../../styles/BookingForm.module.css";

const ExchangeForm = () => {
  const [values, setValues] = useState({
    pound: "",
    dollar: "",
    euro: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("values are: ", values);
  };
  const onChangeHandler = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Grid xs={8}>
        <main className={styles.formContainer}>
          <form onSubmit={onSubmitHandler} className={styles.form}>
            <div className={styles.inputGroup}>
            <label htmlFor="Euro">Naira to Euro</label>
              <input
                 
                type="number"
                placeholder="1 Naira in Euro"
                id="firstName"
                name="firstName"
                onChange={onChangeHandler}
                value={inputValues.firstName}
              />
            </div>
          </form>
        </main>
      </Grid>
    </>
  );
};

export default ExchangeForm;
