import React, { useEffect, useState } from "react";
import "./style.css";
import Flood from "./Flood";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Axios from "axios";

import Flood1 from "./images/flood1.jpg";
import Mountain from "./images/Mountain.jpg";
import Euro from "./images/euro.jpg";
import Politics1 from "./images/politics1.jpg";
import Agriculture from "./images/agriculture.jpg";
import Topleft from "./images/top-left.jpg";
import Right1 from "./images/right-1.jpg";
import Right2 from "./images/right-2.jpg";
import Right3 from "./images/right-3.jpg";
import Right4 from "./images/right-4.jpg";
import Right5 from "./images/right-5.jpg";

import Bottomleft1 from "./images/bottom-left-1.jpg";
import Bottomleft2 from "./images/bottom-left-2.jpg";

import Bannernews3 from "./images/banner-news-3.jpg";
import Bannernews4 from "./images/banner-news-4.jpg";
import Banner from "./images/banner.jpg";

import Carousel1 from "./images/carousel1.jpg";
import Carousel2 from "./images/carousel2.jpg";
import Carousel3 from "./images/carousel3.jpg";

const Main = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/flood");
  };

  return (
    <Router>
      <div>
        <h1>TRENDING</h1>
        <div class="acc-container">
          <div class="accordion">
            <div class="box b1">
              <div class="content">
                <img class="accordimg" src={Flood1} alt="flood" />
                <div class="text">
                  <h2>Nepal flood toll reach 1000+</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, impedit magnam! Natus ipsam itaque officia cumque
                    quia nam praesentium eius, commodi at, reprehenderit
                    molestiae saepe eaque enim iure explicabo dolor.
                  </p>
                  <Link onClick={redirect}>
                    Read More <span>>></span>
                  </Link>
                </div>
              </div>
            </div>

            <div class="box b2">
              <div class="content">
                <img class="accordimg" src={Mountain} alt="Mountain" />
                <div class="text">
                  <h2>Garbage in Mountains to be cleaned</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, impedit magnam! Natus ipsam itaque officia cumque
                    quia nam praesentium eius, commodi at, reprehenderit
                    molestiae saepe eaque enim iure explicabo dolor.
                  </p>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
              </div>
            </div>

            <div class="box b3">
              <div class="content">
                <img class="accordimg" src={Euro} alt="euro cup" />
                <div class="text">
                  <h2>Euro 2020 takes a shocking turn</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, impedit magnam! Natus ipsam itaque officia cumque
                    quia nam praesentium eius, commodi at, reprehenderit
                    molestiae saepe eaque enim iure explicabo dolor.
                  </p>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
              </div>
            </div>

            <div class="box b4">
              <div class="content">
                <img class="accordimg" src={Politics1} alt="politics1" />
                <div class="text">
                  <h2>Political agenda to be discussed</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, impedit magnam! Natus ipsam itaque officia cumque
                    quia nam praesentium eius, commodi at, reprehenderit
                    molestiae saepe eaque enim iure explicabo dolor.
                  </p>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
              </div>
            </div>

            <div class="box b5">
              <div class="content">
                <img
                  class="accordimg"
                  src={Agriculture}
                  alt="planting paddys"
                />
                <div class="text">
                  <h2>Farmers planting paddys</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, impedit magnam! Natus ipsam itaque officia cumque
                    quia nam praesentium eius, commodi at, reprehenderit
                    molestiae saepe eaque enim iure explicabo dolor.
                  </p>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main>
          <section class="top">
            <div class="top-container-left">
              <h2>News Category</h2>
              <div class="container-top-left">
                <article>
                  <img src={Topleft} />

                  <div>
                    <h3>
                      Title Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Sunt, aliquid!
                    </h3>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis ea sint, nisi rem earum fugit? Facere veritatis
                      sapiente eveniet quibusdam.
                    </p>
                    <div class="author-date">
                      <p>
                        Name of Author <br />
                        1st July 2021
                      </p>
                    </div>
                    <a href="#">
                      Read More <span>>></span>
                    </a>
                  </div>
                </article>
              </div>

              <div class="container-bottom-left">
                <article>
                  <img src={Bottomleft1} />
                  <div>
                    <h3>
                      Title Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Commodi iure modi animi cupiditate. Explicabo, nihil?
                    </p>
                    <div class="author-date">
                      <p>
                        Name of Author <br />
                        1st July 2021
                      </p>
                    </div>
                    <a href="#">
                      Read More <span>>></span>
                    </a>
                  </div>
                </article>

                <article>
                  <img src={Bottomleft2} />
                  <div>
                    <h3>
                      Title Lorem ipsum dolor sit amet consectetur adipisicing
                    </h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Commodi iure modi animi cupiditate. Explicabo, nihil?
                    </p>
                    <div class="author-date">
                      <p>
                        Name of Author <br />
                        1st July 2021
                      </p>
                    </div>
                    <a href="#">
                      Read More <span>>></span>
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div class="top-container-right">
              <h2>Latest Stories</h2>

              <article>
                <h4 class="categ">category</h4>
                <div>
                  <h3>
                    title Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. A, fugiat.
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    repellendus?
                  </p>
                  <div class="author-date">
                    <p>
                      Name of Author <br />
                      1st July 2021
                    </p>
                  </div>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
                <img src={Right1} />
              </article>

              <article>
                <h4 class="categ">category</h4>
                <div>
                  <h3>
                    title Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Maxime, rerum.
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    repellendus?
                  </p>
                  <div class="author-date">
                    <p>
                      Name of Author <br />
                      1st July 2021
                    </p>
                  </div>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
                <img src={Right2} />
              </article>

              <article>
                <h4 class="categ">category</h4>
                <div>
                  <h3>
                    title Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsa, vel.
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    repellendus?
                  </p>
                  <div class="author-date">
                    <p>
                      Name of Author <br />
                      1st July 2021
                    </p>
                  </div>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
                <img src={Right3} />
              </article>

              <article>
                <h4 class="categ">category</h4>
                <div>
                  <h3>
                    title Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Id, perspiciatis?
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    repellendus?
                  </p>
                  <div class="author-date">
                    <p>
                      Name of Author <br />
                      1st July 2021
                    </p>
                  </div>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
                <img src={Right4} />
              </article>

              <article>
                <h4 class="categ">category</h4>
                <div>
                  <h3>
                    title Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Asperiores, cum?
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    repellendus?
                  </p>
                  <div class="author-date">
                    <p>
                      Name of Author <br />
                      1st July 2021
                    </p>
                  </div>
                  <a href="#">
                    Read More <span>>></span>
                  </a>
                </div>
                <img src={Right5} />
              </article>
            </div>
          </section>
          <section class="bottom">
            <div class="bottom-left">
              <h2>News category</h2>
              <div class="bottom-left-article">
                <article class="bottom-left-left">
                  <img src={Bannernews3} />
                  <h3>News title Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, in. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Cumque dolorem, non quasi maxime
                    recusandae earum voluptatibus! Debitis iste architecto
                    numquam.
                  </p>
                  <div class="author-date">
                    <p>
                      Name of Author <br />
                      1st July 2021
                    </p>
                  </div>
                  <a href="#">
                    Read more <span>>></span>
                  </a>
                </article>
                <article class="bottom-left-right">
                  <img src={Bannernews4} />
                  <h3>
                    <a href="#">News title Lorem ipsum dolor sit amet.</a>
                  </h3>
                  <h3>
                    <a href="#">News title Lorem ipsum dolor sit amet.</a>
                  </h3>
                  <h3>
                    <a href="#">News title Lorem ipsum dolor sit amet.</a>
                  </h3>
                  <h3>
                    <a href="#">News title Lorem ipsum dolor sit amet.</a>
                  </h3>
                </article>
              </div>
            </div>
            <div class="bottom-right">
              <h2>News category</h2>
              <article>
                <img src={Banner} />
                <h3>
                  <a href="#">News title Lorem ipsum dolor sit amet.</a>
                </h3>
              </article>
              <article>
                <img src={Carousel1} />
                <h3>
                  <a href="#">News title Lorem ipsum dolor sit amet.</a>
                </h3>
              </article>
              <article>
                <img src={Carousel2} />
                <h3>
                  <a href="#">News title Lorem ipsum dolor sit amet.</a>
                </h3>
              </article>
              <article>
                <img src={Carousel3} />
                <h3>
                  <a href="#">News title Lorem ipsum dolor sit amet.</a>
                </h3>
              </article>
            </div>
          </section>
        </main>
      </div>
    </Router>
  );
};

export default Main;
