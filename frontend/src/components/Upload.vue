<template>
<div>
  <!-- Styled -->
  <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
  <div class="mt-3">Selected file: {{file && file.name}}</div>
  <h1>카운터: {{ number }}</h1>
  <button @click="increment">증가</button>
  <button @click="decrement">감소</button>
  <button v-on:click="submitFile()">파일 업로드</button>
</div>
</template>

<script>
import axios from 'axios';

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
    submitFile() {
      console.log(this.file);
              //Initialize the form data
      let formData = new FormData();
          //Add the form data we need to submit
      formData.append('package', this.file);
        //Make the request to the POST /single-file URL
      axios.post('http://39.119.118.152:3000/api/upload',
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function() {
          console.log('SUCCESS!!');
        })
        .catch(function() {
          console.log('FAILURE!!');
        });
    },
      //Handles a change on the file upload
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
}
</script>
