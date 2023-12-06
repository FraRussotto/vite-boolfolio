<script>

  export default {
    name: 'Paginator',
    props: {
      links: Array,
    },

    data() {
      return {
      }
    },

    computed: {},

    mounted() {},

    methods: {
      getUrl(linkUrl) {
        this.$emit('getUrl', linkUrl)
      },
    }
  }
</script>


<template>
    <button>--</button>
    <button v-for="link in links" :key="link.label" v-html="link.label" :disabled="link.active || !link.url" @click="getUrl(link.url)"></button>
    <button>--</button>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>