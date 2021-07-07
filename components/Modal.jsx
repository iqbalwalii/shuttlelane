import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import modal from '../styles/Modal.module.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        
      >
        <Fade in={props.open} style={{background:'#362e8b', borderTopRightRadius:'50px',  borderBottomLeftRadius:'50px', border:'none',  }}>
          <div className={classes.paper}>
            <form className={modal.modalForm}>
              <div className={modal.name}>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className={modal.input}>
                <input type="email" placeholder="Email "  required/>
                <input type="tel" placeholder="Mobile" required/>
              </div>
              <div className={modal.disabled}>
                <label htmlFor='cost'>Price Total</label><input type="text" id='cost' placeholder="5243254" disabled />
                <label htmlFor='vat'>VAT</label><input type="text" id='vat' placeholder="87235" disabled />
                <label htmlFor='total'>Total</label><input id='total' type="text" disabled placeholder="3500000" />
              </div>
                <button className={modal.btnGrad}type="submit">Book Now</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
