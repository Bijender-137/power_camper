import './App.css';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <>
      <div className=' min-vh-100 bg_hero_img d-flex flex-column'>
        <MyNav />
        <HeroSection/>
      </div>
     
    </>
  );
}

export default App;
