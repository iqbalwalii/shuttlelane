import React, { Component } from "react";

export default class RegisterPriorityPass extends Component {
  render() {
    return (
      <div>
        <form className={modal.modalForm}>
          <input type="email" name="" id="" placeholder="Enter Your Email" />
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
    );
  }
}
