import { useEffect, useState } from 'react';
import './App.css';
import PropTypes from "prop-types";

import searchIcon from './assets/search.png';
import sunIcon from './assets/sun.png';
import cloudyIcon from './assets/cloudy.png';
import rainIcon from './assets/rain.png';
import drizzleIcon from './assets/drizzle.png';
import snowIcon from './assets/snow.png';
import humidIcon from './assets/humidity.png';
import windIcon from './assets/wind.png';

const WeatherDetails = ({icon, temp, city, country, lat, long, humidity, wind}) => {
  return (
    <>
    <div className="image">
      <img src={icon} alt="weather-icon" />
    </div>
    <div className="temp">{temp}°C</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className='lat'>Latitude: </span>
        <span>{lat}</span>
      </div>
      <div>
        <span className='long'>Longitude: </span>
        <span>{long}</span>
      </div>
    </div>
    <div className="data-container">
        <div className="element">
          <img src={humidIcon} alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percemt">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="wind" className="icon" />
          <div className="data">
            <div className="wind-percemt">{wind} kmph</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
  </>
  );
};

WeatherDetails.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
};

function App() {

  let api_key = "53b66d3bcf9d0087fcfc650e7aae2591";

  const [text, setText] = useState("Tirupur");
  const [cityNotFound, setCityNotFound] =useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherIconMap = {
      "01d" : sunIcon,
      "01n" : sunIcon,
      "02d" : cloudyIcon,
      "02n" : cloudyIcon,
      "03d" : drizzleIcon,
      "03n" : drizzleIcon,
      "04d" : drizzleIcon,
      "04n" : drizzleIcon,
      "09d" : rainIcon,
      "09n" : rainIcon,
      "10d" : rainIcon,
      "10n" : rainIcon,
      "13d" : snowIcon,
      "13n" : snowIcon,
  };

  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const search = async () => {

      setLoading(true);

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

      try {

          let res = await fetch(url);
          let data = await res.json();

          if(data.code === "404") {
            console.error("City not found");
            setCityNotFound(true);
            setLoading(false);
            return;
          }

          setHumidity(data.main.humidity);
          setWind(data.wind.speed);
          setTemp(Math.floor(data.main.temp));
          setCity(data.name);
          setCountry(data.sys.country);
          setLat(data.coord.lat);
          setLong(data.coord.lon);

          const weatherIconCode = data.weather[0].icon;
          setIcon(weatherIconMap[weatherIconCode] || sunIcon);
          setCityNotFound(false);
          setError(null);

      } catch(error) {
          console.error("An Error occured: ", error.message);
          setError("An Error occured: " + error.message)
      } finally {
          setLoading(false);
      }
  };

  const handleCity = (e) => {
      setText(e.target.value);
  };

  const handleKeyDown = (e) => {
      if(e.key == "Enter"){
        search();
      }
  };

  useEffect(function () {
    search();
  }, []);

  return (
    <>
      <div className='container'>
        <div className="input-container">
          <input className="city-input" placeholder='search city' type="text" onChange={handleCity} onKeyDown={handleKeyDown} value={text} />
          <div className= "search-icon" onClick={() => search()} >
              <img src={searchIcon} alt="search-icon" />
          </div>
        </div>

        {loading && <div className="loading-message">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {cityNotFound && <div className="city-not-found">City not found</div>}

        {!loading && !cityNotFound && !error && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} long={long} humidity={humidity} wind={wind} />}

      </div>
    </>
  )
}

export default App