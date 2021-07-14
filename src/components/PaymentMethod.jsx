import {Grid} from '@material-ui/core';
import {useState} from 'react'
import styles from '../styles/Summary.module.css'


const PaymentMethod = () => {
    let [selectedPayment, setSelectedPayment] = useState(' ')
    
    function paymentOptionHandler(e){
        console.log(e.target.id)
        setSelectedPayment(e.target.id);
        
    };
    return (
        
            <div className={styles.card}>
                <h4>Select Payment Method</h4>
                <div className={styles.paymentOption}>
                    <div id="Flutterwave"  onClick={paymentOptionHandler} style={{backgroundImage:`url('https://shuttlelane.com/images/flutterwaveP.png')`,  backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain', 
      backgroundPosition: 'center center'}}>
                        
                    </div>
                    <div id="Paypal" onClick={paymentOptionHandler}  style={{background:`url('https://shuttlelane.com/images/paypalP.png')`,  backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain', 
      backgroundPosition: 'center center'}}>
                        
                    </div>
                    <div id="Stripe" onClick={paymentOptionHandler}  style={{background:`url('https://shuttlelane.com/images/stripeP.png')`,  backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain', 
      backgroundPosition: 'center center'}}>
                        
                    </div>
                </div>
                <button className="btnGrad" type="submit">Proceed to Payment</button>
            </div>  
    )
}

export default PaymentMethod
