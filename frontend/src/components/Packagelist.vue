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
        if (response.data != '') {
          console.log(response.data);
          var tmp = new Array();
          var install_data_key = Object.getOwnPropertyNames(response.data);
          for (var j = 0; j < Object.keys(response.data).length; j++) {
            tmp.push(response.data[install_data_key[j]]);
          }
          this.items = tmp;
        }
        else {
          alert("로그인 해주세요.");
        }
      })
  },
  data() {
    return {
      items: items
    }
  }
}
</script>
