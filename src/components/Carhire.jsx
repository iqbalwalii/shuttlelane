import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import car from "../styles/Carform.module.css";

let initialValues = {
  carType: "",
  pickupAddress: "",
  destination: "Lagos",
  date: "",
};
const Carhire = () => {
  const [state, setState] = useState(initialValues);
  const router = useRouter();

  // handler
  function onSubmitHandler(e) {
    e.preventDefault();
    console.log("CA HAYA Values:", state);
    let data = { ...state, formType: "Car-Hire" };

    console.log("CA HAYA Data", data);
    router.push({
      pathname: "/checkoutCar",
      query: data,
    });
  }
  console.log("CA HAYA STATE", state);
  return (
    <div>
      <form onSubmit={onSubmitHandler} className={car.form} id="car_hire">
        <input
          required
          placeholder="Pickup Address"
          type="text"
          name="pickupAddress"
          id="pickupAddress"
          value={state.pickupAddress}
          onChange={(e) =>
            setState({ ...state, pickupAddress: e.target.value })
          }
        />
        <select
          name="carType"
          id="carType"
          value={state.carType}
          required
          onChange={(e) => setState({ ...state, carType: e.target.value })}
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

        <input
          required
          placeholder="Destination Address"
          type="text"
          name="destination"
          id=""
          value={state.destination}
          onChange={(e) => setState({ ...state, destination: e.target.value })}
        />
        <input
          required
          placeholder="Date of Booking"
          type="date"
          name="date"
          id="date"
          value={state.date}
          onChange={(e) => setState({ ...state, date: e.target.value })}
        />
        <button type="submit" className="btnGrad">
          Procced
        </button>
      </form>
    </div>
  );
};
export default Carhire;
