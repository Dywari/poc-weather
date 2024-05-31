
## Description
This project aims to display the weather based on the user's geographical coordinates obtained from their browser. 
Using the OpenWeatherMap API, the application retrieves weather data. 
Given the limitations of the free version of OpenWeatherMap in terms of daily request limits, a caching system is implemented to reduce the number of requests. 
The application's interface is designed to be responsive, ensuring usability on both PCs and smartphones. 

Additionally, the application includes a system that only refreshes the weather data if the device's location has changed by more than 3 kilometers compared to the previous location.

# Installation
Follow these steps to install the project:

## Install the dependencies
### `npm install`

#Usage
To start the application, use the following command:
### `npm start`

Once the application is running, it will automatically detect your location and display the current weather.
The application is responsive and works seamlessly on both PCs and smartphones navigators with Geolocation API 
(https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).


##Dependencies
Here is the list of dependencies used in this project:

- @emotion/react: ^11.11.4
- @emotion/styled: ^11.11.5
- @fontsource/roboto: ^5.0.13
- @mui/icons-material: ^5.15.18
- @mui/material: ^5.15.18
- @react-rxjs/core: ^0.10.7
- @react-rxjs/utils: ^0.9.7
- @tanstack/react-query: ^5.40.0
- @types/node: ^16.18.96
- @types/react: ^18.3.0
- @types/react-dom: ^18.3.0
- axios: ^1.6.8
- react-scripts: 5.0.1
- rxjs: ^7.8.1
- "tailwindcss": "^3.4.3"
- typescript: ^4.9.5

##License
This project is licensed under the MIT License

##Credits
OpenWeatherMap API

##FAQ
Q: How does the caching system work?

A: The caching system stores the weather data in the browser's local storage to minimize the number of API requests. 
Cached data is refreshed periodically to ensure accuracy (30min).

Q: Can the application handle location changes?

A: Yes, the application is designed to detect and handle changes in the device's location, updating the weather information accordingly. However, to avoid unnecessary updates, the weather data is only refreshed if the new location differs by more than 3 kilometers from the previous location.
