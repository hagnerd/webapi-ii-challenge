const express = require("express");
const path = require("path");
const posts = require("./routes/posts");

const server = express();

// Allows us to parse the request body
server.use(express.json());

server.use("/api/posts", posts);

server.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname__, "client", "build", "index.html"));
});

module.exports = server;
