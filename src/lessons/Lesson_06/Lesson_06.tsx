import { useState } from "react";

function Lesson_06() {
  // 1 тип string
  let userFullName: string = "John Johnson";
  userFullName = "Brat Pitt";
  console.log(userFullName);
  // userFullName = 56; // будет ошибка
  // 2 тип number
  let number1: number = 100;
  let number2: number = 39.5;
  // number2 = "Hello"
  // 3 тип boolean
  let isAdmin: boolean = true;
  // 4 тип - array
  const animals: string[] = ["Tiger", "Lion", "Puma"];
  // animals.push(30); // ошибка - массив ожидает строку
  // 5 тип tupel
  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number,
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];
  // userArray[0] = true; // будет ошибка
  //////////////////////////////////////////////////////////////////////////
  // 6. functions
  // функция, которая что-то выполняет, но ничего не возвращает
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };
  // sayHi(400) // ошибка
  // функция, которая возврашает сумму 2 чисел
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  // undefined, null and any
  let empty: null | string = null;
  empty = "John";
  let someObject: undefined | string[];
  someObject = ["John", "Brat"];
  let anyVar: any = "Hello";
  anyVar = 40;
  anyVar = true;

  return <div>Lesson_06</div>;
}
export default Lesson_06;
