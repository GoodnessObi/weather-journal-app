# weather-journal-app
Project #3 for the Udacity Frontend Web Developer nanodegree

## Introduction
This project is an asynchronous web app that uses a [weather web api](https://openweathermap.org/) and user data to dynamically update the UI for a Weather-Journal App.

## Installation
Ensure you have [node](https://nodejs.org/en/) installed on your local device

Get an api key from the [weather web api](https://openweathermap.org/) used - this would require creating an account

* Fork the repository to create a version on your account
* Clone the repository 
```
//locally
git clone https://github.com/<Your Github Username>/weather-journal-app.git
```
* Input the api key on the first line in the `website/app.js` file
```
const apiKey = '***...';
```
* Install the node packages
```
npm install
npm start
```
* Open your local browser and verify the weather-journal-app is working by accessing
```
http://localhost:8000/
```

## Usage
Put in values in the input fields and click the generate button. The date, your location, the temperature, what the day actually feels like :) and your feelings are returned.

## License
[MIT](https://choosealicense.com/licenses/mit/)
