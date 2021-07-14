import React, { Component } from "react";
import Link from "next/link";
import car from "../styles/Carform.module.css";

export default class Carhire extends Component {
  state = {
    vehicle: "",
    address: "",
    destination: "Lagos",
    date: "",
    time: "",
    days: "",
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <form className={car.form} id="car_hire">
          <input
            required
            placeholder="Pickup Address"
            type="text"
            name=""
            id=""
            value={this.state.address}
            onChange={(e) => this.setState({ address: e.target.value })}
          />
          <select
            name=""
            id=""
            value={this.state.vehicle}
            required
            onChange={(e) => this.setState({ vehicle: e.target.value })}
          >
            <option value="" disabled Selected>
              Select Car
            </option>
            <option value="Ford Focus">Ford Focus </option>
            <option value="Ford Figo">Ford Figo </option>
            <option value="Ford Fusion">Ford Fusion </option>
            <option value="Ford Eco Sport">Ford Eco Sport</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="Volkswagon Passat">Volkswagon Passat</option>
            <option value="Toyota Corolla">Toyota Corolla</option>
            <option value="Hyundai Elentra">Hyundai Elentra</option>
            <option value="Ford Escape">Ford Escape</option>
            <option value="Hyundai IX35">Hyundai IX35</option>
            <option value="Hyundai Santa Fe">Hyundai Santa Fe</option>
            <option value="Toyota Rav 4">Toyota Rav 4</option>
            <option value="Honda CRV">Honda CRV</option>
            <option value="Toyota Sienna">Toyota Sienna</option>
            <option value="Mercedes Benz E200">Mercedes Benz E200</option>
            <option value="BMW Grancoupe 428i">BMW Grancoupe 428i</option>
            <option value="Toyota Camry 2018">Toyota Camry 2018</option>
            <option value="Toyota Prado 2014">Toyota Prado 2014</option>
            <option value="Toyota Prado 2017">Toyota Prado 2017</option>
            <option value="Toyota Prado 2018">Toyota Prado 2018</option>
            <option value="Toyota Prado 2020">Toyota Prado 2020</option>
            <option value="Toyota Landcruiser 2018">
              Toyota Landcruiser 2018
            </option>
            <option value="Ford Edge">Ford Edge</option>
            <option value="Ford Explorer">Ford Explorer</option>
            <option value="Toyota Hiace">Toyota Hiace</option>
            <option value="Toyota Coaster">Toyota Coaster</option>
          </select>

          <input
            required
            placeholder="Destination Address"
            type="text"
            name=""
            id=""
            value={this.state.destination}
            onChange={(e) => this.setState({ destination: e.target.value })}
          />
          <input
            required
            placeholder="Date of Booking"
            type="date"
            name=""
            id=""
            value={this.state.date}
            onChange={(e) => this.setState({ date: e.target.value })}
          />
          {/* <input
            required
            placeholder="Time of Booking"
            type="time"
            name=""
            id=""
            value={this.state.time}
            onChange={(e) => this.setState({ time: e.target.value })}
          /> */}
          {/* <input
            required
            placeholder="Number of Passengers"
            type="number"
            name=""
            id=""
            value={this.state.days}
            onChange={(e) => this.setState({ days: e.target.value })}
          /> */}
          <Link href="/checkoutCar">
            <a className="btnGrad">Procced</a>
          </Link>
        </form>
      </div>
    );
  }
}
