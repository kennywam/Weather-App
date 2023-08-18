# Weather Forecast App

The Weather Forecast App is a web application that allows users to search for a place and check its weather forecast. It utilizes the OpenWeatherMap API to retrieve weather data based on user input.

## Features

- Search for a location to check its weather forecast.
- Display a list of matching locations as the user types.
- View weather details including temperature, humidity, and more.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- OpenWeatherMap API: Provides weather data and forecasts.

## How to Run the App

Follow these steps to run the Weather Forecast App on your local machine:

1. Clone the repository:

`git clone https://github.com/kennywam/Weather-App.git`

2. Navigate to the project directory:

`cd weather-forecast-app`

3. Install the dependencies:

`npm install`

4. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/) by signing up and creating an API key.

5. Create a .env.local file in the project root directory and add your API key:

REACT_APP_API_KEY=your_api_key_here
Note: I included the API in the code to avoid gitigore

6. Start the development server:

`npm start`

7. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.
