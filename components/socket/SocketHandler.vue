<script setup>
const socketUrl = "http://27.254.62.100:30031";
const socket = ref(null);
const isConnected = ref(false);

const connectSocket = () => {
  if (typeof window.io !== "function") {
    console.error("Socket.IO script not loaded yet!");
    return;
  }

  socket.value = window.io(socketUrl, {   
    transports: ["websocket"],
  });

  socket.value.on("connect", () => {
    console.log("Connected to Socket.IO server:", socket.value.id);
    isConnected.value = true;
  });

  socket.value.on("transaction", (data) => {
    console.log(data);
    alert(data.length);
  });

  socket.value.on("disconnect", () => {
    console.log("Disconnected from Socket.IO server");
    isConnected.value = false;
  });
};

const disconnectSocket = () => {
  if (socket.value) {
    socket.value.disconnect();
    console.log("Socket disconnected");
  }
};

const sendMessage = () => {
  socket.value.emit("transaction", { aa: "asdasd", bb: "eerer" });
};

onMounted(() => {
  connectSocket();
  sendMessage();
});

onUnmounted(() => {
  disconnectSocket();
});
</script>

<template>
  <div>
    <h2>Socket.IO Status: {{ isConnected ? "Connected" : "Disconnected" }}</h2>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>
