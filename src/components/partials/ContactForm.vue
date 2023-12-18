<script>

import axios from 'axios';
import { store } from '../../data/store';

  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        message: '',
        success: false,
        errors: {
          name:[],
          email: [],
          message: []
        }
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
            this.success = response.data.success;
            if(!this.success){
              this.errors = response.data.errors;
            }
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
    <form v-if="!success" @submit.prevent="sendForm()">

      <div class="section">
        <label class="my-2" for="name">Name</label>
        <input v-model="name" type="text" name="name" id="name">
        <span v-for="error in errors.name" :key="error" class="error">{{error}}</span>
      </div>

      <div class="section">
        <label class="my-2" for="email">Email</label>
        <input v-model="email" type="text" name="email" id="email">
        <span v-for="error in errors.email" :key="error" class="error">{{error}}</span>
      </div>

      <div class="section">
        <label class="my-2" for="message">Message</label>
        <textarea v-model="message" type="text" name="message" id="message"></textarea>
        <span v-for="error in errors.message" :key="error" class="error">{{error}}</span>
      </div>

      <button type="submit" class="btn btn-warning">Invia</button>

    </form>
    <p v-else>Inviata!</p>
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
  .error{
    color: red;
  }
}
</style>