<template>
  <div class="main">
    <div class="welcome">
      <div class="wrapper">
        <h2 class="welcome-header">Welcome to Fut Fixtures</h2>
        <h3>Now spoiler free!</h3>
        <router-link class='btn' to='/competitions'>View Fixtures</router-link>
      </div>
    </div>
    <div class="feature-container">
      <div class="wrapper">
        <div class="feature">
          <h2 class="feature-header">Vue</h2>
          <p class="feature-body">All of the front end of this website is Vue. I don't have a strong opinion about frameworks, I just like Vue.</p>
        </div>
        <div class="feature">
          <h2 class="feature-header">football-data.org</h2>
          <p class="feature-body">I didn't curate all of this data myself, <a href="http://www.football-data.org">footballdata.org</a> did all the heavy lifting for me and provided a great API to make calls with.</p>
        </div>
        <div class="feature">
          <h2 class="feature-header">Github</h2>
          <p class="feature-body">If you're the type of person who wants to read source code. All of my projects are <a href="https://www.github.com/qkombur/FutTrack">open source</a> </p>
        </div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
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
a {
  color: #f4f4f4;
  text-decoration: underline;
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
  height: 600px;
  background: linear-gradient(
    rgba(0, 0, 0, .2),
    rgba(0, 0, 0, 0.80)
  ),
    url(../assets/cheering-crowd.jpg) no-repeat center center fixed;
  background-size: cover;
}

.welcome .wrapper {
  flex-direction: column;
}
.welcome-header {
  font-size: 3em;
  margin: 0;
}

.welcome h3 {
  color: #f4f4f4;
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
  background-color: #f4f4f4;
  height: 600px;
}

.feature-header {
  color: #2c3e50;
}
.feature {
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 425px;
}

.wrapper{
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.feature-body {
  color: #2c3e50;
}

.feature-body a {
  color: #2c3e50;
}

@media all and (min-width: 1000px) {
  .feature-container {
    flex-direction: row;
    max-width: 100%;;
  }

  .wrapper {
    flex-direction: row;
  }
}

</style>