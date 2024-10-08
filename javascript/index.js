//funtion for updade the for local time using moment.js
function citiesTime() {
  // Los Angeles
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM	Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    // New York
    let nyElement = document.querySelector("#ny");
    if (nyElement) {
      let nyDateElement = nyElement.querySelector(".date");
      let nyTimeElement = nyElement.querySelector(".time");
      let nyTime = moment().tz("America/New_York");

      nyDateElement.innerHTML = nyTime.format("MMMM	Do YYYY");
      nyTimeElement.innerHTML = nyTime.format("h:mm:ss [<small>]A[</small>]");
    }
  }
  //madrid

  let portoElement = document.querySelector("#madrid");
  if (portoElement) {
    let portoDateElement = portoElement.querySelector(".date");
    let portoTimeElement = portoElement.querySelector(".time");
    let portoTime = moment().tz("Europe/Madrid");

    portoDateElement.innerHTML = portoTime.format("MMMM	Do YYYY");
    portoTimeElement.innerHTML = portoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
citiesTime();
setInterval(citiesTime, 1000);

// update the information when we change the city on dropdown
function updatecity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1]; // hidden the underscore and the continent

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML =
    // "+" before = show several cities at the same time
    `
  <div class="city">
            <div>
                <h2>${cityName} </h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
            <div class="time"> ${cityTime.format(
              "h:mm:ss"
            )} <small> ${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All Cities</a>`;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updatecity);
