<template>
  <div class="flex-container container">
    <div class="container"><input class="searchbox" type="text" v-model="search" placeholder="search box" /></div>
    <FixtureCard
      v-for="(fixture, index) in filteredFixtures"
      v-bind:key="+fixture"
      v-bind:data-index="index"
      v-bind:fixture="fixture"
    >
    </FixtureCard>
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
    // e.g. http://api.football-data.org/v1/competitions/440/fixtures?timeFrame=n21
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
li {
  list-style-type: none;
  min-width: 100vw;
  padding: 30px 15px 0 15px;
}
.container {
  overflow-x: hidden;
  width: 100%;
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
