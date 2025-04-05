import { useDispatch, useSelector } from 'react-redux';
import WeatherData from '@/components/WeatherData/WeatherData.jsx';

import styles from './Weather.module.scss';

const Weather = () => {
  const dispatch = useDispatch();
  const { error, data, status } = useSelector((state) => state.weather);
  
  console.log("hello");
  return (
    <section className={`${styles.weather}`}>
      <div className={`${styles.weather__container} container`}>
        <h1 className={`${styles.weather__title}`}>
          Find out the
          weather <br /> in your area
        </h1>
        <div className={`${styles.weather__content}`}>
          {error && <p>{error}</p>}
          {data && status === 'success' && (
            <div className={`${styles.weather__list}`}>
              <p className={`${styles.weather__list__temp}`}>{Math.trunc(data.main.temp)}°</p>
              <WeatherData data={data} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Weather;