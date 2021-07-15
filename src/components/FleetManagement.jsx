import React, { Component } from "react";
import axios from "axios";
import {
  Business,
  DriveEta,
  Apartment,
  LocationOn,
  Explore,
  EmojiTransportation,
  Mail,
  Person,
  Phone,
  Dialpad,
  LocalAirport,
} from "@material-ui/icons";

export default class FleetManagement extends Component {
  state = {
    companyName: "",
    address: "",
    city: "",
    country: "",
    name: "",
    email: "",
    mobile: "",
    bookingEmail: "",
    bookingNumber: "",
    operatingHours: false,
    operatingAirports: "",
    openHours: false,
    vehicleType: "",
    fleetSize: "",
    operatingCities: "",
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      fetch("http://shuttlelane.herokuapp.com/api/fleet", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div style={{ marginTop: "6rem" }}>
        <h2 style={{ color: "#000080", textAlign: "center" }}>
          Fleet Management Solution
        </h2>
        <form
          className="checkoutForm"
          style={{ width: "50vw", margin: "2rem auto" }}
          onSubmit={this.onSubmitHandler}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                {" "}
                <Business />{" "}
              </span>
              <input
                type="text"
                name="companyName"
                id=""
                placeholder="Company Name"
                required
                value={this.state.companyName}
                onChange={(e) => this.setState({ companyName: e.target.value })}
              />
            </div>
            <div className="inputControl">
              <span>
                {" "}
                <Mail />{" "}
              </span>
              <input
                type="text"
                name="bookingEmail"
                id=""
                placeholder="Booking Email"
                required
                value={this.state.bookingEmail}
                onChange={(e) =>
                  this.setState({ bookingEmail: e.target.value })
                }
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                {" "}
                <EmojiTransportation />{" "}
              </span>
              <input
                type="text"
                name="city"
                id=""
                placeholder="City"
                required
                value={this.state.city}
                onChange={(e) => this.setState({ city: e.target.value })}
              />
            </div>
            <div className="inputControl">
              <span>
                {" "}
                <Explore />{" "}
              </span>
              <input
                type="text"
                name="country"
                id=""
                placeholder="Country"
                required
                value={this.state.country}
                onChange={(e) => this.setState({ country: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                {" "}
                <Person />{" "}
              </span>
              <input
                type="text"
                name=""
                id="name"
                placeholder="Name"
                required
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>

            <div className="inputControl">
              <span>
                <Mail />
              </span>
              <input
                type="text"
                name=""
                id="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                {" "}
                <Phone />{" "}
              </span>
              <input
                type="text"
                name="mobile"
                id=""
                placeholder="Telephone"
                required
                value={this.state.mobile}
                onChange={(e) => this.setState({ mobile: e.target.value })}
              />
            </div>

            <div className="inputControl">
              <span>
                {" "}
                <Dialpad />{" "}
              </span>
              <input
                type="text"
                name="bookingNumber"
                id=""
                placeholder="Booking Number"
                required
                value={this.state.bookingNumber}
                onChange={(e) =>
                  this.setState({ bookingNumber: e.target.value })
                }
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                {" "}
                <Apartment />{" "}
              </span>
              <input
                type="text"
                name="operatingCities"
                id=""
                placeholder="Operating cities"
                required
                value={this.state.operatingCities}
                onChange={(e) =>
                  this.setState({ operatingCities: e.target.value })
                }
              />
            </div>

            <div className="inputControl">
              <span>
                {" "}
                <LocalAirport />{" "}
              </span>
              <input
                type="text"
                name="operatingAirports"
                id=""
                placeholder="Operating Airports"
                required
                value={this.state.operatingAirports}
                onChange={(e) =>
                  this.setState({ operatingAirports: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="inputControl">
                <span>
                  {" "}
                  <LocationOn />{" "}
                </span>
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Address"
                  required
                  value={this.state.address}
                  onChange={(e) => this.setState({ address: e.target.value })}
                />
              </div>
              <div className="inputControl">
                <span>
                  <DriveEta />
                </span>
                <select
                  name="fleetSize"
                  id=""
                  value={this.state.fleetSize}
                  onChange={(e) => this.setState({ fleetSize: e.target.value })}
                >
                  <option disabled>Fleet Size</option>
                  <option value="15">15 Vehicles</option>
                  <option value="6-10">6-10 Vehicles</option>
                  <option value="11-20">11-20 Vehicles</option>
                  <option value="21-50">21-50 Vehicles</option>
                  <option value="50-100">50-100 Vehicles</option>
                </select>
              </div>
            </div>
            <div style={{ fontSize: ".9rem", marginBottom: "1rem" }}>
              Can You Pickup 24hrs per Day <br />
              <input
                type="radio"
                name="operatingHours"
                id=""
                value={this.state.operatingHours}
                onChange={(e) => this.setState({ operatingHours: true })}
              />{" "}
              Yes
              <br />
              <input
                type="radio"
                name="operatingHours"
                id=""
                value={this.state.operatingHours}
                onChange={(e) => this.setState({ operatingHours: false })}
              />{" "}
              No
            </div>
            <div style={{ fontSize: ".9rem", marginBottom: "1rem" }}>
              Office Open 24hrs
              <br />
              <input
                type="radio"
                name="openHours"
                id=""
                value={this.state.openHours}
                onChange={(e) => this.setState({ openHours: true })}
              />{" "}
              Yes
              <br />
              <input
                type="radio"
                name="openHours"
                id=""
                value={this.state.openHours}
                onChange={(e) => this.setState({ openHours: false })}
              />{" "}
              No
            </div>
          </div>

          <h4>Fleet Type</h4>
          <div className="fleetGrid">
            <div>
              <input
                type="checkbox"
                name="Standard-Sedan"
                id=""
                value={this.state.vehicleType}
                onChange={(e) =>
                  this.setState({
                    vehicleType: this.state.vehicleType + " " + e.target.name,
                  })
                }
              />
              <p>Toyota Corolla or Similar</p>
              <img src="/assets/images/smallsedan.png" alt="" />
            </div>
            <div>
              <input
                type="checkbox"
                name="Mini-Suv"
                id=""
                value={this.state.vehicleType}
                onChange={(e) =>
                  this.setState({
                    vehicleType: this.state.vehicleType + " " + e.target.name,
                  })
                }
              />
              <p>Toyota Rav 4 or Similar</p>
              <img src="/assets/images/MiniSuv.png" alt="" />
            </div>
            <div>
              <input
                type="checkbox"
                name="Large-Suv"
                id=""
                value={this.state.vehicleType}
                onChange={(e) =>
                  this.setState({
                    vehicleType: this.state.vehicleType + " " + e.target.name,
                  })
                }
              />
              <p>Toyota Prado or Similar</p>
              <img src="/assets/images/largesuv.png" alt="" />
            </div>
            <div>
              <input
                type="checkbox"
                name="Executive-Sedan"
                id=""
                value={this.state.vehicleType}
                onChange={(e) =>
                  this.setState({
                    vehicleType: this.state.vehicleType + " " + e.target.name,
                  })
                }
              />
              <p>Mercedes E-Class or Similar</p>
              <img src="/assets/images/exsedan.png" alt="" />
            </div>
            <div>
              <input
                type="checkbox"
                name="Mini-Bus"
                id=""
                value={this.state.vehicleType}
                onChange={(e) =>
                  this.setState({
                    vehicleType: this.state.vehicleType + " " + e.target.name,
                  })
                }
              />
              <p>Toyota Hiace or Similar</p>
              <img src="/assets/images/minibus.png" alt="" />
            </div>
          </div>

          <button className="btnGrad" type="submit">
            Book Now
          </button>
        </form>
      </div>
    );
  }
}
