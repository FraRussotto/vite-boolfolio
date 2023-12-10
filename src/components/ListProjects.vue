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
        <router-link :to="{name: 'showproject', params:{slug: project.slug}}">
          {{ project.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul{
  list-style-type: none;
  a{
    text-decoration: none;
  }
}


</style>