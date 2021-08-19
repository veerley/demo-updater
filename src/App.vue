<template>
  <div>Hello New Version 1.5</div>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
  name: "App",
  mounted() {
    ipcRenderer.on("message", (event, text) => {
      console.log("message:", text);
    });
  },
};
</script>
<style scoped></style>
