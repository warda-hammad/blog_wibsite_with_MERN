const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { result } = require("lodash");
const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

// connect to mongoDB
const dbURL =
  "mongodb+srv://wardaNode:passwordOFdatabaseUser@cluster0.htwmfpe.mongodb.net/node-project?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    // here we want to listen to the requests after connected to the database
    // listen for requests
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// register view engines (ejs)
app.set("view engine", "ejs");

// middleware and static fils
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// interact with database
{
  // mongoose and mongo sandbox routes
  // the method to add new blog
  // app.get("/add-blog", (req, res) => {
  //   const newBlog = new Blog({
  //     title: "the title of the new blog 2",
  //     snippet: "the snippet of our new blog",
  //     body: "the body of the blog",
  //   });
  //   newBlog
  //     .save()
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  // // the method to get all blogs in the app
  // app.get("/all-blogs", (req, res) => {
  //   Blog.find()
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  // // find a blog
  // app.get("/single-blog", (req, res) => {
  //   Blog.findById("651eac12edb645f12c01bfe5")
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
}

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// blog routes
app.use("/blogs", blogRoutes);

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// redirects in express
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});
