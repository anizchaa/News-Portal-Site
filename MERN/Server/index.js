const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const ArticleModel = require("./models/Article");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Haakuchaa:Assassins9849@cluster0.stegy.mongodb.net/article?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const authorName = req.body.authorName;

  const article = new ArticleModel({
    title: title,
    content: content,
    authorName: authorName,
  });
  try {
    await article.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.put("/update", async (req, res) => {
  const newTitle = req.body.newTitle;
  const newContent = req.body.newContent;
  const id = req.body.id;

  try {
    await ArticleModel.findById(id, (err, updatedArticle) => {
      updatedArticle.title = newTitle;
      updatedArticle.content = newContent;
      updatedArticle.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  ArticleModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await ArticleModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3001, () => {
  console.log("Server runninng on port 3001...");
});
