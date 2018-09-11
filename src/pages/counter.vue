<template>
  <div>
    <h1>counter1</h1>
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
