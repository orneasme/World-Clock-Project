let BATimeElement = document.querySelector("#Timezone1");
BATimeElement.innerHTML = moment()
  .tz("America/Buenos_Aires")
  .format("hh:mm A ");

let ZürichElement = document.querySelector("#Timezone2");
ZürichElement.innerHTML = moment().tz("Zurich").format("hh:mm A ");

let SydneyElement = document.querySelector("#Timezone3");
SydneyElement.innerHTML = moment().tz("Australia/Sydney").format("hh:mm A ");
