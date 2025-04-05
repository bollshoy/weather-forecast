import logo from '@/assets/images/logo.png';
import styles from './Header.module.scss';
import search from '@/assets/icons/search.svg';
import { useState } from 'react';
import { fetchWeather, setCity } from '@/features/weather/weatherSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const [input, setInput] = useState('');
  const {city} = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  
  const handleSearch = () => {
    if (input.trim() !== '') {
      dispatch(setCity(input));
      dispatch(fetchWeather(input));
    }
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
          />
          <button onClick={handleSearch} className={`${styles.weather__btn}`}>
            <img src={search} alt="icon search" className={`${styles.weather__btn__icon}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;