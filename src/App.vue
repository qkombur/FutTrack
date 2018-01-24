<template>
  <div id="app">
    <nav><router-link to='/'><h1>ff</h1></router-link></nav>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

#app {
  height: 100vh;
}

body {
  background-color: #0b132b;
  padding: 0;
  margin: 0;
  font-size: 100%;
}
h1 {
  font-size: 2em;
  font-weight: 900;
  text-align: left;
  color: #6fffe9;
  margin: 0;
  padding: 20px;
}

nav {
  background-color: #1c2541;

}

a {
  text-decoration: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

@media all and (min-width: 1000px){
  h1 {
    font-size: 2.5em;
  }
}


</style>