import { useState } from 'react';
import logo from '@/assets/images/logo.png';
import styles from './Header.module.scss';

import {
  fetchWeather,
  setCity,
  setUnit,
} from '@/features/weather/weatherSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const [input, setInput] = useState('');
  const { city, unit } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  
  const handleSearch = () => {
    if (input.trim() !== '') {
      dispatch(setCity(input));
      dispatch(fetchWeather(input));
    }
  };
  
  const handleCelsius = () => {
    dispatch(setUnit('metric'));
    dispatch(fetchWeather(city));
  };
  
  const handleFahrenheit = () => {
    dispatch(setUnit('imperial'));
    dispatch(fetchWeather(city));
  };
  
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.header__container} container`}>
        <div className={`${styles.header__logo}`}>
          <a href="#" className="logo">
            <img src={logo} alt="logo" className="logo__img" />
          </a>
        </div>
        <div className={`${styles.weather__input__content}`}>
          <input
            type="text"
            className={`${styles.weather__input}`}
            placeholder="Enter location"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <button onClick={handleSearch} className={`${styles.weather__btn}`}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_129_5344)">
                <path d="M19.3846 11.8462C19.3846 9.77083 18.647 7.99559 17.1719 6.52043C15.6967 5.04527 13.9215 4.30769 11.8462 4.30769C9.77083 4.30769 7.99559 5.04527 6.52043 6.52043C5.04527 7.99559 4.30769 9.77083 4.30769 11.8462C4.30769 13.9215 5.04527 15.6967 6.52043 17.1719C7.99559 18.647 9.77083 19.3846 11.8462 19.3846C13.9215 19.3846 15.6967 18.647 17.1719 17.1719C18.647 15.6967 19.3846 13.9215 19.3846 11.8462ZM28 25.8462C28 26.4295 27.7869 26.9343 27.3606 27.3606C26.9343 27.7869 26.4295 28 25.8462 28C25.2404 28 24.7356 27.7869 24.3317 27.3606L18.5601 21.6058C16.5521 22.9968 14.3141 23.6923 11.8462 23.6923C10.242 23.6923 8.70793 23.381 7.24399 22.7584C5.78005 22.1358 4.51803 21.2945 3.45793 20.2344C2.39784 19.1743 1.55649 17.9123 0.933894 16.4483C0.311298 14.9844 0 13.4503 0 11.8462C0 10.242 0.311298 8.70793 0.933894 7.24399C1.55649 5.78005 2.39784 4.51803 3.45793 3.45793C4.51803 2.39784 5.78005 1.55649 7.24399 0.933894C8.70793 0.311298 10.242 0 11.8462 0C13.4503 0 14.9844 0.311298 16.4483 0.933894C17.9123 1.55649 19.1743 2.39784 20.2344 3.45793C21.2945 4.51803 22.1358 5.78005 22.7584 7.24399C23.381 8.70793 23.6923 10.242 23.6923 11.8462C23.6923 14.3141 22.9968 16.5521 21.6058 18.5601L27.3774 24.3317C27.7925 24.7468 28 25.2516 28 25.8462Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_129_5344">
                  <rect width="28" height="28" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className={`${styles.weather__change}`}>
          <div className={`${styles.weather__change__btn}`}>
            <button
              onClick={handleCelsius}
              className={unit === 'metric' ? 'active' : ''}>
              Celsius
            </button>
            <button
              onClick={handleFahrenheit}
              className={unit === 'imperial' ? 'active' : ''}>
              Fahrenheit
            </button>
          </div>
          <svg fill="#ffffff" width="42px" height="42px" viewBox="0 0 32 32"
               version="1.1" xmlns="http://www.w3.org/2000/svg"
               stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
               stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <title>temperature-three-quarters</title>
              <path
                d="M20.75 6.008c0-6.246-9.501-6.248-9.5 0v13.238c-1.235 1.224-2 2.921-2 4.796 0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-1.875-0.765-3.572-2-4.796l-0.001-0zM16 29.25c-2.9-0-5.25-2.351-5.25-5.251 0-1.553 0.674-2.948 1.745-3.909l0.005-0.004 0.006-0.012c0.13-0.122 0.215-0.29 0.231-0.477l0-0.003c0.001-0.014 0.007-0.024 0.008-0.038l0.006-0.029v-13.52c-0.003-0.053-0.005-0.115-0.005-0.178 0-1.704 1.381-3.085 3.085-3.085 0.060 0 0.12 0.002 0.179 0.005l-0.008-0c0.051-0.003 0.11-0.005 0.17-0.005 1.704 0 3.085 1.381 3.085 3.085 0 0.063-0.002 0.125-0.006 0.186l0-0.008v13.52l0.006 0.029 0.007 0.036c0.015 0.191 0.101 0.36 0.231 0.482l0 0 0.006 0.012c1.076 0.966 1.75 2.361 1.75 3.913 0 2.9-2.35 5.25-5.25 5.251h-0zM16.75 21.367v-11.522c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 11.522c-1.164 0.338-2 1.394-2 2.646 0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75c0-1.252-0.836-2.308-1.981-2.641l-0.019-0.005zM26.5 2.25c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM26.5 7.25c-0.966 0-1.75-0.784-1.75-1.75s0.784-1.75 1.75-1.75c0.966 0 1.75 0.784 1.75 1.75v0c-0.001 0.966-0.784 1.749-1.75 1.75h-0z" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;