import styles from './Home.module.scss';
import Header from '@/components/Header/Header.jsx';
import Weather from '@/components/Weather/Weather.jsx';

const Home = () => {
  return (
    <main className={`${styles.main}`}>
      <Header />
      <Weather />
    </main>
  );
};

export default Home;