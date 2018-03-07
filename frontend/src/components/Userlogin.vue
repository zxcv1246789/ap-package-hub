<template>
<div>
  <b-button v-on:click="facebookloginbtn()">facebook 로그인</b-button>
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
    facebookloginbtn() {
      let data = new Object();
      data.id = this.id;
      data.password = this.password;

      axios.get('http://39.119.118.152:3000/api/auth/google')
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
