import { ROUTE } from "./routes";
import {
  LayoutWrapper,
  Header,
  Title,
  NavigationContainer,
  HeaderLink,
  Main} 
  from "./styles";

import { type LayoutProps } from "./types";

function WeatherAppLayout({ children }: LayoutProps){
  return (
    <LayoutWrapper>
      <Header > 
        <Title>Weather App </Title>
        <NavigationContainer>
          <HeaderLink to={ROUTE.HOME}>Home </HeaderLink>
           <HeaderLink to={ROUTE.WEATHERS}>Weather </HeaderLink>     
        </NavigationContainer>

      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default WeatherAppLayout;
























// const APP_ID = "43cba59423ce2e6e2ecd59543ed9bcae";

// // находим элементы на странице
// const searchForm = document.getElementById("searchForm");
// const cityInput = document.getElementById("cityInput");
// const searchBtn = document.getElementById("searchBtn");
// const loading = document.getElementById("loading");
// const result = document.getElementById("result");

// // маленькая помощница: создаёт div с текстом и классом
// // чтобы не писать 3 строки на каждый элемент
// function createDiv(className, text) {
//   const div = document.createElement("div");
//   div.className = className;
//   div.textContent = text;
//   return div;
// }

// // когда отправляем форму (нажали Search или Enter)
// searchForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   getWeather();
// });

// async function getWeather() {
//   const city = cityInput.value.trim();

//   // если поле пустое - просим ввести город и выходим
//   if (city === "") {
//     alert("Please enter a city name");
//     return;
//   }

//   // прячем старый результат, показываем "Loading..."
//   result.innerHTML = "";
//   loading.hidden = false;
//   searchBtn.disabled = true;



//   try {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     if (response.ok) {
//       showWeather(data);
//     } else {
//       showError(data.cod, data.message);
//     }
//   } catch (error) {
//     showError("Network Error", error.message);
//   } finally {
//     // это выполнится в любом случае - и при успехе, и при ошибке
//     loading.hidden = true;
//     searchBtn.disabled = false;
//   }
// }
// function createCard(label, value) {
//   const card = document.createElement("div");
//   card.className = "card";
//   card.appendChild(createDiv("card__label", label));
//   card.appendChild(createDiv("card__value", value));
//   return card;
// }

// // маленькая помощница: создаёт ОДНУ СТРОКУ внутри общего блока
// // (подпись слева, значение справа) - для карточки "details"
// function createDetailRow(label, value) {
//   const row = document.createElement("div");
//   row.className = "details__row";
//   row.appendChild(createDiv("details__label", label));
//   row.appendChild(createDiv("details__value", value));
//   return row;
// }
 
// // переводит градусы направления ветра в понятную сторону света
// function windDirection(deg) {
//   const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
//   const index = Math.round(deg / 45) % 8;
//   return directions[index];
// }
 
// // переводит unix-время (секунды) + смещение часового пояса города
// // в читаемое время вида "06:42"
// function formatTime(unixSeconds, timezoneOffsetSeconds) {
//   const date = new Date((unixSeconds + timezoneOffsetSeconds) * 1000);
//   const hours = String(date.getUTCHours()).padStart(2, "0");
//   const minutes = String(date.getUTCMinutes()).padStart(2, "0");
//   return `${hours}:${minutes}`;
// }
 

// function showWeather(data) {
//   const tempC = Math.round(data.main.temp - 273.15);
//   const feelsLikeC = Math.round(data.main.feels_like - 273.15);
//   const icon = data.weather[0].icon;
//   const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

//   result.innerHTML = "";

//   // верхняя карточка: температура + город + иконка
//   const top = document.createElement("div");
//   top.className = "weather-top";
//   top.appendChild(createDiv("weather-top__temp", tempC + "°"));
//   top.appendChild(createDiv("weather-top__city", data.name));

//   const iconImg = document.createElement("img");
//   iconImg.className = "weather-icon";
//   iconImg.src = iconUrl;
//   top.appendChild(iconImg);

//   // нижняя карточка: "Feels like"
//   const feelsCard = document.createElement("div");
//   feelsCard.className = "card";
//   feelsCard.appendChild(createDiv("card__label", "Feels like"));
//   feelsCard.appendChild(createDiv("card__value", feelsLikeC + "°"));

//   result.appendChild(top);
//   result.appendChild(feelsCard);
// }


// function showWeather(data) {
//   const tempC = Math.round(data.main.temp - 273.15);
//   const feelsLikeC = Math.round(data.main.feels_like - 273.15);
//   const tempMinC = Math.round(data.main.temp_min - 273.15);
//   const tempMaxC = Math.round(data.main.temp_max - 273.15);
//   const visibilityKm = (data.visibility / 1000).toFixed(1);
//   const sunrise = formatTime(data.sys.sunrise, data.timezone);
//   const sunset = formatTime(data.sys.sunset, data.timezone);
//   const windSpeed = data.wind.speed;
//   const windDir = windDirection(data.wind.deg);
//   const pressure = data.main.pressure;
 
//   const icon = data.weather[0].icon;
//   const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
 
//   result.innerHTML = "";
 
//   // верхняя карточка: температура + город + иконка
//   const top = document.createElement("div");
//   top.className = "weather-top";
//   // top.appendChild(createDiv("weather-top__temp", tempC + "°"));
//   // top.appendChild(createDiv("weather-top__city", data.name));

//  // temp и city кладём в отдельный "столбик", чтобы город
//   // был СНИЗУ температуры, а не сбоку
//   const info = document.createElement("div");
//   info.appendChild(createDiv("weather-top__temp", tempC + "°"));
//   info.appendChild(createDiv("weather-top__city", data.name));
//   top.appendChild(info);
 
//   const iconsBox = document.createElement("div");
//   iconsBox.className = "weather-top__icons";

//   const decorIcons = [data.weather[0].icon,"02d", "10d"];
//   decorIcons.forEach(code => {
//     const iconImg = document.createElement("img");
//     iconImg.className = "weather-icon";
//     iconImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
//     iconsBox.appendChild(iconImg);
//   });
//   top.appendChild(iconsBox);
 
//   // "feels like" - отдельная карточка (как и была)
//   const feelsCard = createCard("Feels like", feelsLikeC + "°");
 
//   // ВСЁ ОСТАЛЬНОЕ - собираем в ОДИН общий блок (третья карточка)
//   // вместо 6 отдельных маленьких карточек - список строк внутри одной
//   const detailsCard = document.createElement("div");
//   detailsCard.className = "card card--details";
 
//   detailsCard.appendChild(createDetailRow("Min / Max", `${tempMinC}° / ${tempMaxC}°`));
//   detailsCard.appendChild(createDetailRow("Visibility", visibilityKm + " km"));
//   detailsCard.appendChild(createDetailRow("Sunrise", sunrise));
//   detailsCard.appendChild(createDetailRow("Sunset", sunset));
//   detailsCard.appendChild(createDetailRow("Wind", `${windSpeed} m/s, ${windDir}`));
//   detailsCard.appendChild(createDetailRow("Pressure", pressure + " hPa"));
 
//   // сетка: слева "feels like"
//   const grid = document.createElement("div");
//   grid.className = "weather-bottom";
//   grid.appendChild(feelsCard);
//   grid.appendChild(detailsCard);
  
  
 
//   result.appendChild(top);
//   result.appendChild(grid);
// }
 
// function showError(code, message) {
//   result.innerHTML = "";

//   const errorCard = document.createElement("div");
//   errorCard.className = "error-card";
//   errorCard.appendChild(createDiv("error-card__code", "Error " + code));
//   errorCard.appendChild(createDiv("error-card__message", message));

//   result.appendChild(errorCard);
// }

// // Задание 1:
// // Блок пустой(добавить информацию):
// // Минимальная температура
// // максимальная температура
// // Видимость
// // восход солнца
// // заход солнца
// // Ветер(скорость направление)
// // давление

// // Задание 2:
// // Во время получения данных(т.е когда promise status==="pending"), 
// // вместо слова "Loading..." отобразить gif "spinner"
// // const milliseconds = 1718214300000; 
// // const dateObject = new Date(milliseconds); 
// // console.log(dateObject.toISOString());