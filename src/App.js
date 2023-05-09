import './App.css';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import HeroSection from './components/HeroSection';
import RatingSummary from './components/RatingSummary';
import Overview from './components/Overview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div className=' min_vh_100_xl bg_hero_img d-flex flex-column'>
        <MyNav />
        <HeroSection/>
      </div>
      <RatingSummary />
      <Overview/>
    </>
  );
}

export default App;
