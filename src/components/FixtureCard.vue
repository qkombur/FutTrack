<template>
  <div class="flex-container">
      <li
        v-for="(fixture, index) in filteredFixtures"
        v-bind:key="+fixture"
        v-bind:data-index="index"
      >
        <div v-if="fixture.result.goalsHomeTeam !== null" class="card">
          <div class="left">

              <h2 class="teamName">{{ fixture.homeTeamName + ' - ' + fixture.result.goalsHomeTeam }}</h2>

            <h2 class="versus">vs</h2>
            <h2 class="teamName">{{ fixture.awayTeamName + ' - ' + fixture.result.goalsAwayTeam}}</h2>
          </div>
          <div class="right">
            <h2 class="date">{{ fixture.date | formatDate }}</h2>
            <h2 class="date">{{ fixture.date | formatTime }}</h2>
          </div>
        </div>

        <div v-else class="card">
          <div class="left">
              <h2 class="teamName">{{ fixture.homeTeamName }}</h2>

            <h2 class="versus">vs</h2>
            <h2 class="teamName">{{ fixture.awayTeamName }}</h2>
          </div>
          <div class="right">
            <h2 class="date">{{ fixture.date | formatDate }}</h2>
            <h2 class="date">{{ fixture.date | formatTime }}</h2>
          </div>
        </div>
      </li>
  </div>
</template>

<script>
import Axios from 'axios'

const config = {
  headers: {
    'X-Auth-Token': '651c36e10a3640f598f529d5a2868ec2'
  }
}

export default {
  name: 'FixtureCard',

  props: {
    filteredFixtures: {
      type: Array,
      default: []
    }
  },

  data () {
    return {
      formatedDate: '',
      search: '',
      teamIcon: []
    }
  },
  created () {
  },
  methods: {
    getIcon: function (value) {
      Axios.get(value, config)
      .then(response => {
        this.teamIcon = response.data.crestUrl
      })
    }
  },

  filters: {
    formatDate: function (value) {
      if (!value) return ''
      let date = new Date(value)
      return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
    },
    formatTime: function (value) {
      if (!value) return ''
      let date = new Date(value)
      return date.getHours() + ':' + date.getMinutes()
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: 900;
  color: #6fffe9;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

li {
  list-style-type: none;
  min-width: 100vw;
  padding: 30px 15px 0 15px;
}

.card {
  background-color: #1c2541;
  border-radius: 20px;
  text-align: left;
  padding: 30px;
  margin: 0 auto;
  max-width: 100%;
}


.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.flex-container {
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
  align-items: center;
}


@media all and (min-width: 1000px){
  .flex-container {
    flex-direction: row;
  }
  li {
    min-width: 300px;
  }

}
</style>