import React, { useState, useEffect } from "react";
import "./style.css";

import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";

import logo from "./images/news_logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Main from "./Main";
import Flood from "./Flood";
import Form from "./Contact";
import Sports from "./Sports";
import International from "./International";
import Politics from "./Politics";
import Business from "./Business";
import WriteArticle from "./article/WriteArticle";
import DisplayArticle from "./article/DisplayArticle";
import UpdateArticle from "./article/UpdateArticle";
import AdminDash from "./article/AdminDash";
import Login from "./Login/Login Ui/LoginUi";
import Register from "./Register/Register";

const Menu = () => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin-top: 40vh;
    margin-left: 46vw;
    border-color: red;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Router>
      {loading ? (
        <div id="Loader">
          <PulseLoader
            color={"#36D7B7"}
            loading={loading}
            size={30}
            css={override}
          />
        </div>
      ) : (
        <div>
          <header>
            <div className="website-header">
              <img className="logo" src={logo} alt="logo" />
              {/* <div className="welcome">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <p id="date">date</p>
          </div> */}
              <div className="social desktop">
                <svg
                  id="facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
                <svg
                  id="twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
                <svg
                  id="instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </div>
              <div class="hamburger" onClick={() => setActive(true)}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
            </div>

            <nav>
              <ul className={active ? "nav-menu active" : "nav-menu"}>
                <li>
                  <NavLink
                    exact
                    to="/"
                    className="link"
                    id="home"
                    href="index.html"
                  >
                    HOME
                  </NavLink>
                  <div class="crossham" onClick={() => setActive(false)}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                  </div>
                </li>
                <li>
                  <NavLink to="/politics" className="link" href="politics.html">
                    POLITICS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business" className="link" href="business.html">
                    BUSINESS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/international"
                    className="link"
                    href="international.html"
                  >
                    INTERNATIONAL
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sports" className="link" href="sport.html">
                    SPORTS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/technology"
                    className="link"
                    href="technology.html"
                  >
                    TECHNOLOGY
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/health" className="link" href="health.html">
                    HEALTH
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/crime" className="link" href="crime.html">
                    CRIME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/article" className="link" href="education.html">
                    ARTICLES
                  </NavLink>
                </li>

                <li>
                  <div className="social mobile">
                    <svg
                      id="facebook"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                      />
                    </svg>
                    <svg
                      id="twitter"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                    <svg
                      id="instagram"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
          <div id="breaking">
            <h2 className="breakhead">Breaking News</h2>
            <div className="marqueediv">
              <marquee direction="left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt itaque aspernatur aliquam maiores ducimus, quasi
                dolorum
              </marquee>
            </div>
          </div>

          <Switch>
            <Route path="/admin">
              <AdminDash />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/flood">
              <Flood />
            </Route>
            <Route path="/updatearticle">
              <UpdateArticle />
            </Route>
            <Route path="/article">
              <DisplayArticle />
            </Route>
            <Route path="/writearticle">
              <WriteArticle />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/sports">
              <Sports />
            </Route>
            <Route path="/international">
              <International />
            </Route>
            <Route path="/politics">
              <Politics />
            </Route>
            <Route path="/business">
              <Business />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
          <footer>
            <div className="footer-container">
              <div className="footer-left">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Culpa enim aliquam distinctio possimus dolor, laboriosam quas.
                  Laborum, laboriosam omnis debitis, praesentium est assumenda
                  nobis veritatis eum voluptas soluta, totam iste provident esse
                  ipsam aspernatur
                </p>
                <h2>Admin Login</h2>
                <NavLink to="/login">
                  <button>Click here</button>
                </NavLink>
              </div>
              <div className="footer-center">
                <h2>Contact us</h2>
                <h3>Address</h3>
                <p>Lorem, ipsum.</p>
                <h3>Phone no.</h3>
                <p>654654312848</p>
                <NavLink to="/form">
                  <button>Send Feedbacks</button>
                </NavLink>
              </div>
              <div className="footer-right">
                <div className="social social-foot">
                  <h2>Social links</h2>
                  <svg
                    id="facebook"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    />
                  </svg>
                  <svg
                    id="twitter"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    />
                  </svg>
                  <svg
                    id="instagram"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                  <h2 className="subscribe">Subscribe to our news letter</h2>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <span className="input-group-btn">
                      <button className="btn" type="submit">
                        Subscribe
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </Router>
  );
};

export default Menu;
