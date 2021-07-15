import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={modalStyle}
      className={classes.paper}
      style={{
        background: `url(${prefix}/assets/images/covid.jpg")`,
        position: "absolute",
        top: "30vh",
        left: " 10vw",
        width: "80%",
        border: "1px solid #E2B443",
        outline: "none",
        borderRadius: "10px",
      }}
    >
      <h3
        id="simple-modal-title"
        style={{ color: "#000080", textShadow: "1px 1px #fff" }}
      >
        Responsible Travel: Coronavirus (COVID-19):
      </h3>
      <p id="simple-modal-description">
        Our priority is to ensure all our customers and drivers have a safe and
        comfortable journey. We are committed to doing everything we can to
        guard against the spread of COVID-19 and hope that all passengers will
        follow the advice from the Nigeria Centre for Disease Control (NCDC).
      </p>
      <p id="simple-modal-description">
        We advise all our customers to follow the current PUBLIC HEALTH ADVISORY
        ON COVID-19 guidance before taking journeys.
      </p>
      <button>Read More..</button>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
