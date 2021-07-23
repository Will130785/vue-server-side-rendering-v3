<template>
  <div id="app">
    <h1 class="heading">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World'
    }
  }
}
</script>

<style>
  .heading {
    color: greenyellow;
  }
</style>