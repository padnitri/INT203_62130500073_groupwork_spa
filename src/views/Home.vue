<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.save-button {
  width: 4em;
  height: 4em;
  background-color: #DE3163;
  border: line whitesmoke 3%;
  border-radius: 30%;
}
.save-button:hover {
  background-color: #fd5c63;
}
.input {
  color: dimgray;
  font-family: "Mitr", sans-serif;
  padding: 2%;
  min-width: 75%;
  min-height: 10rem;
}
h2 {
  padding: 2%;
  font-size: 1.5em;
  font-weight: bold;
  font-family: "Original Surfer", cursive;
}
