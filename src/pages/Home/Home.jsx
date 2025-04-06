import Header from '@/components/Header/Header.jsx';
import Weather from '@/components/Weather/Weather.jsx';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={`${styles.main}`}>
      <Header />
      <Weather />
    </main>
  );
};

export default Home;