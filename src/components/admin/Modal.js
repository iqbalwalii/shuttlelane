import ReactDom from "react-dom";

const modalStyle = {
  position: "fixed",
  zIndex: 1000,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: ".5rem 1rem",
  background: "#ECF0F5",
  width: "80vw",
};
const overlayStyles = {
  position: "fixed",
  zIndex: 1000,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0, 0, 0, .7)",
};

const Modal = ({ children, isOpen, onCloseHandler }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div id="overlay" style={overlayStyles}></div>
      <div style={modalStyle}>
        <button
          onClick={onCloseHandler}
          style={{
            fontSize: "1.2rem",
            border: "none",
            background: " #4d96ff",
            cursor: "pointer",
            color: "#ECF0F5",
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </>,
    document.querySelector("#formModal")
  );
};

export default Modal;
