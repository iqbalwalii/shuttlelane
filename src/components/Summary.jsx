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
  const USD = ["United States"];
  console.log("COUNTRYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY", country);
  return (
    <div className={styles.card}>
      <h4>Booking Summary</h4>
      <div>
        <p>
          <span>{title}</span> <span>$ {total}</span>
        </p>
        <p className={styles.total}>
          <span>Sub Total</span> <span>${subTotal} </span>
        </p>
        <select name="currency" id="currency">
          {country === "Nigeria" ? (
            <option value="NGN" selected>
              NGN &#8358;
            </option>
          ) : (
            <option value="NGN">NGN &#8358; </option>
          )}
          {country === "United States" ? (
            <option value="USD" selected>
              USD $
            </option>
          ) : (
            <option value="USD">USD $</option>
          )}
          {Euro.includes(country) ? (
            <option value="EUR" selected>
              EUR &euro;
            </option>
          ) : (
            <option value="EUR">EUR &euro;</option>
          )}
          {GBP.includes(country) ? (
            <option value="GBP" selected>
              GBP &#163;
            </option>
          ) : (
            <option value="GBP">GBP &#163;</option>
          )}
        </select>
      </div>
    </div>
  );
};
export default Summary;
