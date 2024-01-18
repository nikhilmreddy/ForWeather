import './App.css';
import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import Weathercard from "./components/Weathercard"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo } from 'react';

function App() {
//create a state to store place which i got from getPlace
  const [cityData,setCityData]=useState({})
  const [place,setPlace]=useState("")

  useEffect(()=> {
      async function fetchApi() {
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${place}%20&APPID=17451272b5e4b828fefb89a8e215e3db`
      const res= await fetch(url)
      const weatherData= await res.json()
      setCityData(weatherData)
    }
    fetchApi();
  },[place])

  const hello = () => {

  }
  function getPlace(inputPlace) {
    setPlace(inputPlace)
  }
  return (
    <div>
      <Navbar change={getPlace}/>
      {place && <Weathercard {...cityData}/>}
    </div>
  );
}

export default App;
