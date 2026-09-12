import { useState } from "react";
import "./styles.css";
import Button from "components/Button/Button";
import { v4 } from "uuid";

function Lesson_07_Practice() {
  interface Cars {
    pic: string;
    brand: string;
    price: number;
    isDiesel: boolean;
  }
  type ArrayGenerator<type> = type[];
  const cars: ArrayGenerator<Cars> = [
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

  const newCars = cars.map((value) => {
    return (
      <div key={v4()} className={`cars_card ${value.brand}`} id={value.brand}>
        <img className="car_img" src={value.pic} alt={value.brand} />
        <h1 className="brand">{value.brand}</h1>
        <p className="price">Price: ${value.price}</p>
        <p className="isDiesel">With Diesel? {value.isDiesel ? "Yes" : "No"}</p>
      </div>
    );
  });
  const [car, setCar] = useState(newCars);

  const carsBtn = newCars.map((value) => {
    return (
      <Button
        key={v4()}
        button_info={value.props.id}
        onClick={() => {
          setCar(value);
        }}
      />
    );
  });

  return (
    <div className="homework_05_wrapper">
      <div className="menu">
        <h1>Cars:</h1>
        <div className="btn_menu">
          <Button
            button_info={"All"}
            onClick={() => {
              setCar(newCars);
            }}
          />
          {carsBtn}
        </div>
      </div>
      <div className="card_wrapper">{car}</div>
    </div>
  );
}

export default Lesson_07_Practice;
