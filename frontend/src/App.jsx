import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("message", (data) => {
      console.log("Message from server:", data);
    });

  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Chat App 🚀</h1>
    </div>
  );
}

export default App;