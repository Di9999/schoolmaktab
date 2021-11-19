import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import maktabhayoti2 from "../img/makhayoti2.jpg";
import maktabhayoti3 from "../img/makhayoti3.jpg";
import maktabhayoti4 from "../img/makhayoti4.jpg";
import maktabhayoti5 from "../img/makhayoti5.jpg";
import maktabhayoti6 from "../img/makhayoti6.jpg";
import maktabhayoti7 from "../img/makhayoti7.jpg";
import maktabhayoti8 from "../img/makhayoti8.jpeg";
import maktabhayoti9 from "../img/makhayoti9.jpg";
import hayot1 from "../img/hayot1.png";
import hayot2 from "../img/hayot2.jpg";
import hayot8 from "../img/hayot88.jpg";
import hayot3 from "../img/hayot3.jpg";
import hayot4 from "../img/hayot4.jpg";
import hayot5 from "../img/hayot5.jpg";
import hayot6 from "../img/hayot6.JPG";
import hayot7 from "../img/hayot3.jpg";
import style from "../css/Maktabhayoti.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Maktabhayoti extends Component {
  render() {
    return (
      <div className={style.hayotgl} id="maktabhayoti">
        <Navbar />
        <div className={style.cardinfo}>
          <Row>
            <Col lg={12}>
              <br />
              <h1 className={style.sarlavha1}>Fotolavhalar</h1>
              <br />
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={hayot1} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={hayot2} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={hayot3} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={hayot4} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={hayot5} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={hayot6} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={hayot7} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={hayot8} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti2} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti2} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti3} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti2} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti5} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti4} />
              </div>
            </Col>

            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti6} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti7} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti8} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardHayot}>
              <div className={style.cardnumber}>
                <img alt=" " src={maktabhayoti9} />
              </div>{" "}
              <br />
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
