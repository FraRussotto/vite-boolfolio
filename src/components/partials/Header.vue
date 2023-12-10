<script>
  export default {
    name: 'Header',
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<template>
  <header>
    <div>
      <ul class="d-flex">
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">About</router-link>
        </li>
        <li>
          <router-link :to="{name: 'projects'}">Projects</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">Contacts</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header{
  text-align: center;
}

</style>