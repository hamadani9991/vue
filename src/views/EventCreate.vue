<template>
  <div>
    <h1>Create Event {{user.name}} </h1>
    <p>{{user.id}}</p>
    <p>{{catLenght}} categories</p>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    computed: {
      catLenght() {
        return this.$store.getters.catLenght
      },
      ...mapState(['user', 'categories'])
    }

  }
</script>

<style scoped>

</style>