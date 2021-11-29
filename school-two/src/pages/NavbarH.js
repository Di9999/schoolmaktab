import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "../css/Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className={style.navcontainer}>
        {" "}
        <ul>
          <li>
            {" "}
            <NavLink to={`/`}>Bosh sahifa</NavLink>{" "}
          </li>
          <li>
            <NavLink to={`/qabul`}>Qabul</NavLink>
          </li>
          <li>
            <NavLink to={`/dars`}>Darsliklar</NavLink>
          </li>
          <li>
            <NavLink to={`/yangiliklar`}>Yangiliklar</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>Fotolavhalar</NavLink>
          </li>
          <li>
            <NavLink to={`/alochilar`}>Maktab a'lochilari</NavLink>
          </li>
          <li>
            <NavLink to={`/manzil`}>Maktab manzili</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
