<style scoped>
</style>

<template>
  <svg v-once v-html="src">
  </svg>
</template>

<script>
  // see vue-loader.conf
  export default {
    props: [ 'src' ]
  }
</script>