// 1. Import Libraries, Types, Functions, Components
import { useState, type ReactNode } from "react";
import "./styles.css";
import Button from "components/Button/Button";
import { v4 } from "uuid";
import { type Cars } from "./types";

function Lesson_07_Practice() {
  // Turn any type to array
  type ArrayGenerator<type> = type[];

  // Initial cars array
  const initialCars: ArrayGenerator<Cars> = [
    {
      pic: "https://images.wallpapersden.com/image/download/bmw-f80-m3_Zm1pZ22UmZqaraWkpJRqZWWtamVl.jpg",
      brand: "BMW",
      price: 20000,
      isDiesel: true,
    },
    {
      pic: "https://images.wallpapersden.com/image/download/mercedes-benz-amg-cls-500_Zm1oa2yUmZqaraWkpJRqZWWtamVl.jpg",
      brand: "Mercedes",
      price: 22000,
      isDiesel: false,
    },
    {
      pic: "https://tse2.mm.bing.net/th/id/OIP.1Rspiw1KsGix3xLHVH5fYwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      brand: "Porsche",
      price: 50000,
      isDiesel: true,
    },
    {
      pic: "https://images.wallpapersden.com/image/download/nissan-370z-sport-car_a25lZmaUmZqaraWkpJRqZWWtamVl.jpg",
      brand: "Nissan",
      price: 25000,
      isDiesel: false,
    },
    {
      pic: "https://images.wallpapersden.com/image/download/audi-q8_bGZsZmaUmZqaraWkpJRqZWWtamVl.jpg",
      brand: "Audi",
      price: 50000,
      isDiesel: true,
    },
    {
      pic: "https://tse1.mm.bing.net/th/id/OIP.1BBfrFt67Cqg962HR3B1cQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      brand: "Tesla",
      price: 60000,
      isDiesel: false,
    },
  ];

  // Cars state
  const [cars] = useState<ArrayGenerator<Cars>>(initialCars);

  // Convert cars -> JSX cards
  const carCards = (value: Cars) => {
    return (
      <div key={v4()} className={`cars_card ${value.brand}`} id={value.brand}>
        <img className="car_img" src={value.pic} alt={value.brand} />
        <h1 className="brand">{value.brand}</h1>
        <p className="price">Price: ${value.price}</p>
        <p className="isDiesel">With Diesel? {value.isDiesel ? "Yes" : "No"}</p>
      </div>
    );
  };

  const allCards = cars.map(carCards);

  // Show all cards at the beginning
  const [displayCar, setDisplayCar] = useState<ReactNode[]>(allCards);

  // Buttons for each brand
  const carsBtn = cars.map((value) => {
    return (
      <Button
        key={v4()}
        button_info={value.brand}
        onClick={() => {
          const filter = allCards.filter(
            (card) => card.props.id === value.brand,
          );
          setDisplayCar(filter);
        }}
      />
    );
  });

  // Show filtered cars by price
  const handleSelect = (value: string): void => {
    if (value === "all") {
      setDisplayCar(allCards);
      return;
    }
    if (value === "priceHigh") {
      const sortedCarsDesc = [...cars]
        .sort((a, b) => b.price - a.price)
        .map(carCards);
      setDisplayCar(sortedCarsDesc);
      return;
    }
    if (value === "priceLow") {
      const sortedCarsAsc = [...cars]
        .sort((a, b) => a.price - b.price)
        .map(carCards);
      setDisplayCar(sortedCarsAsc);
      return;
    }
    if (value === "diesel") {
      const filteredCars = [...cars].filter((c) => c.isDiesel).map(carCards);
      setDisplayCar(filteredCars);
      return;
    }
    if (value === "nonDiesel") {
      const filteredCars = [...cars].filter((c) => !c.isDiesel).map(carCards);
      setDisplayCar(filteredCars);
      return;
    }
  };

  return (
    <div className="homework_05_wrapper">
      <div className="menu">
        <h1>Cars:</h1>
        <div className="btn_menu">
          <Button
            button_info={"All"}
            onClick={() => {
              setDisplayCar(allCards);
            }}
          />
          {carsBtn}
        </div>
        <div className="sortPrice">
          <select
            name="sortPrice"
            id="sortPrice"
            onChange={(e) => {
              handleSelect(e.target.value);
            }}
          >
            <option value="all" selected>
              All
            </option>
            <option value="priceHigh">Price: High -{">"} Low</option>
            <option value="priceLow">Price: Low -{">"} High</option>
            <option value="diesel">Diesel only</option>
            <option value="nonDiesel">Non Diesel only</option>
          </select>
        </div>
      </div>
      <div className="card_wrapper">{displayCar}</div>
    </div>
  );
}

export default Lesson_07_Practice;
