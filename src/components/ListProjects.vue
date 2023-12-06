<script>

import { store } from '../data/store';

  export default {
    name: 'listProjects',
    data() {
      return {
        store
      }
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<template>
  <div>
    <ul>
      <li v-for="project in store.projects" :key="project.id">
        <p>{{ project.name }}</p>
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>