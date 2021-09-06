import React from "react";

import International1 from "./images/international1.jpg";
import International2 from "./images/international2.jpg";
import International3 from "./images/international3.jpg";
import International4 from "./images/international4.jpg";
import International5 from "./images/international5.jpg";
import International6 from "./images/international6.jpg";

import Livenews from "./Livenews";
import Morestories from "./Morestories";

const International = () => {
  return (
    <div>
      <h1 id="category-head">INTERNATIONAL</h1>
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
            <img src={International1} alt="" />
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
            <img src={International2} alt="" />
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
            <img src={International3} alt="" />
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
            <img src={International4} alt="" />
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
            <img src={International5} alt="" />
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
            <img src={International6} alt="" />
          </div>
        </div>
        <Livenews />
      </div>

      <Morestories />
    </div>
  );
};

export default International;
