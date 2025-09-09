import { useState } from "react";
import Result from "./components/Result";
import Search from "./components/Search";
import axios from "axios";
import "./css/App.css";
import "./css/Search.css";
import "./css/Result.css";

const baseUrl = "http://api.weatherapi.com/v1/current.json?key=";
const apiKey = "851bdd84497e4c5ab15164430251608";

function App() {
  const [weatherData, setWeatherData] = useState({});

  const handleSearch = async (cityName) => {
    const response = await axios.get(
      `${baseUrl}${apiKey}&q=${cityName}&aqi=no`
    );

    const infos = {
      cityName: `${response.data.location.name}/${response.data.location.country}`,
      temp: response.data.current.temp_c,
      humidity: response.data.current.humidity,
      wind_kph: response.data.current.wind_kph,
      icon: response.data.current.condition.icon,
      text: response.data.current.condition.text,
    };

    setWeatherData(infos);
  };

  return (
    <div className="container">
      {weatherData.cityName ? (
        <Result
          weatherData={weatherData}
          handleClick={() => setWeatherData({})}
        />
      ) : (
        <Search handleSearch={handleSearch} />
      )}
    </div>
  );
}

export default App;
