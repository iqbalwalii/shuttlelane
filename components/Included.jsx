import {Grid } from '@material-ui/core';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import styles from '../styles/Summary.module.css'


const Included = () => {
    return (
        
    <div className={styles.card}>
      <h4>Also Included</h4>
      <div className={styles.included}>
        <p><span><LibraryAddCheckIcon fontSize="small" style={{color:"#81c784"}}/></span> <span>Free airport meet and greet.</span></p>
        <p><span><LibraryAddCheckIcon fontSize="small" style={{color:"#81c784"}}/></span> <span>Free bottled water.</span></p>
        <p><span><LibraryAddCheckIcon fontSize="small" style={{color:"#81c784"}}/></span> <span>Free cancellation up to 24 hours before pick-up.</span></p>
        <p><span><LibraryAddCheckIcon fontSize="small" style={{color:"#81c784"}}/></span> <span>60 minutes waiting time after flight arrival.</span></p>
        <p><span><LibraryAddCheckIcon fontSize="small" style={{color:"#81c784"}}/></span> <span>Free Trolley.</span></p>       
      </div>
    </div>
  
    )
}

export default Included
