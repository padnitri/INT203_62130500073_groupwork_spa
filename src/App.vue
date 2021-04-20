<template>
  <base-font>
    <div class="w-screen h-screen">
      <div id="nav">
        <router-link to="/">Memorise Your Mems!</router-link> |
        <router-link to="/about">Random Your Mems!</router-link>
      </div>
      <router-view />
    </div>
  </base-font>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
}

#nav {
  padding: 30px;
  font-family: "Mitr", sans-serif;
  font-size: 1.2em;
}

#nav a {
  padding: 2%;
  font-weight: bold;
  color: #2c3e50;
}

#nav a:hover{
  color: #DE3163;
}
#nav a.router-link-exact-active {
  color: palevioletred;
}
</style>
