function citiesTime() {
  // Los Angeles
  let londonElement = document.querySelector("#london");

  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM	Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // New York
  let nyElement = document.querySelector("#ny");

  let nyDateElement = nyElement.querySelector(".date");
  let nyTimeElement = nyElement.querySelector(".time");
  let nyTime = moment().tz("America/New_York");

  nyDateElement.innerHTML = nyTime.format("MMMM	Do YYYY");
  nyTimeElement.innerHTML = nyTime.format("h:mm:ss [<small>]A[</small>]");

  //porto

  let portoElement = document.querySelector("#porto");

  let portoDateElement = portoElement.querySelector(".date");
  let portoTimeElement = portoElement.querySelector(".time");
  let portoTime = moment().tz("Europe/Porto");

  portoDateElement.innerHTML = portoTime.format("MMMM	Do YYYY");
  portoTimeElement.innerHTML = portoTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(citiesTime, 1000);
