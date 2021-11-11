import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import style from "../css/Footer.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
export default class Footer extends Component {
  render() {
    return (
      <div className={style.container}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} className={style.logoUchun}>
            <h2>Maktab ma'lumoti</h2> <br />
            <p style={{ fontSize: "25px" }}>
              Xorazm viloyati Gurlan tumani
            </p>{" "}
            <br />
            <p style={{ color: "orangered" }}>xorazm5maktab@gmail.com</p>
            <p>
              <a
                style={{ color: "orangered" }}
                className={style.navLink}
                href={`tel: +998977902801`}
              >
                tel: +99897 790 28 01
              </a>
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className={style.ulLi}>
            <h2>Bizning maktab</h2>
            <ul>
              <li>
                <p>Bosh sahifa</p>
              </li>
              <li>
                <p>Qabul</p>
              </li>
              <li>
                <p>Darsliklar</p>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className={style.ulLi}>
            <h2>Maktab hayoti</h2>
            <ul>
              <li>
                <p>Yangiliklar</p>
              </li>
              <p>Maktab a'lochilari</p>
              <li></li>
              <li>
                <p>Maktab ma'muriyati</p>
              </li>
            </ul>
            <br />
            <div className="row">
              <Col className={style.boglanish} lg={10} md={10} sm={12} xl={10}>
                <p>
                  <FaTelegram className={style.relations} />
                </p>
                <p>
                  <FiInstagram className={style.relations} />
                </p>
                <p>
                  <FaFacebook className={style.relations} />
                </p>
                <p>
                  <AiFillYoutube className={style.relations} />
                </p>
              </Col>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
