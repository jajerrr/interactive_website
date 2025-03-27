import { defineStore } from "pinia";
export const useSocketStore = defineStore("socketStore", {
  state: () => ({
    transactionData: [],
    isConnected: false,
    socket: null,
  }),
  actions: {
    connectSocket(socketUrl) {
      if (typeof window.io !== "function") {
        console.error("Socket.IO script not loaded yet!");
        return;
      }

      this.socket = io(socketUrl, {
        transports: ["websocket"],
      });

      this.socket.on("connect", () => {
        console.log("Connected to Socket.IO server:", this.socket?.id);
        this.isConnected = true;
      });

      this.socket.on("transaction", (data) => {
        this.transactionData = data;
      });

      this.socket.on("disconnect", () => {
        console.log("Disconnected from Socket.IO server");
        this.isConnected = false;
        this.socket = null;
      });
    },
    disconnectSocket() {
      if (this.socket) {
        this.socket.disconnect();
        console.log("Socket disconnected");
        this.socket = null;
        this.isConnected = false;
      }
    },
    sendMessage(event, payload) {
      if (this.socket) {
        this.socket.emit(event, payload);
      }
    },
  },
});
