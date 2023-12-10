<script>

  import Header from './components/partials/Header.vue';

  export default {
    name: 'App',
    components: {
      Header
    },
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<template>
  <Header />
  <div class="container">
    <RouterView />

  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>