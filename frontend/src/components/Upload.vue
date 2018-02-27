<template>
<div>
  <!-- Styled -->
  <b-form-file v-model="file" :state="Boolean(file)"></b-form-file>
  <div class="mt-3">Selected file: {{file && file.name}}</div>
  <h1>카운터: {{ number }}</h1>
  <button @click="increment">증가</button>
  <button @click="decrement">감소</button>
  <button @click="file_upload">파일 업로드</button>
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
    },
    file_upload: function() {
      if (file != null) {
        this.$http.post(`http://39.119.118.152:3000/api/upload`, {
            body: this.file
          })
          .then(response => {})
          .catch(e => {
            this.errors.push(e);
          })
          console.log("업로드 성공");
      } else {
        console.log("업로드 실패");
      }
    }
  }
}
</script>
