<script>

import axios from 'axios';
import { store } from '../../data/store';

  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    computed: {},
    mounted() {},
    methods: {
      sendForm(){
        console.log('form inviato');
        const data = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        console.log(store.apiUrl);
        axios.post(store.apiUrl + 'send-mail', data)
          .then(response =>{
            console.log(response.data);
          })
          .catch(error =>{
            console.log(error);
          })
      }
    }
  }
</script>

<template>
  <div>
    <form @submit.prevent="sendForm()">

      <div class="section">
        <label class="my-2" for="name">Name</label>
        <input v-model="name" type="text" name="name" id="name">
      </div>
      <div class="section">
        <label class="my-2" for="email">Email</label>
        <input v-model="email" type="text" name="email" id="email">
      </div>
      <div class="section">
        <label class="my-2" for="message">Message</label>
        <textarea v-model="message" type="text" name="message" id="message"></textarea>
      </div>

      <button type="submit" class="btn btn-warning">Invia</button>

    </form>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
label{
  margin-right: 10px;
}
.section{
  margin: 10px auto;
  label{
    display: block;
  }
}
</style>