import React from "react";
import Flood1 from "./images/flood1.jpg";
import "./style.css";

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
import Morestories from "./Morestories";
import Livenews from "./Livenews";


const Flood = () => {
  return (
    <div>
      <div class="flood-page">
        <div class="flood">
          <h2>Nepal flood toll reach 1000+</h2>
          <img src={Flood1} alt="flood" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio amet
            consectetur doloribus et nam eos placeat iure consequuntur iste
            suscipit soluta maxime, saepe minima deleniti voluptates porro
            necessitatibus? Laboriosam eos repudiandae unde alias temporibus.
            Cupiditate libero natus, ipsam nam doloremque culpa voluptates est
            et harum voluptate voluptatem quisquam laudantium illum dolor
            consectetur quaerat voluptatibus expedita. Tenetur amet eum debitis,
            facere officia quaerat quam possimus earum quos in iste sapiente!
            Dolorum optio alias doloribus autem, eius repudiandae molestiae
            voluptas necessitatibus porro quaerat explicabo excepturi adipisci
            natus quisquam quia recusandae cum laborum vitae dolor nemo ea.
            Distinctio provident fugiat modi fugit adipisci excepturi labore.
            Omnis optio aliquid maiores tempore quas, nulla iure amet
            praesentium voluptatibus maxime, accusamus impedit eligendi ut,
            illum labore reprehenderit quibusdam aut quaerat. Rerum laudantium
            delectus fugit dolore. Iste totam odio fugit odit, minus eius
            veritatis rem velit architecto earum? Doloremque omnis odio
            voluptate totam adipisci soluta iusto esse possimus blanditiis
            corrupti quis architecto, laudantium harum quae. Dolorum eum unde
            non officia accusamus labore alias dolor qui explicabo sit eveniet
            adipisci assumenda vel facere, dignissimos vitae dolores ipsam
            expedita at fugiat ducimus quasi atque pariatur omnis. Enim quam
            facilis deserunt aliquid impedit odio optio, sequi fugit. Ut cum aut
            maxime nobis quis assumenda exercitationem aspernatur, laboriosam
            hic animi. Dolore, cumque fuga, reprehenderit et recusandae eum
            necessitatibus id iste quia vitae doloribus accusantium molestias
            facere explicabo quidem, corporis asperiores voluptas eius voluptate
            similique! Iusto at ipsam voluptatem delectus numquam eos laudantium
            in commodi? Reiciendis, aut. Voluptas saepe neque asperiores
            facilis?
          </p>
          <div class="author-date">
            <p>
              Name of Author <br />
              1st July 2021
            </p>
          </div>
          <a
            href="#"
            onclick="window.open('https://www.facebook.com/sharer.php?u=http://127.0.0.1:5500/Design/flood.html', 'Facebook Share'); return false"
            class="facebook-btn"
          >
            <svg
              id="facebook"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="13"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>{" "}
            Share to facebook
          </a>
        </div>
        <Livenews />
      </div>
      <Morestories />
    </div>
  );
};

export default Flood;
