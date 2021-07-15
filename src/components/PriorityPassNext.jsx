import React, { Component } from "react";
import {
  Person,
  AccessTime,
  Mail,
  DateRange,
  Phone,
  FlightLand,
} from "@material-ui/icons";

export default class PriorityPassNext extends Component {
  state = {
    name: "",
    surname: "",
    flightNumber: "",
    date: "",
    time: "",
    email: "",
    number: "",
    alternate: "",
  };
  render() {
    return (
      <div style={{ marginTop: "6rem" }}>
        <h4
          style={{
            margin: "0",
            paddingLeft: "1.4rem",
            textTransform: "uppercase",
          }}
        >
          Priority Pass Info
        </h4>
        <hr />
        <form className="checkoutForm">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <Person />
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                name=""
                id=""
                value={(e) => {
                  this.state.name;
                }}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
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
                value={(e) => {
                  this.state.surname;
                }}
                onChange={(e) => this.setState({ surname: e.target.value })}
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
                value={(e) => {
                  this.state.flightNumber;
                }}
                onChange={(e) =>
                  this.setState({ flightNumber: e.target.value })
                }
              />
            </div>

            <div className="inputControl">
              <span>
                <DateRange />
              </span>
              <input
                type="date"
                name=""
                placeholder="Date"
                id=""
                value={(e) => {
                  this.state.date;
                }}
                onChange={(e) => this.setState({ date: e.target.value })}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <AccessTime />
              </span>
              <input
                type="time"
                placeholder="time"
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
                <Mail />
              </span>
              <input
                type="mail"
                placeholder="Email Address"
                name=""
                id=""
                value={(e) => {
                  this.state.mail;
                }}
                onChange={(e) => this.setState({ mail: e.target.value })}
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
