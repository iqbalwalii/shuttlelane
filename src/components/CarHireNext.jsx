import React, { Component } from "react";
import { useState } from "react";
import { Card } from "@material-ui/core";
import { useRouter } from "next/router";
import {
  Person,
  AccessTime,
  Mail,
  DateRange,
  Phone,
  DriveEta,
  CalendarToday,
} from "@material-ui/icons";
import next from "../styles/Next.module.css";

const CarHireNext = ({ data, setData }) => {
  console.log("DROPOFFFFFFFFFFFF..", data);
  const onChangeHandler = (e) => {
    console.log("Nameeeee", e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Card
        className={next.checkoutForm}
        style={{ backgroundColor: "#fff", marginTop: "2rem" }}
      >
        <h4
          style={{
            margin: "0",
            paddingLeft: "1.4rem",
            textTransform: "uppercase",
          }}
        >
          Car Hire Details
        </h4>
        <hr />
        <form className="checkoutForm">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <DriveEta />
              </span>
              <select
                name="carType"
                id="carType"
                value={data.carType}
                onChange={onChangeHandler}
                required
              >
                <option value="" disabled selected>
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
            </div>

            <div className="inputControl">
              <span>
                <DateRange />
              </span>
              <input
                type="date"
                name="date"
                placeholder="Date"
                id=""
                value={data.date}
                onChange={onChangeHandler}
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
                placeholder="Destination"
                name="destination"
                id=""
                value={data.destination}
                onChange={onChangeHandler}
              />
            </div>

            <div className="inputControl">
              <span>
                <Person />
              </span>
              <input
                type="text"
                placeholder="Pickup Address"
                name="pickupAddress"
                id=""
                value={data.pickupAddress}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="inputControl">
              <span>
                <CalendarToday />
              </span>
              <input
                type="number"
                name="days"
                min="1"
                max="10"
                placeholder="Number of Days"
                id=""
                required
                value={data.days}
                onChange={onChangeHandler}
              />
            </div>
            <div className="inputControl">
              <span>
                <AccessTime />
              </span>
              <input
                type="time"
                name="time"
                id=""
                value={data.time}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default CarHireNext;
