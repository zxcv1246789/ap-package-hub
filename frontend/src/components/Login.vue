<template>
<div>
  <b-form-input v-model="id" type="text" placeholder="Enter your name"></b-form-input>
  <b-form-input v-model="password"id="password" type="password"></b-form-input>
  <p>Value: {{ id }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      password: ''
    }
  }
}
</script>
