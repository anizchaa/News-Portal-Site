import Axios from "axios";
import React, { useEffect, useState } from "react";
import Livenews from "../Livenews";
import Morestories from "../Morestories";
import "../style.css";

const DisplayArticle = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setArticleList(response.data);
    });
  });
  return (
    <div>
      <div class="flood-page">
        <div className="flood">
          {articleList.map((val, key) => {
            return (
              <div>
                <main className="disart">
                  <h1>{val.title}</h1>
                  <p>{val.content}</p>
                  <div className="author-date">
                    <p>{val.authorName}</p>
                  </div>
                </main>
              </div>
            );
          })}
        </div>
        <Livenews />
      </div>
      <Morestories />
    </div>
  );
};

export default DisplayArticle;
