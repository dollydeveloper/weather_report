# React Weather App

This is a responsive weather application built using React. It allows users to search for the current weather in any city and displays relevant weather data including temperature, humidity, wind speed, and a weather icon.

## Features

- Search for weather information by city name.
- Display of current temperature, humidity, and wind speed.
- Weather icons and background images that change based on the weather condition.
- Time and date display based on the searched city's timezone.
- Dark mode toggle for a better viewing experience in different lighting conditions.
- Responsive design for usability on both desktop and mobile devices.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Moment.js: A library for parsing, validating, manipulating, and formatting dates.
- OpenWeatherMap API: A service that provides weather data.

## Getting Started

### Prerequisites

- Node.js: Ensure you have Node.js installed on your local machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-varadevipriya/react-weather-app.git

  
// Navigate To The Project Directory:

cd react-weather-app

// Install the dependencies:

npm install

// Obtain an API key from OpenWeatherMap and replace YOUR_API_KEY_HERE in the Weather.js file with your actual API key.

// Run The Application

npm start

Open your web browser and go to http://localhost:3000 to view the application.

// Project Structure

react-weather-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Assets/
│   │   ├── cloudy.png
│   │   ├── sunny.png
│   │   ├── rainy.png
│   │   └── snowy.png
│   ├── components/
│   │   └── Weather.js
│   ├── App.js
│   ├── index.js
│   ├── weather.css
│   └── ...
├── .gitignore
├── package.json
└── README.md

// Usage
1) Enter a city name in the search bar and click the search icon.
2) View the weather details for the entered city.
3)Toggle between light and dark mode using the sun/moon icon.

// Responsive Design
The application is designed to be responsive and works well on both desktop and mobile devices. Media queries are used to adjust the layout and styling for different screen sizes.

// Acknowledgements
OpenWeatherMap for providing the weather data API.
React Icons for the beautiful icons.


### Notes:

- Replace `YOUR_API_KEY_HERE` with the actual API key in the `Weather.js` file.
- Replace `C:\Users\Dell\Downloads\localhost_3001_ (1).png` and `C:\Users\Dell\Downloads\localhost_3001_.png` with the actual paths  screenshots.
- Update the GitHub repository URL (`https://github.com/your-varadevipriya/react-weather-app.git`) 

// This `README.md` file provides an overview of the project, installation instructions, usage guidelines, and other relevant information to help users and contributors understand and use the application.

