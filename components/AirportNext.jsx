import React, { Component } from "react";
import { Card } from "@material-ui/core";
import {
  FlightLand,
  Today,
  AccessTime,
  LocalAirport,
  ArrowForward,
  PeopleAlt,
  LocationOn,
} from "@material-ui/icons";
import next from "../styles/Next.module.css";
export default class AirportNext extends Component {
  state = this.props.data;
  onChangeHandler = (e) => {
    console.log(["Nameeeee", e.target.name]);
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  render() {
    console.log("state", this.state);
    return (
      <div style={{ marginBottom: "1rem" }}>
        <Card
          className={next.checkoutForm}
          style={{ backgroundColor: "#fff", marginTop: "1rem" }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: ".5rem 1.5rem",
              borderBottom: "1px solid #212121",
            }}
          >
            <h4
              style={{ margin: "0", padding: "0", textTransform: "uppercase" }}
            >
              Airport {this.props.formType} Info
            </h4>
          </div>
          <form>
            <div className={next.formGroup}>
              <div className={next.inputControl}>
                <span>
                  <FlightLand fontSize="small" />
                </span>
                <select
                  name="airport"
                  id="dropoffAirport"
                  value={this.state?.pickupAirport?.split("+").join(" ")}
                >
                  <option selected disabled value="null" id="null">
                    Select pickup Airport
                  </option>
                  <option value="Murtala Muhammed International Airport">
                    Murtala Muhammed International Airport
                  </option>
                  <option value="Murtala Muhammed Domestic Airport">
                    Murtala Muhammed Domestic Airport
                  </option>
                  <option value="Port Harcourt International Airport">
                    Port Harcourt International Airport
                  </option>
                  <option value="Nnamdi Azikwe International Airport">
                    Nnamdi Azikwe International Airport
                  </option>
                  <option value="Kotoka International Airport">
                    Kotoka International Airport
                  </option>
                  <option value="Kumasi Airport">Kumasi Airport</option>
                  <option value="London Heathrow Airport">
                    London Heathrow Airport
                  </option>
                  <option value="Gatwick Airport">Gatwick Airport</option>
                  <option value="London City Airport">
                    London City Airport
                  </option>
                </select>
              </div>

              <div className={next.inputControl}>
                <span>
                  <LocationOn fontSize="small" />
                </span>
                <input
                  type="text"
                  name="dropoffAddress"
                  id=""
                  placeholder="Drop-off Address"
                  value={this.state?.dropoffAddress}
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className={next.formGroup}>
              <div className={next.inputControl}>
                <span>
                  <Today fontSize="small" />
                </span>
                <input
                  type="date"
                  name=""
                  id="calendar"
                  value={this.state?.dropoffDate}
                />
              </div>
              <div className={next.inputControl}>
                <span>
                  <LocalAirport fontSize="small" />
                </span>
                <input
                  type="number"
                  name="passengers"
                  id="passengers"
                  value={this.state?.passengers}
                />
              </div>
            </div>
            <div className={next.formGroup}>
              <div className={next.inputControl}>
                <span>
                  <AccessTime fontSize="small" />
                </span>
                <input type="time" name="" id="" placeholder="Select time" />
              </div>

              <div className={next.inputControl}>
                <span>
                  <PeopleAlt fontSize="small" />
                </span>
                {/* <select name="airport" id="dropoffAirport">
                  <option selected disabled value="null" id="null">
                    Select Dropoff Airport
                  </option>
                  <option value="Murtala Muhammed International Airport">
                    Murtala Muhammed International Airport
                  </option>
                  <option value="Murtala Muhammed Domestic Airport">
                    Murtala Muhammed Domestic Airport
                  </option>
                  <option value="Port Harcourt International Airport">
                    Port Harcourt International Airport
                  </option>
                  <option value="Nnamdi Azikwe International Airport">
                    Nnamdi Azikwe International Airport
                  </option>
                  <option value="Kotoka International Airport">
                    Kotoka International Airport
                  </option>
                  <option value="Kumasi Airport">Kumasi Airport</option>
                  <option value="London Heathrow Airport">
                    London Heathrow Airport
                  </option>
                  <option value="Gatwick Airport">Gatwick Airport</option>
                  <option value="London City Airport">
                    London City Airport
                  </option>
                </select> */}
              </div>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}
