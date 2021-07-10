import React, { Component } from "react";
import { Person, AccessTime, Mail, DateRange, Phone } from "@material-ui/icons";

export default class CarHireNext extends Component {
  render() {
    return (
      <div>
        <form
          className="checkoutForm"
          style={{ width: "50vw", margin: "2rem auto" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <AccessTime />
              </span>
              <input type="time" name="" id="" />
            </div>

            <div className="inputControl">
              <span>
                <DateRange />
              </span>
              <input type="text" name="" placeholder="Number of Days" id="" />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <Mail />
              </span>
              <input type="text" placeholder="Email" name="" id="" />
            </div>

            <div className="inputControl">
              <span>
                <Person />
              </span>
              <input type="text" placeholder="Name" name="" id="" />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <Phone />
              </span>
              <input type="tel" Placeholder="Enter Your Number" name="" id="" />
            </div>

            <div className="inputControl">
              <span>
                <Phone />
              </span>
              <input type="tel" Placeholder="Alternate Number" name="" id="" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
