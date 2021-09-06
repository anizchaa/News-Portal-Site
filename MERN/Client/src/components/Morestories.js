import React from "react";
import Topleft from "./images/top-left.jpg";
import Bottomleft1 from "./images/bottom-left-1.jpg";
import Bottomleft2 from "./images/bottom-left-2.jpg";

const Morestories = () => {
  return (
    <div>
      <div class="more">
        <div class="top-container-left">
          <h2>More Stories</h2>
          <div class="container-top-left">
            <article>
              <img src={Topleft} />

              <div>
                <h3>
                  Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sunt, aliquid!
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
              <h4 class="categ">category</h4>
            </article>

            <article>
              <img src={Bottomleft1} />
              <div>
                <h3>
                  Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, facilis?
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
              <h4 class="categ">category</h4>
            </article>

            <article>
              <img src={Bottomleft1} />
              <div>
                <h3>
                  title Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Maxime, iure?
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
              <h4 class="categ">category</h4>
            </article>
          </div>
        </div>

        <div id="bord" class="top-container-left">
          <div class="container-top-left">
            <article>
              <img src={Topleft} />

              <div>
                <h3>
                  Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sunt, aliquid!
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
              <h4 class="categ">category</h4>
            </article>

            <article>
              <img src={Bottomleft1} />
              <div>
                <h3>
                  Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, facilis?
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
              <h4 class="categ">category</h4>
            </article>

            <article>
              <img src={Bottomleft2} />
              <div>
                <h3>
                  title Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Maxime, iure?
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
              <h4 class="categ">category</h4>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Morestories;
