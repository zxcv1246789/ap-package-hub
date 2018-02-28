<template>
<div>
  <b-form-input v-model="id" type="text" placeholder="Enter your name"></b-form-input>
  <b-form-input v-model="password" id="password" type="password"></b-form-input>
  <p>Value: {{ id }}</p>
  <b-button v-on:click="submitlogin()">로그인</b-button>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    submitlogin() {
      let data = new Object();
      data.id = this.id;
      data.password = this.password;

      axios.post('http://39.119.118.152:3000/login_check', data)
        .then(function() {
          console.log('SUCCESS!!');
        })
        .catch(function() {
          console.log('FAILURE!!');
        });


    },
    //Handles a change on the file upload
    handleFileUpload() {
      //this.file = this.$refs.file.files[0];
    }
  }
}
</script>
