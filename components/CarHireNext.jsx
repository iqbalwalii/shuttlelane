import React, { Component } from "react";
import { Person, AccessTime, Mail, DateRange, Phone } from "@material-ui/icons";

export default class CarHireNext extends Component {
  state = {
    time: "",
    days: "",
    email: "",
    name: "",
    number: "",
    alternate: "",
  };
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
              <input
                type="time"
                name=""
                id=""
                value={(e) => {
                  this.state.time;
                }}
                onChange={(e) => this.setState({ time: e.target.value })}
              />
            </div>

            <div className="inputControl">
              <span>
                <DateRange />
              </span>
              <input
                type="text"
                name=""
                placeholder="Number of Days"
                id=""
                value={(e) => {
                  this.state.days;
                }}
                onChange={(e) => this.setState({ days: e.target.value })}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <Mail />
              </span>
              <input
                type="text"
                placeholder="Email"
                name=""
                id=""
                value={(e) => {
                  this.state.email;
                }}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="inputControl">
              <span>
                <Person />
              </span>
              <input
                type="text"
                placeholder="Name"
                name=""
                id=""
                value={(e) => {
                  this.state.name;
                }}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <Phone />
              </span>
              <input
                type="tel"
                Placeholder="Enter Your Number"
                name=""
                id=""
                value={(e) => {
                  this.state.number;
                }}
                onChange={(e) => this.setState({ number: e.target.value })}
              />
            </div>

            <div className="inputControl">
              <span>
                <Phone />
              </span>
              <input
                type="tel"
                Placeholder="Alternate Number"
                name=""
                id=""
                value={(e) => {
                  this.state.alternate;
                }}
                onChange={(e) => this.setState({ alternate: e.target.value })}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
