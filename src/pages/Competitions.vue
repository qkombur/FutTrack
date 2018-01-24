<template>
  <div class="grid-container">
    <h1 class="grid-header">Competitions</h1>
    <li  v-for="competition in competitions"
        v-bind:key="+competition"
    >
      <div class="card">
        <router-link class="link" :to="'/competitions/' + competition.id" >
          <img class="logo" v-bind:src='competition.logo'>

        </router-link>
      </div>
    </li>
  </div>
</template>

<script>
export default {

  data () {
    return {
      competitions: [
        {
          id: 445,
          caption: 'Premier League',
          logo: require('../assets/Premier_League_logo.png')
        },
        {
          id: 450,
          caption: 'Ligue 1',
          logo: require('../assets/Ligue_1_logo.png')
        },
        {
          id: 452,
          caption: '1. Bundesliga',
          logo: require('../assets/Bundesliga_logo.png')
        },
        {
          id: 455,
          caption: 'La Liga',
          logo: require('../assets/LaLiga.png')
        }
      ]
    }
  },

  created () {
  },

  methods: {

  }
}
</script>

<style scoped>

.card {
  background-color: #1c2541;
  border-radius: 20px;
  text-align: center;
  height: 100%;
  margin: 0px auto;
  max-width: 600px;
  grid-area: main;
  display:flex;
  justify-content: center;
  align-items: center;
}

.link {
  display:flex;
  justify-content: center;
  align-items: center;

}

.grid-header {
  grid-area:header;
  font-size: 1.625em;
}

.grid-container {

  display: grid;
  padding: 10px;
  grid-gap: 20px;
  grid-template-areas:
    "header"
    "main";
}

.logo {
  width: 25%;
}

@media all and (min-width: 1000px) {
  .grid-container {
    grid-template-areas:
    "header header"
    "main main"
    "main main";
    max-width: 1200px;
    margin:0 auto;
  }


  .logo {
    width: 50%;
  }
}

@media all and (min-width: 1500px) {

  .card {
    background-color: #1c2541;
    border-radius: 20px;
    text-align: center;
    padding: 0px;
    margin: 0px;
    height:100%;
    grid-area: main;
  }
}


li {
  list-style-type: none;
}

h1 {
  text-align: center;
}
</style>
