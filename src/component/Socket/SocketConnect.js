import { useEffect } from "react";
import socketIOClient from "socket.io-client";

const useSocket = (user, auction, dispatch) => {
  useEffect(() => {
    const socket = socketIOClient.connect("http://localhost:5000");

    socket.emit("join", user, auction);
  }, [dispatch]);
};

export default useSocket;
