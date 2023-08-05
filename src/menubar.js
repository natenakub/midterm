import React, { useRef, useContext } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

function MyLink(props) {
  return (
    <NavLink
      className="link px-2 text-white"
      to={props.path}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline",
        };
      }}
    >
      {props.linkName}
    </NavLink>
  );
}

export default function MenuBar() {
  return (
    <nav className="p-2 mb-3 font" style={{ backgroundColor: "#EC7D25" }}>
      <img src="food1.png" alt="food1" height={"25px"}></img>
      <img src="food2.png" alt="food2" height={"25px"}></img>
      <img src="food3.png" alt="food3" height={"25px"}></img>
      <MyLink path="/" linkName="หน้าแรก"></MyLink>
      <MyLink path="/Menu-list" linkName="เมนูอาหารญี่ปุ่น"></MyLink>
      <MyLink path="/Contact" linkName="ผู้จัดทำ"></MyLink>
    </nav>
  );
}
