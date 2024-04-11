function getWeather(latitude, longitude) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=7c3f2e7f7b03444288732646230507&q=${latitude},${longitude}`;
// this gets the current weather conditions using weatherapi, and returns it back to the client
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperatureElement = document.getElementById('temperature');
      const descriptionElement = document.getElementById('description');
      temperatureElement.textContent = `${data.current.temp_f}°F`;
      descriptionElement.textContent = data.current.condition.text;

    console.log(data.current.temp_f);

    })
    .catch(error => console.log(error));
}
// this function gets the users location 
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeather(latitude, longitude);
    }, error => {
      console.log(error);
      const locationelement = document.getElementById('description');
      const confused = document.getElementById('temperature');
      // if the user denies location permission, it tells the user, then dissapears after 4 seconds.
      locationelement.textContent = 'Enable location to show your local weather conditions.';
      confused.textContent = '?°F';
      // this is a log in the console if the user gets curious
      console.log('yo trust me you can check the network logs im not tryna find out where you live bro')
      setTimeout(function() {
        locationelement.style.display = "none";
        confused.style.display = "none";
      }, 4000);
    });
  }
}
getLocation();