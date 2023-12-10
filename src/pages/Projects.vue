<script>

import { store } from '../data/store';
import axios from "axios";
import ListProjects from '../components/ListProjects.vue'
import Paginator from '../components/partials/Paginator.vue';

export default{
  name: 'App',
  components: {
    ListProjects,
    Paginator
  },

  data(){
    return {
      links: [],
    }
  },

    methods: {
      getApi(url) {
        axios.get(url)
      .then(result => {
          store.projects = result.data.data;
          this.links = result.data.links;
        })
      },
    },

    mounted() {
      this.getApi(store.apiUrl + 'projects');
    }
}

</script>


<template>
  <ListProjects />
  <Paginator :links="links" @getUrl="getApi" />
</template>

<style lang="scss">

button{
  margin: 0 5px;
  padding: 10px;
  color: white;
  cursor: pointer;
}

</style>
