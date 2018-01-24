import Axios from 'axios'

const config = {
  headers: {
    'X-Auth-Token': '651c36e10a3640f598f529d5a2868ec2'
  }
}

export default {
  getData: function (url) {
    Axios.get(url, config)
    .then(response => {
      return response.data.fixtures
    }).catch(error => {
      console.log(error)
    })
  }
}
