import { Grid } from "@material-ui/core";
import styles from "../styles/Summary.module.css";
const Summary = ({ total, handler, title, subTotal, country }) => {
  const Euro = [
    "Azores",
    "the Canaries",
    "Ceuta and Melilla",
    "French Guiana",
    "Guadeloupe",
    "Madeira",
    "Martinique",
    " Mayotte",
    "Réunion",
    "Saint Barthélemy",
    "Saint Pierre and Miquelon",
  ];
  const GBP = ["United Kingdom"];

  return (
    <div className={styles.card}>
      <h4>Booking Summary</h4>
      <div>
        <p>
          <span>{title}</span> <span>$ {total}</span>
        </p>
        {/* <p><span>7.5% Vat</span> <span>$2.44</span></p> */}
        <p className={styles.total}>
          <span>Sub Total</span> <span>${subTotal} </span>
        </p>
        <select name="currency" id="currency">
          {Euro.includes(country) ? (
            <option selected value="EUR">
              EUR &euro;
            </option>
          ) : (
            <option value="EUR">EUR &euro;</option>
          )}
          {GBP.includes(country) ? (
            <option selected value="GBP">
              GBP &#163;
            </option>
          ) : (
            <option value="GBP">GBP &#163;</option>
          )}
          <option value="EUR">EUR &euro;</option>
          <option value="NGN">NGN &#8358; </option>
          <option value="USD">USD $</option>
          <option value="GBP">GBP &#163;</option>
        </select>
      </div>
    </div>
  );
};
export default Summary;
