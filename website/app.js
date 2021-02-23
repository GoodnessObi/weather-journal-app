// Personal API Key for OpenWeatherMap API
const apiKey = '';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction (){
  const zipCode = document.getElementById('zip').value;
  const feeling = document.getElementById('feelings').value;
  
  clearRecentEntry();
  getWeather(apiKey, zipCode)
    .then(function(data) {
      return postData('/', {...data, feeling})
    })
    .then(function(){
      return updateUI();
    }).then(function() {
      return clearInputFields();
    })
    .catch(function(error) {
      document.getElementById('error').innerHTML = error.message;
    })
}

/* Function to GET Web API Data*/
async function getWeather (apiKey, zipCode){
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`)
    const data = await response.json();
    return {temp: data.main.temp, feels: data.main.feels_like, country: data.name};
  } catch(error) {
    throw new Error('Data unavailabe for that zipcode');
  }
}

/* Function to POST data */
async function postData ( url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

  return response;
}


/* Function to GET Project Data */
async function updateUI() {
  const response = await fetch('/all');
  try {
      const newData = await response.json();
      const dataArray = newData.data
      const recentEntry = dataArray.pop();
      const date = getDate();

      document.getElementById('date').innerHTML = date;
      document.getElementById('location').innerHTML = recentEntry.country;
      document.getElementById('temp').innerHTML = recentEntry.temp;
      document.getElementById('feels').innerHTML = recentEntry.feels;
      document.getElementById('content').innerHTML = recentEntry.feeling;
      
  } catch(error) {
      console.log('error', error);
  }
}
 
function getDate() {
  let d = new Date();
  let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();
  return newDate;
}

function clearInputFields() {
  document.getElementById('zip').value = '';
  document.getElementById('feelings').value = '';
}

function clearRecentEntry() {
  document.getElementById('date').innerHTML = '';
  document.getElementById('location').innerHTML = '';
  document.getElementById('temp').innerHTML = '';
  document.getElementById('feels').innerHTML = '';
  document.getElementById('content').innerHTML = '';
  document.getElementById('error').innerHTML = '';
}
