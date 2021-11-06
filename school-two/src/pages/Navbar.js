import { Row } from "react-bootstrap";
import React, { Component } from "react";
import style from "../css/Navbar.module.css";
// import logo from '../images/logo.jpg'
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    id: 0,
  };

  Tool = () => {
    if (this.state.id === 0) {
      document.querySelector("#navb").style.display = "none";
    }
    if (document.querySelector("#navb").style.display === "none") {
      document.querySelector("#navb").style.display = "flex";
    } else {
      document.querySelector("#navb").style.display = "none";
    }
    this.setState({ id: 1 });
  };
  closeNav = () => {
    if (this.state.id === 1) {
      document.querySelector("#navb").style.display = "none";
    }
  };
  render() {
    return (
      <div>
        {/* {" "}
        <Navbar /> */}
        <div className={style.navbar}>
          <div className={style.tool} onClick={this.Tool}>
            <i className="fa fa-bars"></i>
          </div>
          {/* <div className={style.logotip}>
            <img src={logo} />
          </div> */}
          <div className={style.nav}>
            <ul id="navb">
              <li onClick={this.closeNav}>
                <a className={style.lik} href="#">
                  Bosh sahifa
                </a>
              </li>

              <li onClick={this.closeNav}>
                <a className={style.lik} href="#">
                  Rahbariyat
                </a>
              </li>
              <li onClick={this.closeNav}>
                <a className={style.lik} href="#">
                  Videolavhalar
                </a>
              </li>
              <li onClick={this.closeNav}>
                <NavLink className={style.lik} href="#">
                  Fotolavhalar
                </NavLink>
              </li>
              <li onClick={this.closeNav}>
                <NavLink className={style.lik} href="#">
                  Yangiliklar
                </NavLink>
              </li>
              <li onClick={this.closeNav}>
                <a className={style.lik} href="#">
                  Bog'lanish
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
