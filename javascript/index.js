function updateTime() {
  /// Rome ////
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    let romeTime = moment().tz("Europe/Rome");

    romeDateElement.innerHTML = moment().format("MMMM Do YYYY");
    romeTimeElement.innerHTML = romeTime.format("h:mm:ss[<small>]A[</small>]");
  }
  /// Casablanca ///
  let casablancaElement = document.querySelector("#casablanca");
  if (casablancaElement) {
    let casablancaDateElement = casablancaElement.querySelector(".date");
    let casablancaTimeElement = casablancaElement.querySelector(".time");
    let casablancaTime = moment().tz("Africa/Casablanca");

    casablancaDateElement.innerHTML = moment().format("MMMM Do YYYY");
    casablancaTimeElement.innerHTML = casablancaTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  /// Bangkok ///
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDateElement.innerHTML = moment().format("MMMM Do YYYY");
    bangkokTimeElement.innerHTML = bangkokTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  /// Mahe ///
  let maheElement = document.querySelector("#mahe");
  if (maheElement) {
    let maheDateElement = maheElement.querySelector(".date");
    let maheTimeElement = maheElement.querySelector(".time");
    let maheTime = moment().tz("Indian/Mahe");

    maheDateElement.innerHTML = moment().format("MMMM Do YYYY");
    maheTimeElement.innerHTML = maheTime.format("h:mm:ss[<small>]A[</small>]");
  }
}

function updateCity(evet) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city" >
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM   Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )}<small>${cityTime.format("A")}</small>
                </div>
            </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
