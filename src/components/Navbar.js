import React, { useState } from "react";
import pic from "./logo.jpg";
import Form from "react-bootstrap/Form";
import "./Navbar.css";
import Button from "react-bootstrap/Button";


export default function Navbar(props) {
  const [userPlace, setUserPlace] = useState("");

  return (
    <nav className="navbar">
      <img src={pic} alt="forWeather logo" className="image"></img>
      <div className="text-wrapper">
        <h4>Place:</h4>
        <Form.Control
          as="input"
          className="text-area"
          placeholder="Eg. Delhi"
          rows={1}
          onChange={(e) => {
            setUserPlace(e.target.value);
          }}
          value={userPlace}
        />
        <Button disabled={userPlace.length<3} onClick={() => props.change(userPlace)} variant="primary">
          &#8680;
        </Button>{" "}
      </div>
    </nav>
  );
}
