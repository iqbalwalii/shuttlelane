import {Grid } from '@material-ui/core';
import styles from '../styles/Summary.module.css'
const Summary = () =>{
return (
    <div className={styles.card}>
      <h4>Booking Summary</h4>
      <div>
        <p><span>Airport Transfer</span> <span>$33.3</span></p>
        <p><span>7.5% Vat</span> <span>$2.44</span></p>
        <p className={styles.total}><span>Total</span> <span>$244.44</span></p>
        <select  name="currency" id="currency">
          <option value="NGN">NGN  &#8358; </option>
          <option value="USD">USD  $</option>
          <option value="GBP">GBP  &#163;</option>
          <option value="EUR">EUR  &euro;</option>
        </select>
      </div>
    </div>
)
}
export default Summary; 