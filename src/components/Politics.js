import React from "react";

import Politics1 from "./images/politics1.jpg";
import Politics2 from "./images/politics2.jpg";
import Politics3 from "./images/politics3.jpg";
import Politics4 from "./images/politics4.jpg";
import Politics5 from "./images/politics5.jpg";
import Politics6 from "./images/politics6.jpg";

import Livenews from "./Livenews";
import Morestories from "./Morestories";

const Politics = () => {
  return (
    <div>
      <h1 id="category-head">POLITICS</h1>
      <div class="category">
        <div class="category-left">
          <div class="category1">
            <article class="category-article">
              <h2>
                title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, eveniet?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis ratione commodi eum, consequatur labore voluptatibus
                quos aspernatur esse exercitationem doloremque.
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
            </article>
            <img src={Politics1} alt="" />
          </div>
          <div class="category1">
            <article class="category-article">
              <h2>
                title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, eveniet?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis ratione commodi eum, consequatur labore voluptatibus
                quos aspernatur esse exercitationem doloremque.
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
            </article>
            <img src={Politics2} alt="" />
          </div>
          <div class="category1">
            <article class="category-article">
              <h2>
                title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, eveniet?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis ratione commodi eum, consequatur labore voluptatibus
                quos aspernatur esse exercitationem doloremque.
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
            </article>
            <img src={Politics3} alt="" />
          </div>
          <div class="category1">
            <article class="category-article">
              <h2>
                title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, eveniet?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis ratione commodi eum, consequatur labore voluptatibus
                quos aspernatur esse exercitationem doloremque.
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
            </article>
            <img src={Politics4} alt="" />
          </div>
          <div class="category1">
            <article class="category-article">
              <h2>
                title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, eveniet?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis ratione commodi eum, consequatur labore voluptatibus
                quos aspernatur esse exercitationem doloremque.
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
            </article>
            <img src={Politics5} alt="" />
          </div>
          <div class="category1">
            <article class="category-article">
              <h2>
                title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, eveniet?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis ratione commodi eum, consequatur labore voluptatibus
                quos aspernatur esse exercitationem doloremque.
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
            </article>
            <img src={Politics6} alt="" />
          </div>
        </div>
        <Livenews />
      </div>
      <Morestories />
    </div>
  );
};

export default Politics;
