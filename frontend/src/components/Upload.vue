<template>
<div>
  <!-- Styled -->
  <b-form-file v-model="file" :state="Boolean(file)"></b-form-file>
  <div class="mt-3">Selected file: {{file && file.name}}</div>
  <h1>카운터: {{ number }}</h1>
  <button @click="increment">증가</button>
  <button @click="decrement">감소</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      number: 0
    }
  },
  methods: {
    increment: function() {
      this.number++;
    },
    decrement: function() {
      this.number--;
    }
  }
}
</script>
