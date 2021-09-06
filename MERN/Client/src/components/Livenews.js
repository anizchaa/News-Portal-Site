import React from "react";
import Banner from "./images/banner.jpg";

import Carousel1 from "./images/carousel1.jpg";
import Carousel2 from "./images/carousel2.jpg";
import Carousel3 from "./images/carousel3.jpg";

const Livenews = () => {
  return (
    <div>
      <div class="bottom-right">
        <h2>Live News</h2>
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
    </div>
  );
};

export default Livenews;
