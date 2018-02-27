<template>
<div class="movies">
  <h1>영화 목록123</h1>
  <div v-for="movie in movies" class="movie">
    <img v-bind:src="movie.poster" class="poster">
    <div>
      <strong>{{ movie.name }}</strong>, <i>{{movie.director}}</i> [{{movie.year}}]
      <router-link :to="{ name: 'show', params: { id: movie.id }}">더보기</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  created() {
    this.$http.get('/api/movies')
      .then((response) => {
        this.movies = response.data
        console.log(this.movies);
      })
  },
  data() {
    return {
      movies: []
    }
  }
}
</script>

<style>
.movie {
  float: left;
  width: 200px;
}
.poster {
  width: 185px;
  height: 260px;
}
</style>
