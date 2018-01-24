<template>
  <div class="container">
    <div class="searchbox-container"><input class="searchbox" type="text" v-model="search" placeholder="search box" /></div>
    <FixtureCard v-bind:filteredFixtures="filteredFixtures"></FixtureCard>
  </div>
</template>

<script>
import FixtureCard from '../components/FixtureCard.vue'
import Axios from 'axios'

// api token
const config = {
  headers: {
    'X-Auth-Token': '651c36e10a3640f598f529d5a2868ec2'
  }
}
export default {
  components: {
    FixtureCard
  },

  data () {
    return {
      fixtures: [],
      formatedDate: '',
      search: ''
    }
  },

  created () {
    this.getData('http://api.football-data.org/v1/competitions/' + this.$route.params.competition + '/fixtures')
  },

  computed: {
    filteredFixtures: function () {
      return this.fixtures.filter((fixture) => {
        //  TODO: Maybe find a better way but it works for now.
        return fixture.homeTeamName.toLowerCase().match(this.search.toLowerCase()) ||
        fixture.awayTeamName.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },

  methods: {
    getData: function (url) {
      Axios.get(url, config)
      .then(response => {
        this.fixtures = response.data.fixtures
        console.log(response.data.fixtures)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.container {
  overflow-x: hidden;
}
.searchbox {
  background: #1a2139;
  color: #6fffe9;
  border: none;
  font-size: 2rem;
  padding: 20px;
  min-width: 100vw;
  box-sizing: border-box;
}
.searchbox:focus {
  outline: none;
}

.searchbox::-moz-placeholder{
  color: #6fffe9;
}

.searchbox::-webkit-input-placeholder{
  color: #6fffe9;
}

</style>
