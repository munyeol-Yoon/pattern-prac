const express = require("express");

const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

const router = express.Router();

router.get("/", postsController.getPosts);
router.post("/", postsController.createPost);

module.exports = router;
