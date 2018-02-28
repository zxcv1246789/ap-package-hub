<template>
<div>
  <b-form-input v-model="id" type="text" placeholder="Enter your name"></b-form-input>
  <b-form-input v-model="password" id="password" type="password"></b-form-input>
  <p>Value: {{ id }}</p>
  <b-button v-on:click="submitlogin()">로그인</b-button>
</div>
</template>

<script>
const data = new Object();

export default {
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    submitlogin() {
      let tmp = new Object();
      tmp.id = this.id;
      tmp.password = this.password;

      console.log(tmp);
    },
    //Handles a change on the file upload
    handleFileUpload() {
      //this.file = this.$refs.file.files[0];
    }
  }
}
</script>
