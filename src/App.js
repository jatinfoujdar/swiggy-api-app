import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import RestaurantCards from "./Component/Restaurant/RestaurantCards"
import CarouselImg from './Component/Carousel/CarouselImg';
import Carousellink from './Component/Carousel/Carousellink';
import Category from './Component/Restaurant/Category';
import Filter from './Component/Carousel/Filter';
import Login from "./Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Category />
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <CarouselImg />
      <Carousellink />
      <Filter />
      <RestaurantCards />
    </>
  );
}

export default App;
