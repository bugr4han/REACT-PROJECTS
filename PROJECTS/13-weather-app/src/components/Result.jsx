import { FaArrowLeft, FaTint, FaWind } from "react-icons/fa";

function Result({ weatherData, handleClick }) {
  return (
    <div className="results">
      <button className="back-btn" onClick={handleClick}>
        <FaArrowLeft />
      </button>
      <h2 className="cityDisplay">{weatherData.cityName}</h2>
      <div className="weatherEmoji">
        <img src={weatherData.icon} alt="?" />
      </div>
      <h3 className="weatherDisplay">{weatherData.temp}°C</h3>

      <div className="details">
        <div className="detail-item">
          <FaTint style={{ marginBottom: "10px" }} />
          <span className="detail-value">{weatherData.humidity}%</span>
          <span className="detail-label">Humidity</span>
        </div>
        <div className="detail-item">
          <FaWind style={{ marginBottom: "10px" }} />
          <span className="detail-value">{weatherData.wind_kph} km/h</span>
          <span className="detail-label">Wind</span>
        </div>
      </div>

      <h3 className="descDisplay">{weatherData.text}</h3>
    </div>
  );
}

export default Result;
