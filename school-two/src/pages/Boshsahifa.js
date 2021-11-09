import React, { Component } from "react";
import style from "../css/Boshsahifa.module.css";
import { Col, Container, Card, Row, Image } from "react-bootstrap";
import registr from "../img/registr.jpg";
import Navbar from "./Navbar";
import "react-multi-carousel/lib/styles.css";
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps";
import Carousel from "react-multi-carousel";
import oshxona1 from "../img/oshxona1.jpg";
import sport from "../img/sport2.jpeg";
import musiqa from "../img/musiqa2.jpg";
import inform from "../img/inform2.jpeg";
import oxrana from "../img/oxrana1.jpg";
import avtobus from "../img/avtobus.jpg";
import prezident from "../img/prezident.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import med from "../img/med1.jpg";
import prosto from "../img/5.jpg";
import ustoz2 from "../img/ustoz3.jpg";
import ustoz1 from "../img/ustoz5.jpg";
import Darsliklar from "./Darsliklar";
export default class Boshsahifa extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <div className={style.card_items}>
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
          </div> */}
        </Container>
        <Container>
          {/* <Row className={`${style.orange} `}>
            <div>
              <Col md={6} lg={6}>
                <div className={style.orangeImg}>
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
          </Row> */}
        </Container>
        <br />
        <br />
        <Col>
          <div className={style.prezident}>
            <div className={style.prezidenttext}>
              {" "}
              <h2>
                "Maktab bu hayot-mamot masalasi, kelajak masalasi. Uni davlat,
                hukumat va hokimlarning o‘zi hal qilolmaydi. Bu butun
                jamiyatning ishi, burchiga aylanishi kerak"
              </h2>
              <h3>Shavkat Mirziyoyev</h3>
            </div>
            <div className={style.prezidentimg}>
              <Image src={prezident} className={style.secondImage} />
            </div>
          </div>
        </Col>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div className={style.qabulgl}>
          <Col>
            <div className={style.qabul}>
              <div className={style.qabulimg}>
                <Image style={{ width: "100%" }} src={registr} />
              </div>
              <div className={style.qabultext}>
                {" "}
                <h2>Qabul uchun ariza topshiring</h2>
                <p>
                  Kuzgi qabul jarayoni hozir mavjud <br />
                  Biz o'quvchilarimizga shunchaki ta'lim beribgina qolmasdan,
                  shu bilan birga ularga kelajakda o'z o'rnilarini topishlariga
                  yordam beramiz.
                </p>
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
              </div>
            </div>
          </Col>
        </div>
        <br /> <br />
        <Darsliklar />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div className={style.avtobusgl}>
          <Col>
            <div className={style.avtobus}>
              <div className={style.avtobusimg}>
                <Image src={avtobus} className={style.secondImage} />
              </div>
              <div className={style.avtobustext}>
                {" "}
                <h1>Transport xizmati</h1>
                <p>
                  Talabalar shaharchasida sayohat qilishning ko'plab variantlari
                  mavjud. U erda ko'r-ko'rona matnlar yashaydi. Alohida ular
                  Semantika qirg'og'idagi Bookmarksgroveda, katta til okeanida
                  yashaydilar. Duden nomli kichik daryo ularning joylari bo'ylab
                  oqadi va uni zarur regelialiya bilan ta'minlaydi. Bu
                  paradizmatik. Bu jumlaning qovurilgan qismlari uchib ketadigan
                  jannat matikasi mamlakati.
                </p>
              </div>
            </div>
          </Col>
        </div>{" "}
        <br /> <br />
        <div className={style.cardinfo}>
          <Row>
            <Col lg={12}>
              <br />
              <h1 className={style.sarlavha1}>Biz haqimizda</h1>
              <br />
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardBolimlar}>
              <div className={style.cardnumb}>
                <img alt=" " src={oshxona1} />
                <h1>Maktab oshxonasi</h1>
                <p>
                  Maktabimiz oshxonasi hozirda rekanstruksiya qilinyapti. Yangi
                  o'quv yilida o'quvchilarimizga to'liq jihozlangan, gigiyena
                  qoidalariga rioya qilingan va mahoratli oshpazlarimiz
                  tomonidan pishirilgan turli xil mazali taomlar bilan
                  boyitilgan oshxonani taqdim etamiz.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardBolimlar}>
              <div className={style.cardnumb}>
                <img alt=" " src={sport} />

                <h1>Sport mashg'ulotlari</h1>
                <p>
                  Maktabimizda barcha sprot anjomlari bilan jihozlangan, yetarli
                  kattalikdagi maydonga ega sport zalimiz mavjud. Bu sprot zalda
                  bolalarimiz jismoniy tarbiyao'tish bilan bir qatorda darsdan
                  bo'sh vaqtlarida turli sport turlari bilan shug'ullanishlari
                  mumkin.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardBolimlar}>
              <div className={style.cardnumb}>
                <img alt=" " src={musiqa} />
                <h1>San'at va madaniyat</h1>
                <p>
                  Maktabimizda musiqa sohasida yetuk tajribaga ega o'qituvchimiz
                  va koplab musiqa asboblari mavjud. Musiqa o'qituvchimiz
                  boshchiligida maktabimiz yoshlari san'atning har xil turlari
                  bo'yicha turli ko'rik tanlovlarda yuqori natijalarni egallab
                  kelishyapti
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardBolimlar}>
              <div className={style.cardnumb}>
                <img alt=" " src={inform} />
                <h1>Axborot texnologiyalari</h1>
                <p>
                  Maktabimizda kompyuter va boshqa axborot texnologiyalari bilan
                  jihozlangan informatika xonalarimiz mavjud. Bu xonalarda
                  bolalarimiz dasturlashning turli sohalari bilan shug'ullanishi
                  mumkin
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardBolimlar}>
              <div className={style.cardnumb}>
                <img alt=" " src={oxrana} />

                <h1>Xavfsizlik va qo'riqlash</h1>
                <p>
                  Maktabimizda boralarimizning xavfsizligini ta'minlash
                  maqsadida maktabning kirish qismida qorovullarimiz va
                  navbatchi o'qituvchilarimiz tomonidan maktabimizga kelayotgan
                  har bir inson suhbatdan o'tqaziladi va ro'yhatga olinadi.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardBolimlar}>
              <div className={style.cardnumb}>
                <img alt=" " src={med} />
                <div
                // style={{
                //   backgroundColor: "#801085",
                //   padding: "10%",
                //   height: "470px",
                // }}
                >
                  <h1>Sog'lik va salomatlik</h1>
                  <p>
                    Maktabimizda bolalarimiz salomatligini saqlash maqsadida
                    barcha asbob-anjomlar bilan jihozlangan tibbiyot xonalarimiz
                    va tibbiyot sohasida yuqori tajribaga ega hamshiralarimiz
                    mavjud
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="sliderHomiy" style={{ backgroundColor: "white" }}>
          {/* <Carousel
            responsive={responsive1}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            infinite={true}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alingItems: "center",
              }}
            >
              <div className="toolpat" style={{ backgroundColor: "white" }}>
                <a href="https://president.uz/oz" target="_blank">
                </a>
              </div>
              <p>O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alingItems: "center",
              }}
            >
              <div className="toolpat" style={{ backgroundColor: "white" }}>
                <a href="https://www.gov.uz/uz" target="_blank">
                </a>
              </div>
              <p>O'zbekiston Respublikasining Hukumat portali</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alingItems: "center",
              }}
            >
              <div className="toolpat" style={{ backgroundColor: "white" }}>
                <a href="https://lex.uz/" target="_blank">
                </a>
              </div>
              <p>O'zbekiston Respublikasi qonun hujjatlari milliy bazasi</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alingItems: "center",
              }}
            >
              <div className="toolpat" style={{ backgroundColor: "white" }}>
                <a href="https://my.gov.uz/oz" target="_blank">
                </a>
              </div>
              <p>Interaktiv davlat xizmatlarining Yagona portali</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alingItems: "center",
              }}
            >
              <div className="toolpat" style={{ backgroundColor: "white" }}>
                <a href="https://www.uzedu.uz/" target="_blank">
                </a>
              </div>
              <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alingItems: "center",
              }}
            >
              <div className="toolpat" style={{ backgroundColor: "white" }}>
                <a href="https://ittower.uz/" target="_blank">
                </a>
              </div>
              <p>IT Tower firmasi </p>
            </div>
          </Carousel> */}
        </div>{" "}
        <br /> <br />
        <div className={style.alochilar}>
          <Row>
            <Col lg={12}>
              <br />
              <h1 className={style.sarlavha1}>A'lochilar doskasi</h1>
              <br />
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardalochilar}>
              <div className={style.cardalochilarimg}>
                <img alt=" " src={prosto} />
              </div>
              <div className={style.cardalochilartxt}>
                <h1>Mardonov Bahrom Davron o'g'li</h1>
                <p>8 - "D" sinf</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardalochilar}>
              <div className={style.cardalochilarimg}>
                <img alt=" " src={prosto} />
              </div>
              <div className={style.cardalochilartxt}>
                <h1>Bahromov Abduxalil Abror o'g'li</h1>
                <p>8 - "D" sinf</p>
              </div>
            </Col>
          </Row>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <div className={style.oqituvchi}>
          <Row>
            <Col lg={12}>
              <br />
              <h1 className={style.sarlavha1}>O'qituvchilar doskasi</h1>
              <br />
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardoqituv}>
              <div className={style.cardoqituvimg}>
                <img alt=" " src={ustoz1} />
              </div>
              <div className={style.cardoqituvtxt}>
                <h1>Tosheva Gavhar Umarovna</h1>
                <p>Matematika fani o'qituvchisi</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className={style.cardoqituv}>
              <div className={style.cardoqituvimg}>
                <img alt=" " src={ustoz2} />
              </div>
              <div className={style.cardoqituvtxt}>
                <h1>Ravshanova Mamlakat Sulaymonovna</h1>
                <p>Rus tili filologiya o'qituvchi</p>
              </div>
            </Col>
          </Row>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <div className={style.xarita}>
          <br />
          <h1 className={style.sarlavha}> Bizning manzilimiz</h1>
          <br />

          <YMaps>
            <div className={style.manzilmap}>
              <Map
                style={{
                  width: "100%",
                  height: "400px",
                  border: "4px solid white",
                }}
                defaultState={{ center: [41.3572425, 60.818505], zoom: 12 }}
              >
                <Clusterer
                  options={{
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={-1}
                    geometry={[41.3572425, 60.818505]}
                    options={{
                      iconLayout: "default#image",
                    }}
                    properties={{
                      hintContent: `<h6><b className="personStyle">1 - maktab</b></h6>`,
                    }}
                    modules={["geoObject.addon.hint"]}
                  />
                </Clusterer>
              </Map>
              <br />
              <br />
            </div>
          </YMaps>
        </div>
        <br /> <br />
      </div>
    );
  }
}
