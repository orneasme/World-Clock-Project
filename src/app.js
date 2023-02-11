function SetCityTimes() {
  //Buenos Aires//
  let BuenosAiresElement = document.querySelector("#Buenos Aires");
  let BuenosAiresDate = document.querySelector(".date");
  let BuenosAiresTime = moment();
  BuenosAiresDate.innerHTML = BuenosAiresTime.format("MMMM Do YYYY");

  let BATimeElement = document.querySelector("#Timezone1");
  BATimeElement.innerHTML = moment()
    .tz("America/Buenos_Aires")
    .format("hh:mm:ss [<small>]A [</small>]");

  //Zurich//
  let ZurichElement = document.querySelector("#Zurich");
  let ZurichDate = document.querySelector(".dateZurich");
  let ZurichTime = moment();
  ZurichDate.innerHTML = ZurichTime.format("MMMM Do YYYY");

  let ZurichTimeElement = document.querySelector("#Timezone2");
  ZurichTimeElement.innerHTML = moment()
    .tz("Europe/Zurich")
    .format("hh:mm:ss [<small>]A [</small>] ");

  //Sydney//

  let SydneyElement = document.querySelector("#Sydney");
  let SydneyDate = document.querySelector(".dateSydney");
  let SydneyTimeElement = document.querySelector("#Timezone3");
  let SydneyTime = moment().tz("Australia/Sydney");
  SydneyDate.innerHTML = SydneyTime.format("MMMM Do YYYY");
  SydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("hh:mm:ss [<small>]A [</small>] ");
}
SetCityTimes();
setInterval(SetCityTimes, 1000);

function displayselectedCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityDate = cityTime.format("MMMM Do YYYY");
  let cityContainerElement = document.querySelector(".city_container");
  cityContainerElement.innerHTML = `
  <div class="city" id="">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="Timezone">${cityTime.format(
            "hh:mm:ss [<small>]A [</small>] "
          )}</div>
        </div>
  `;
}

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", displayselectedCity);
