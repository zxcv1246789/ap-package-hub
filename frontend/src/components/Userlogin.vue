<template>
<div>
  <b-button v-on:click="googleloginbtn()">Google 로그인</b-button>
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
    googleloginbtn() {
      let data = new Object();
      data.id = this.id;
      data.password = this.password;

      axios.get('http://raspapadmin.chickenkiller.com:3000/api/auth/google', {
          headers: {
            'Access-Control-Allow-Origin' : '*'
          }
        })
        .then((response) => {

        })
    },
    //Handles a change on the file upload
    handleFileUpload() {
      //this.file = this.$refs.file.files[0];
    }
  }
}
</script>
