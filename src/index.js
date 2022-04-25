import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainStory from "./pages/MainStory";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import ScrollToTop from "./components/ScrollToTop";
import Article1 from "./components/styled/WhatIf/Article1";
import Article2 from "./components/styled/WhatIf/Article2";
import Article3 from "./components/styled/WhatIf/Article3";
import Article4 from "./components/styled/WhatIf/Article4";

//dapp
import { DAppProvider } from "@usedapp/core";
import NFTDetail from "./pages/NFTDetail";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <DAppProvider config={{}}>
            <MainStory />
          </DAppProvider>
        }
      />
      <Route
        path="/Article1"
        element={
          <DAppProvider config={{}}>
            <Article1 />
          </DAppProvider>
        }
      />
      <Route
        path="/Article2"
        element={
          <DAppProvider config={{}}>
            <Article2 />
          </DAppProvider>
        }
      />
      <Route
        path="/Article3"
        element={
          <DAppProvider config={{}}>
            <Article3 />
          </DAppProvider>
        }
      />
      <Route
        path="/Article4"
        element={
          <DAppProvider config={{}}>
            <Article4 />
          </DAppProvider>
        }
      />
      <Route
        path="/home"
        element={
          <DAppProvider config={{}}>
            <Home />
          </DAppProvider>
        }
      />
      <Route
        path="/create"
        element={
          <DAppProvider>
            <Create />
          </DAppProvider>
        }
      />
      <Route
        path="/explore"
        element={
          <DAppProvider config={{}}>
            <Explore />
          </DAppProvider>
        }
      />
      <Route
        path="/detail"
        element={
          <DAppProvider config={{}}>
            <NFTDetail />
          </DAppProvider>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
