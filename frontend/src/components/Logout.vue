<template>
<div>
  <b-button v-on:click="submitlogout()">로그아웃</b-button>
</div>
</template>

<script>
import axios from 'axios';
import VueRouter from 'vue-router'

export default {
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    submitlogout() {
      let data = new Object();
      data.id = this.id;
      data.password = this.password;

      axios.get('http://39.119.118.152:3000/logout')
        .then((response) => {
          alert("로그아웃 되었습니다.");
          VueRouter.push({ path: '/loginpage' });
        })


    }
  }
}
</script>
