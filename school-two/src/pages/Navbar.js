import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import style from "../css/Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className={style.navcontainer}>
        <ul>
          <li>Bosh sahifa</li>
          <li>Qabul</li>
          <li>Darsliklar</li>
          <li>Yangiliklar</li>
          <li>Maktab hayoti</li>
          <li>Maktab a'lochilari</li>
          <li>Maktab hayoti</li>
        </ul>
      </div>
    );
  }
}
