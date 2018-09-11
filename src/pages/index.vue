<template>
  <div>
    <h1>indexasd</h1>
    <router-link to="/pages/counter">counter</router-link>
    <button @click="goCounter">button</button>
  </div>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      goCounter () {
        console.log(this.$route)
        this.$router.push({ path: '/pages/counter', query: { name: 'vijay' } })
      }
    }
  }
</script>

<style scoped>

</style>
