<template>
<div class="upload_dev">
  <!-- Styled -->
  <b-form-file type="file" id="file" ref="file" v-model="file" :state="Boolean(file)" v-on:change="handleFileUpload()" placeholder="Choose a file..."></b-form-file>
  <div class="mt-3">Selected file: {{file && file.name}}</div>
  <b-button v-on:click="submitFile()">파일 업로드</b-button>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null
    }
  },
  methods: {
    submitFile() {
      if (this.file != null) {
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
      }else {
        alert("파일을 선택해주세요.");
      }
    },
    //Handles a change on the file upload
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
}
</script>
<style>
.upload_dev {
  padding: 24px;
}
</style>
