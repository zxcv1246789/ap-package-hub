<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
const items = new Array();

export default {
  created() {
    axios.get('http://39.119.118.152:3000/api/package')
      .then((response) => {
        console.log(response.data);
      })
  },
  data () {
    return {
      items: items
    }
  }
}
</script>
