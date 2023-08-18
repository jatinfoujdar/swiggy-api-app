import './App.css';
import Header from './Component/Header';
import RestaurantCards from "./Component/Restaurant/RestaurantCards"
import CarouselImg from './Component/Carousel/CarouselImg';
import Carousellink from './Component/Carousel/Carousellink';
import Category from './Component/Restaurant/Category';
import Filter from './Component/Carousel/Filter';
// import Offer from './Component/Restaurant/Offer';
// import Login from './Login/Login';
function App() {
  return (
    <>
    <Header/>
    <CarouselImg/>
    <Carousellink/>
    <Filter/>
    <RestaurantCards/>
    <Category/>
    {/* <Offer/> */}
    </>
  );
}

export default App;
