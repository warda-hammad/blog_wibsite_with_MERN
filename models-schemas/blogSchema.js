const mongoose = require("mongoose");
// const Schema = mongoose.Schema();
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    snippet: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const BlogModel = mongoose.model("Blog-collection", blogSchema);
module.exports = BlogModel;
