<template>
  <div class="main">
    <div class="welcome">
      <h2 class="welcome-header">Welcome to Fut Fixtures</h2>
      <router-link class='btn' to='/competitions'>View Fixtures</router-link>
    </div>
    <div class="feature-container">
      <div class="feature">
        <h2 class="feature-header">Vue</h2>
        <p class="feature-body">All of the front end of this website is Vue. I don't have a strong opinion about frameworks but I really liked the way Vue handles components and wasn't a fan of JSX.</p>
      </div>
      <div class="feature">
        <h2 class="feature-header">football-data.org</h2>
        <p class="feature-body">I didn't curate all of this data myself, <a href="http://www.football-data.org">footballdata.org</a> did all the heavy lifting for me and provided a great API to make calls with.</p>
      </div>
      <div class="feature">
        <h2 class="feature-header">Github</h2>
        <p class="feature-body">If you're the type of person who wants to read source code. All of my projects are<a href="https://www.github.com/qkombur/FutTrack"> open source</a> </p>
      </div>
    </div>
  </div>
</template>

<script>

import FixtureCard from '@/components/FixtureCard.vue'

export default {
  name: 'main',
  components: {
    FixtureCard
  },
  data () {
    return {
      msg: 'This is a test'
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  font-weight: 900;
  color: #fff;
  font-size: 1.625rem;
  text-align: center;
}

p {
  color: #f4f4f4;
  font-size: 1em;
  padding: 0 5px;
}
ul {
  list-style-type: none;
  padding: 0;
  color: #6fffe9;
}

li {
  display: inline-block;
  margin: 0 10px;
  color: #6fffe9;
  list-style-type: none;
}
.welcome {
  padding: 0 0 40px 0;
}

.welcome-header {
  padding: 0 0 40px 0;
}
.btn {
  background-color:#6fffe9;
  padding: 20px 60px;
  margin: 20px 0 0 0;
  border-radius: 50px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 900;
  margin: 0 auto;
  font-size: 1em;
}

.feature-container {
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  flex-direction: column;
}

@media all and (min-width: 1000px) {
  .feature-container {
    flex-direction: row;
    max-width: 1040px;
  }
}

</style>