import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../style.css";

const UpdateArticle = () => {
  const [articleList, setArticleList] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setArticleList(response.data);
    });
  });

  const updateArticle = (id) => {
    Axios.put("http://localhost:3001/update", { id: id, newTitle: newTitle, newContent: newContent });
  };

  const deleteArticle = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div>
      <div className="flood">
        {articleList.map((val, key) => {
          return (
            <div>
              <main className="disart contact-form">
                <h1>{val.title}</h1>
                <p>{val.content}</p>
                <div className="author-date">
                  <p>{val.authorName}</p>
                </div>
                <input
                  type="text"
                  placeholder="New Title"
                  onChange={(event) => {
                    setNewTitle(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="New Content"
                  onChange={(event) => {
                    setNewContent(event.target.value);
                  }}
                />
                <a
                  className="reload"
                  onClick={() => window.location.reload(false)}
                >
                  <button
                    onClick={() => {
                      updateArticle(val._id);
                    }}
                  >
                    {" "}
                    Update
                  </button>
                </a>
                <a
                  className="reload"
                  onClick={() => window.location.reload(false)}
                >
                  <button
                    onClick={() => {
                      deleteArticle(val._id);
                    }}
                  >
                    Delete
                  </button>
                </a>
              </main>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpdateArticle;
