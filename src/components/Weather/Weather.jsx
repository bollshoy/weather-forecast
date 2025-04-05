import { useDispatch, useSelector } from 'react-redux';

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
              <div className="weather__list">
                <h2 className={`${styles.weather__list__title}`}>{data.name}, {data.sys.country}</h2>
                <p className="weather__list__item weather__list__wind__speed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" className="ai ai-Air">
                    <path d="M3 8h7a3 3 0 1 0-3-3" />
                    <path d="M4 16h11a3 3 0 1 1-3 3" />
                    <path d="M2 12h17a3 3 0 1 0-3-3" />
                  </svg>
                  Wind: {Math.trunc(data.wind.speed)} m/s
                </p>
                <p className="weather__list__item weather__list__humidity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" className="ai ai-Water">
                    <path
                      d="M12 22a8 8 0 0 1-8-8c0-3.502 2.71-6.303 5.093-8.87L12 2l2.907 3.13C17.29 7.698 20 10.499 20 14a8 8 0 0 1-8 8z" />
                  </svg>
                  Humidity: {data.main.humidity}%
                </p>
                <p className="weather__list__item weather__list__clouds">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" className="ai ai-Cloud">
                    <path
                      d="M5.034 11.117A4.002 4.002 0 0 0 6 19h11a5 5 0 1 0-1.17-9.862L14.5 9.5" />
                    <path
                      d="M15.83 9.138a5.5 5.5 0 0 0-10.796 1.98S5.187 12 5.5 12.5" />
                  </svg>
                  Clouds: {data?.clouds?.all}%
                </p>
                <p className="weather__list__item weahter__list__sunset">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                       viewBox="0 0 24 24" fill="currentColor" stroke-width="2"
                       className="ai ai-SunFill">
                    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1zM3.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414zm17.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0zM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM6.207 17.793a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0zm11.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414zM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1z" />
                  </svg>
                  SunSet: {new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}
                </p>
                <p className="weather__list__item weahter__list__sunrise">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" className="ai ai-Sun">
                    <path
                      d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  Sunrise: {new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Weather;