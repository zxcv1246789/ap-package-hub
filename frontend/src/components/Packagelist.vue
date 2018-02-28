<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
import axios from 'axios';

const items = new Array();

export default {
  created() {
    axios.get('http://39.119.118.152:3000/api/package')
      .then((response) => {
        console.log(response.data);
        var install_data_key = Object.getOwnPropertyNames(response.data);
        for (var j = 0; j < Object.keys(response.data).length; j++) {
          this.items.push(response.data[install_data_key[j]]);
        }
        console.log(this.items);
      })
  },
  data () {
    return {
      items: items
    }
  }
}
</script>
