const express = require("express");
const route = express.Router();
const blog_controllers = require("../controllers/blogControllers");

route.get("/", blog_controllers.blog_index);

route.post("/", blog_controllers.blog_create_post);

route.get("/create", blog_controllers.blog_create_get);

route.get("/:id", blog_controllers.blog_details);

route.delete("/:id", blog_controllers.blog_delete);

module.exports = route;
