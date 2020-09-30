const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
const postRouter = require("../posts/posts-router");
const userRouter = require("../users/users-router");

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/post", postRouter);
server.use("/api/user", userRouter);

module.exports = server;
