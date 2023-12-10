<script>
import { store } from '../data/store';
import axios from 'axios';

  export default {
    name: 'showproject',
    data() {
      return {
        project: {},
      }
    },
    computed: {},
    mounted() {
      this.slug = this.$route.params.slug
      this.getProject(this.slug);
    },
    methods: {
      getProject() {
        axios.get(store.apiUrl + 'projects/get-project/' + this.slug)
      .then(response => {
          this.project = response.data
          console.log(this.response.data);
          console.log(this.project);
        })
      .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<template>
  <div>
    <h1>Project: {{ project.name }}</h1>
    <span>Data: {{ project.date }}</span>
    <p>{{ project.description }}</p>
    <span>{{ project.tecnologies?.name }}</span>
    <span>{{ project.type?.name }}</span>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>