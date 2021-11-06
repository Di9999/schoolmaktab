import React, { Component } from "react";
import style from "../css/Boshsahifa.module.css";
import { Col, Container, Card, Row, Image } from "react-bootstrap";
import registr from "../img/registr.jpg";
export default class Boshsahifa extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className={style.card_items}>
            <Card
              style={{ backgroundColor: "red" }}
              className={style.card_item}
            >
              <Card.Body className={style.card_for_body}>
                <Card.Title className={style.card_title}>
                  <h3>Sifatli va samarali ta'lim tizimi</h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Container>

        <Container>
          <Row className={`${style.qabul} `}>
            <div>
              <Col md={6} lg={6}>
                <div className={style.qabulImg}>
                  <Image style={{ width: "100%" }} src={registr} />
                </div>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <div className={style.qabulText}>
                  <h2>Qabul uchun ariza topshiring</h2>
                  <p>
                    Kuzgi qabul jarayoni hozir mavjud <br />
                    Biz o'quvchilarimizga shunchaki ta'lim beribgina qolmasdan,
                    shu bilan birga ularga kelajakda o'z o'rnilarini
                    topishlariga yordam beramiz.
                  </p>
                </div>
                <div className={style.qabulBtn}>
                  <button className="btn drawBorder">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://my.maktab.uz/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hoziroq ariza topshiring
                    </a>
                  </button>
                </div>
              </Col>
            </div>
          </Row>
        </Container>

        <Container>
          <Row className={`${style.orange} `}>
            <div>
              <Col md={6} lg={6}>
                <div className={style.orangeImg}>
                  {/* <Image style={{ width: "100%" }} src={registr} /> */}
                </div>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <div className={style.orangeText}>
                  <h2>Motivating Ways to Improve Your Skills</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt.
                  </p>
                </div>
                <div className={style.orangeBtn}>
                  <button className="btn drawBorder">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://my.maktab.uz/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Nmadir
                    </a>
                  </button>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
