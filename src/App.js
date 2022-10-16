import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Weathercard from "./components/Weathercard"
import data from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(data)
  const weatherElements=data.map((item)=> {
    return (
      <Weathercard 
        key={item.id}
        {...item} 
      />
    )
  })
  return (
    <div>
      <Navbar />
      {weatherElements}
    </div>
  );
}

export default App;
