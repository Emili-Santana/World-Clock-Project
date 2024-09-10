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
  //porto

  let portoElement = document.querySelector("#lisbon");
  if (portoElement) {
    let portoDateElement = portoElement.querySelector(".date");
    let portoTimeElement = portoElement.querySelector(".time");
    let portoTime = moment().tz("Europe/Lisbon");

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
  let cityName = cityTimeZone.replace("_", " ").split("/")[1]; // hidden the underscore and the continent

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
            <div>
                <h2>${cityName} </h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
            <div class="time"> ${cityTime.format(
              "h:mm:ss"
            )} <small> ${cityTime.format("A")}</small></div>
        </div>`;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updatecity);
