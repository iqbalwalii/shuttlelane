import React, { Component } from "react";
import {
  Person,
  AccessTime,
  Mail,
  DateRange,
  Phone,
  FlightLand,
} from "@material-ui/icons";

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
                <Person />
              </span>
              <input type="text" placeholder="Enter Your Name" name="" id="" />
            </div>

            <div className="inputControl">
              <span>
                <Person />
              </span>
              <input
                type="text"
                name=""
                placeholder="Enter Your Surname"
                id=""
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <FlightLand />
              </span>
              <input
                type="text"
                placeholder="Enter Flight Number"
                name=""
                id=""
              />
            </div>

            <div className="inputControl">
              <span>
                <DateRange />
              </span>
              <input type="date" name="" placeholder="Date" id="" />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <AccessTime />
              </span>
              <input type="time" placeholder="time" name="" id="" />
            </div>

            <div className="inputControl">
              <span>
                <Mail />
              </span>
              <input type="mail" placeholder="Email Address" name="" id="" />
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
