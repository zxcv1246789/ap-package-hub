<template>
<div>
  <b-button href="http://raspapadmin.chickenkiller.com:3000/auth/google">Google 로그인</b-button>
  <b-button href="http://raspapadmin.chickenkiller.com:3000/auth/facebook">Facebook 로그인</b-button>
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

      axios.get('http://raspapadmin.chickenkiller.com:3000/auth/google', {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Credentials' : true,
            'Content-Type': 'application/json'
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
