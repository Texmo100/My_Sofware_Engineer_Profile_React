import styles from './Home.module.css';
import Header from '../components/HomeSections/Header';
import AboutMe from '../components/HomeSections/AboutMe';
import Projects from '../components/HomeSections/Projects';
import ContactMe from '../components/HomeSections/ContactMe';
import Footer from '../components/HomeSections/Footer';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
};

export default Home;