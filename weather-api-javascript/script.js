const cityLocation = document.getElementById("location");
const temperature = document.getElementById("temp");
const description = document.getElementById("desc");
const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const mainContainer = document.getElementById("main-container");
const windValue = document.getElementById("wind");
const humidityValue = document.getElementById("humidity");
const windDegreeValue = document.getElementById("wind-degree");
const percentageCloudValue = document.getElementById("cloud-cover");
const currentHourTemp = document.getElementById("current-hour-temp");
const currentWeather = document.getElementById("current-weather");
const laterHourTemp = document.getElementById("later-hour-temp");
const laterWeather = document.getElementById("later-weather");
const hourRow = document.getElementById("hour-row");

let dataObj = {};
searchButton.addEventListener("click", fetchCity);

async function fetchCity() {
  city = searchInput.value;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/city?name=${city}`,
    { headers: { "X-Api-Key": "GQSfQ+1WCbn+VcfjpPdIoA==tCbdhcDCBs5x2NVV" } }
  );
  const cityData = await response.json();
  const lati = cityData[0].latitude;
  const longi = cityData[0].longitude;

  const response1 = await fetch(
    `https://api.api-ninjas.com/v1/weatherforecast?lat=${lati}&lon=${longi}`,
    { headers: { "X-Api-Key": "GQSfQ+1WCbn+VcfjpPdIoA==tCbdhcDCBs5x2NVV" } }
  );
  const data1 = await response1.json();

  for (let key = 0; key <= 4; key++) {
    dataObj[key] = data1[key];
  }
  console.log("Data Object: ", dataObj);

  asignComponents(dataObj, city);
  showHourly(dataObj);
}

function asignComponents(data1, city) {
  description.innerHTML = `Feels Like: ${data1[0].feels_like}`;
  mainContainer.removeAttribute("hidden");

  windValue.innerHTML = data1[0].wind_speed + "km/h";
  humidityValue.innerHTML = data1[0].humidity + "%";
  windDegreeValue.innerHTML = data1[0].wind_degrees + "km";
  percentageCloudValue.innerHTML = data1[0].cloud_pct + "%";

  temp = data1[0].temp;
  temperature.innerHTML = temp + "°";
  cityLocation.innerHTML = "📍" + city;
}

function showHourly() {
  let html ="";
  for (const key in dataObj) {
    html += `
     <div class="hour-col">
        <div class="hour-time">${formatDateDay(dataObj[key].timestamp)}</div>
        <div class="hour-temp" id="later-hour-temp">${dataObj[key].temp}°</div>
        <div class="hour-icon">☀️</div>
        <div class="hour-chance" id="later-weather">${dataObj[key].weather}</div>
      </div>
      `;
  }
  hourRow.innerHTML = html;
  formatDateDay(dataObj);
}

function formatDateDay(date){
  day = new Date(date * 1000).toString();
  return new Date (day).toLocaleDateString("en-US",{
    // year:"numeric",
    // month:"short",
    date:"numeric"
  })
}
