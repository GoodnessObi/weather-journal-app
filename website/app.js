// Personal API Key for OpenWeatherMap API
const apiKey = 'ebbd2f57d5cadca45a8ea3aa17c0b066';
// const baseURL = '

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction() {
  const zipCode = document.getElementById('zip').value;
  const countryCode = document.getElementById('country').value;
  getWeather(apiKey, zipCode, countryCode);
}

/* Function to GET Web API Data*/
async function getWeather (apiKey, zipCode, countryCode){
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}`)

  try {
    const data = await response.json();
    console.log(data)
    return data;
  } catch(error) {
    console.log('error', error)
  }

}

/* Function to POST data */


/* Function to GET Project Data */

