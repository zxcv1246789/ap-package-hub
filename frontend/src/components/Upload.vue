<template>
<div>
  <!-- Styled -->
  <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
  <div class="mt-3">Selected file: {{file && file.name}}</div>

</div>
</template>

<script>
export default {
  data () {
    return {
      file: null
    }
  }
}
</script>
