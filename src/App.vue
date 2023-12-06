<script>

import { store } from './data/store';
import axios from "axios";

export default{
  name: 'App',
  data(){
    return {
      message: 'Hello Vue!'
    }
  },

    methods: {
      getApi() {
        axios.get(store.apiUrl + 'projects')
      .then(result => {
          console.log(result.data);
        })
      }
    },

    mounted() {
      this.getApi();
    }
}

</script>

<template>

  

</template>

<style lang="scss">


</style>
