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
  render() {
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
              Airport Transfer info
            </h4>
          </div>
          <form>
            <div className={next.radios}>
              <label htmlFor="Airport Pickup">Airport Pickup</label>
              <input type="radio" name="type" id="airport" />
              <label htmlFor="Airport Dropoff">Airport Drop-Off</label>
              <input type="radio" name='type' id="airport" />
            </div>
            <div className={next.formGroup}>
              <div className={next.inputControl}>
                <span>
                  <FlightLand fontSize="small" />
                </span>
                <select name="airport" id="dropoffAirport">
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
                </select>
              </div>

              <div className={next.inputControl}>
                <span>
                  <LocationOn fontSize="small" />
                </span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Drop-off Address"
                />
              </div>
            </div>
            <div className={next.formGroup}>
              <div className={next.inputControl}>
                <span>
                  <Today fontSize="small" />
                </span>
                <input type="date" name="" id="calendar" />
              </div>

              <div className={next.inputControl}>
                <span>
                  <AccessTime fontSize="small" />
                </span>
                <input
                  type="time"
                  name=""
                  id=""
                  placeholder="Drop-off Address"
                />
              </div>
            </div>
            <div className={next.formGroup}>
              <div className={next.inputControl}>
                <span>
                  <LocalAirport fontSize="small" />
                </span>
                <input type="text" name="" id="" />
              </div>

              <div className={next.inputControl}>
                <span>
                  <PeopleAlt fontSize="small" />
                </span>
                <select name="airport" id="dropoffAirport">
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
                </select>
              </div>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}
