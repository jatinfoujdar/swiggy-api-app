import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
// import RestaurantCard from "./Component/Restaurant/RestaurantCard"
import CarouselImg from './Component/Carousel/CarouselImg';
import Carousellink from './Component/Carousel/Carousellink';
import Category from './Component/Restaurant/Category';
import Filter from './Component/Carousel/Filter';
import Login from "./Login/Login";
import Signup from './Login/Signup';
import Body from './Component/Body';
import { Error } from './Component/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<Error />}/>
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
      <Body/>
    </>
  );
}

export default App;
