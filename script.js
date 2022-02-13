const dataSection = document.getElementById("data");
const form = document.getElementById("myForm");

const displayData = (data) => {
   if (data.cod == 404) {
      dataSection.innerHTML = "No weather data found!";
   } else if (data.cod == 400) {
      dataSection.innerHTML = "Please enter city name!";
   } else {
      const dataSection = document.getElementById("data");
      const heading = document.createElement("h2");
      const parentDiv = document.createElement("div");
      const img = document.createElement("img");
      const temp = document.createElement("p");
      heading.textContent = "Weather in " + data.name;
      let temperature = data.main.temp - 273;
      temp.textContent =
         "Current temperature: " + temperature.toFixed(2) + "°C";
      dataSection.innerHTML = "";
      dataSection.appendChild(heading);
      dataSection.appendChild(parentDiv);
      img.setAttribute(
         "src",
         "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      );
      dataSection.appendChild(img);
      dataSection.appendChild(temp);
   }
};
const getData = (e) => {
   e.preventDefault();
   const location = document.getElementById("location");
   const locationData = location.value;
   const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
   const apiKey = "f73757d7f42c8b196572823b173fc15f";

   const url = baseUrl + locationData + "&appid=" + apiKey;

   fetch(url)
      .then((res) => res.json())
      .then((data) => {
         displayData(data);
      });
};

form.addEventListener("submit", getData);
