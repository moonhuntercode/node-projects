import express, { static as static_ } from "express";
const app = express();
import { join } from "node:path";
// websockets

import { Server } from "socket.io";

//settings
app.set("port", process.env.PORT || 3000);
// serving static files
app.use(static_(join(import.meta.dirname, "public")));
// start the server
const server = app.listen(app.get("port"), () => {
  console.log(`server on http://localhost:${app.get("port")}`);
});

const io = new Server(server);
// console.log(path);
io.on("connection", (socket) => {
  console.log("new connection", socket.id);
  socket.on("chat:message", (data) => {
    io.sockets.emit("chat:message", data);
  });
  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});
