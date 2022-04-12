import React, { useState, useEffect } from "react";
import logo from './coin_payphone.png'

import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Hero = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/create");
  };

  return (
    <div id="hero">
      {/* <img id='hero-background' src={list[0].src}/> */}

      <Header />
      <h1 id="header-text-first"> Project </h1>
      <h1 id="header-text-second"> TelephoneBlocks</h1>
      <h3 id="header-subtext">Re-discovering the mobile identity</h3>

      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          Explore
        </button>
        <button id="create" onClick={goCreate}>Create</button>
      </div>
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
};

export default Hero;
