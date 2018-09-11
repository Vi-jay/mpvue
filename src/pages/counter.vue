<template>
  <div>
    <h1>counter</h1>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    onShow () {
      console.log(this.$route.query)
    }
  }
</script>

<style scoped>

</style>
