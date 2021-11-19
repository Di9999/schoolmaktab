import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import maktabhayoti1 from "../img/makhayoti1.jpg";
import maktabhayoti2 from "../img/makhayoti2.jpg";
import maktabhayoti3 from "../img/makhayoti3.jpg";
import maktabhayoti4 from "../img/makhayoti4.jpg";
import maktabhayoti5 from "../img/makhayoti5.jpg";
import maktabhayoti6 from "../img/makhayoti6.jpg";
import maktabhayoti7 from "../img/makhayoti7.jpg";
import maktabhayoti8 from "../img/makhayoti8.jpeg";
import maktabhayoti9 from "../img/makhayoti9.jpg";
import style from "../css/Maktabhayoti.module.css";
export default class Maktabhayoti extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={6} md={4} xl={3}>
            <div>
              <div className="card">
                <div className="rasm">
                  <img src={maktabhayoti1} alt="" />
                </div>
                <div className="rasm">
                  <img src={maktabhayoti2} alt="" />
                </div>
                <div className="rasm">
                  <img src={maktabhayoti7} alt="" />
                </div>
                <div className="rasm">
                  <img src={maktabhayoti3} alt="" />
                </div>
                <div className="rasm">
                  <img src={maktabhayoti4} alt="" />
                </div>
                <div className="rasm">
                  <img src={maktabhayoti5} alt="" />
                </div>
                <div className="rasm">
                  <img src={maktabhayoti6} alt="" />
                </div>
                <div className="rasm">
                  <img src={maktabhayoti8} alt="" />
                </div>
                <div className="rasm">
                  <img src={maktabhayoti9} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
