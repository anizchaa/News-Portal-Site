import React from "react";

import Business1 from "./images/business1.jpg";
import Business2 from "./images/business2.jpg";
import Business3 from "./images/business3.jpg";
import Business4 from "./images/business4.jpg";
import Business5 from "./images/business5.jpg";
import Business6 from "./images/business6.jpg";

import Livenews from "./Livenews";
import Morestories from "./Morestories";

const Business = () => {
  return (
    <div>
      <h1 id="category-head">BUSINESS</h1>
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
            <img src={Business1} alt="" />
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
            <img src={Business2} alt="" />
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
            <img src={Business3} alt="" />
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
            <img src={Business4} alt="" />
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
            <img src={Business5} alt="" />
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
            <img src={Business6} alt="" />
          </div>
        </div>
        <Livenews />
      </div>
      <Morestories />
    </div>
  );
};

export default Business;
