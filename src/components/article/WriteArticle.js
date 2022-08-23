import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const WriteArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");

  const addArticle = () => {
    Axios.post("http://localhost:3001/insert", {
      title: title,
      content: content,
      authorName: authorName,
    });
  };

  let history = useHistory();

  const redirect = () => {
    history.push("/updatearticle");
  };

  return (
    <div>
      <div id="contact">
        <h1>Your Article</h1>

        <form class="contact-form">
          <label for="">Article Title</label>
          <input
            class="name"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            name="ArticleTitle"
            type="text"
            placeholder="Enter the title of article"
            required
          />
          <br />
          <label for="">Article content</label>
          <textarea
            class="message art"
            name="ArticleContent"
            onChange={(event) => {
              setContent(event.target.value);
            }}
            id=""
            cols="10"
            rows="10"
            placeholder="Enter the content"
          ></textarea>
          <br />
          <label for="">Author's Name</label>
          <input
            class="name"
            name="AuthorName"
            onChange={(event) => {
              setAuthorName(event.target.value);
            }}
            type="text"
            placeholder="Enter your full name"
            required
          />
          <br />
          <a onClick={redirect}>
            <button onClick={addArticle}>Add article</button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default WriteArticle;
