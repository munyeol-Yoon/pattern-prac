const express = require("express");

const postsRouter = require("./posts.routes");

const router = express.Router();

router.use("/posts", postsRouter);

module.exports = router;
