import { Grid } from "@material-ui/core";
import { useState } from "react";
import styles from "../styles/Summary.module.css";

function createBooking(data, paymentMethod, amount) {
  console.log("SUBMOISSSSSSs", paymentMethod);
  console.log(paymentMethod, data, amount);

  //   const response = fetch("http://localhost:3001/api/booking")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("result fro server", data);
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.log("err in catch", err);
  //     });
  //   return response;
  return "created";
}
function validataDate(data) {
  console.log("validate data", data);
  return Object.values(data).includes("") || Object.values(data).includes(" ");
}

const PaymentMethod = ({ amount, bookingData }) => {
  let [selectedPayment, setSelectedPayment] = useState("");

  function paymentOptionHandler(e) {
    console.log(e.target.id);
    setSelectedPayment(e.target.id);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const verified = selectedPayment !== "" ? validataDate(bookingData) : true;
    if (!verified) {
      const response = createBooking(bookingData, selectedPayment, amount);
      console.log("VACK", response);
    } else {
      console.log("validation Error");
    }
  };
  return (
    <div className={styles.card}>
      <h4>Select Payment Method</h4>
      <div className={styles.paymentOption}>
        <div
          id="Flutterwave"
          onClick={paymentOptionHandler}
          style={{
            backgroundImage: `url('https://shuttlelane.com/images/flutterwaveP.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center center",
          }}
        ></div>
        <div
          id="Paypal"
          onClick={paymentOptionHandler}
          style={{
            background: `url('https://shuttlelane.com/images/paypalP.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center center",
          }}
        ></div>
        <div
          id="Stripe"
          onClick={paymentOptionHandler}
          style={{
            background: `url('https://shuttlelane.com/images/stripeP.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>
      <button className="btnGrad" type="submit" onClick={onSubmitHandler}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentMethod;
