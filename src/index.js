import React, { useRef, useContext } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import Contact from "./contact";
import { userContext } from "./context";
import Footer from './footer';
import FoodList from './foodlist';
import MenuBar from './menubar';
import Menulist from './menulist';

function Index() {
  return (
    <div>
      <MenuBar />
      <FoodList></FoodList>
    </div>
  );
}

function App() {
  return (
    <userContext.Provider value={"John Doe"}>
      <BrowserRouter>
        <Container className="p-3 my-3 bg-light">
          <Routes>
            <Route path="/" element={<Index></Index>}></Route>
            <Route path="/Main" element={<Index></Index>}></Route>
            <Route path="/Menu-list" element={<Menulist></Menulist>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </userContext.Provider>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
