import { Element } from 'react-scroll'; // ইমপোর্ট করুন
import Hero from '../Components/Home/Hero';
import AboutUs from '../Components/Home/AboutUs';
import Services from '../Components/Home/Services';
import Clients from '../Components/Home/Clients';
import Contact from '../Components/Home/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Element name="about"><AboutUs /></Element>
      <Element name="services"><Services /></Element>
      <Element name="clients"><Clients /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  );
};

export default Home;  