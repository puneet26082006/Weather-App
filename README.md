# Weather App

My first GitHub repository: a city weather app built with HTML, CSS, and vanilla JavaScript. It requests current weather from OpenWeather and starts with Jaipur.

## Features

- Search for a city using the search field.
- View temperature in Celsius and a weather description.
- See cloud cover, humidity, and atmospheric pressure in hPa.
- Display the city's country flag and a weather icon.

## Run locally

```sh
git clone https://github.com/puneet26082006/Weather-App.git
cd Weather-App
```

Open the repository in VS Code and serve [Weather latest application/index.html](Weather%20latest%20application/index.html) with Live Server.

Alternatively, with Python 3 installed, run this command from the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory "Weather latest application"
```

Then open [http://localhost:8000](http://localhost:8000). On Windows, `py -3` can be used in place of `python`.

No npm installation or build step is required.

## API setup

The app calls OpenWeather's current-weather endpoint from `searchWeather()` in [script.js](Weather%20latest%20application/script.js), using metric units.

For a local copy, replace the `apiKey` value in that function with your own key for the current-weather API. The key currently in the repository should not be assumed to remain valid. A key placed in browser JavaScript is visible to visitors; do not commit a replacement personal key. A public deployment should move credentialed requests behind a server endpoint.

## Use the app

1. Load the page; it requests weather for Jaipur automatically.
2. Enter a city, such as `London`.
3. Submit the search form or press Enter.
4. Read the returned temperature, description, cloud cover, humidity, and pressure.

An internet connection is required for weather data, flags, and external icon styles.

## Project files

| File | Purpose |
| --- | --- |
| [index.html](Weather%20latest%20application/index.html) | Search form and weather display |
| [style.css](Weather%20latest%20application/style.css) | Page styling and error animation |
| [script.js](Weather%20latest%20application/script.js) | API requests, response handling, and initial Jaipur search |

## Troubleshooting

- **The page shows an error animation:** inspect the OpenWeather response in your browser's Network panel. Check the city name and whether your API key is active.
- **The display does not update:** check your connection and the browser console. Network failures currently have no dedicated error message.
- **A weather icon is missing on an HTTPS host:** the current source uses HTTP icon URLs. Browsers may upgrade or block them; use HTTPS icon URLs when updating the deployment.
