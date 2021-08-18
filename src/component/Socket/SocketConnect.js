import { useEffect } from "react";
import socketIOClient from "socket.io-client";

const useSocket = (user, auction, dispatch) => {
  useEffect(() => {
    const socket = socketIOClient.connect("http://localhost:5000");

    socket.emit("join", user, auction);

    socket.on("addUser", (user) => {
      console.log(user.username, "Joined");
    });
  }, [dispatch]);
};

export default useSocket;
