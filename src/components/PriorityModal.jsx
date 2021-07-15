import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import modal from "../styles/Modal.module.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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
          timeout: 500,
        }}
      >
        <Fade
          in={props.open}
          style={{
            background: "#362e8b",
            borderTopRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            width: "40%",
            border: "none",
          }}
        >
          <div className={classes.paper}>
            <form className={modal.modalForm}>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
              />
              <div className={modal.inputFields}>
                <input type="date" name="" id="" />
                <input type="time" name="" id="" />
              </div>
              <input type="tel" name="" id="" placeholder="Enter Your Phone" />
              {/* <div className={modal.inputFields}> */}
              <select name="" id="" required>
                <option value="" defaultValue disabled value="null" id="null">
                  Cabin Classes{" "}
                </option>
                <option value="Pickup">Cabin Class</option>
                <option value="Pickup">Business Class </option>
                <option value="Pickup">First Class</option>
                <option value="Pickup">Premium Economy</option>
                <option value="Pickup">Economy</option>
              </select>
              {/* </div> */}
              <button className={modal.btnGrad} type="submit">
                Book Now
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
