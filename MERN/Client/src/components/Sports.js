import React from "react";


import Right1 from "./images/right-1.jpg";
import Right2 from "./images/right-2.jpg";
import Right3 from "./images/right-3.jpg";
import Right4 from "./images/right-4.jpg";
import Right5 from "./images/right-5.jpg";


import Bannernews3 from "./images/banner-news-3.jpg";
import Bannernews4 from "./images/banner-news-4.jpg";

import Sport1 from "./images/sport1.jpg";
import Sport2 from "./images/sport2.jpg";
import Sport3 from "./images/sport3.jpg";
import Sport4 from "./images/sport4.jpg";
import Sport5 from "./images/sport5.jpg";
import Sport6 from "./images/sport6.jpg";
import Livenews from "./Livenews";
import Morestories from "./Morestories";

const Sports = () => {
  return (
    <div>
      <h1 id="category-head">SPORTS</h1>
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
            <img src={Sport1} alt="" />
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
            <img src={Sport2} alt="" />
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
            <img src={Sport3} alt="" />
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
            <img src={Sport4} alt="" />
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
            <img src={Sport5} alt="" />
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
            <img src={Sport6} alt="" />
          </div>
        </div>
        <Livenews />
      </div>
      <Morestories />
    </div>
  );
};

export default Sports;
