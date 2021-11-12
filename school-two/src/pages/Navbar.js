import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import style from "../css/Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className={style.navcontainer}>
        <ul>
          <li>
            {" "}
            <a href="#">Bosh sahifa</a>{" "}
          </li>
          <li>
            <a href="#">Qabul</a>
          </li>
          <li>
            <a href="#">Darsliklar</a>
          </li>
          <li>
            <a href="#">Yangiliklar</a>
          </li>
          <li>
            <a href="#">Maktab hayoti</a>
          </li>
          <li>
            <a href="#">Maktab a'lochilari</a>
          </li>
          <li>
            <a href="#">Maktab hayoti</a>
          </li>
        </ul>
      </div>
    );
  }
}
