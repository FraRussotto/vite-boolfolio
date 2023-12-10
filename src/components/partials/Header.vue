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
<style lang="scss" scoped>
header{
  width: 100%;
  height: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  ul{
    display: flex;
    text-decoration: none;
    list-style-type: none;
    li{
      margin: 0 20px;
    }
  }
}

.active {
  font-weight: bold;
}

</style>