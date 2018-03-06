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

      axios.post('http://39.119.118.152:3000/login_check', data)
        .then(function(response) {
          console.log(response.data);
          if(response.data == false) {
            alert("아이디나 비밀번호가 일치하지 않습니다.");
          }
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
