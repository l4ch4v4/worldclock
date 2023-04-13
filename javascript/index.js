function updateTime() {
  /// Rome ////
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = moment().format("MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss[<small>]A[</smal>]");

  /// Casablanca ///
  let casablancaElement = document.querySelector("#casablanca");
  let casablancaDateElement = casablancaElement.querySelector(".date");
  let casablancaTimeElement = casablancaElement.querySelector(".time");
  let casablancaTime = moment().tz("Africa/Casablanca");

  casablancaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  casablancaTimeElement.innerHTML = casablancaTime.format(
    "h:mm:ss[<small>]A[</smal>]"
  );

  /// Bangkok ///
  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz("Asia/Bangkok");

  bangkokDateElement.innerHTML = moment().format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "h:mm:ss[<small>]A[</smal>]"
  );

  /// Mahe ///
  let maheElement = document.querySelector("#mahe");
  let maheDateElement = maheElement.querySelector(".date");
  let maheTimeElement = maheElement.querySelector(".time");
  let maheTime = moment().tz("Indian/Mahe");

  maheDateElement.innerHTML = moment().format("MMMM Do YYYY");
  maheTimeElement.innerHTML = maheTime.format("h:mm:ss[<small>]A[</smal>]");
}

updateTime();
setInterval(updateTime, 100);
