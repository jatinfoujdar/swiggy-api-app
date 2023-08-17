import './App.css';
import Header from './Component/Header';
import RestaurantCards from "./Component/Restaurant/RestaurantCards"
import CarouselImg from './Component/Carousel/CarouselImg';
import Carousellink from './Component/Carousel/Carousellink';
import Category from './Component/Restaurant/Category';
function App() {
  return (
    <>
    <Header/>
    <CarouselImg/>
    <Carousellink/>
    <RestaurantCards/>
    <Category/>
    </>
  );
}

export default App;
