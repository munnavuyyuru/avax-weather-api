import axios from "axios";

export async function getCoordinates(city: string) {
  const response = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: {
        name: city,
        count: 1,
      },
    },
  );

  const location = response.data.results?.[0];

  if (!location) {
    throw new Error("City not found");
  }

  return {
    latitude: location.latitude,
    longitude: location.longitude,
    name: location.name,
  };
}

export async function getWeather(city: string) {
  const coords = await getCoordinates(city);

  const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: coords.latitude,
      longitude: coords.longitude,
      current: ["temperature_2m", "weather_code", "wind_speed_10m"].join(","),
    },
  });

  return {
    city: coords.name,
    temperature: response.data.current.temperature_2m,
    windSpeed: response.data.current.wind_speed_10m,
    weatherCode: response.data.current.weather_code,
  };
}
