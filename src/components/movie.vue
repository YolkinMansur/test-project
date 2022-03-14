<template>
  <div class="bg-black text-white">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="block">
          <h1 class="text-4xl font-semibold">{{ movies[curID].name }}</h1>
          <div class="flex border-t border-b border-gray-700 py-5 mt-5">
            <div>
              <h2 class="uppercase text-xl mb-3">Metascore</h2>
              <p class="w-3/5">Universal acclaim based on 16 Critic Reviews</p>
            </div>
            <div class="flex items-center">
              <img v-if="movies[curID].mustSee"
                class="w-16 mx-3"
                src="https://www.metacritic.com/images/icons/mc-mustsee.svg"
                alt=""
              />
              <p
                class="
                  mr-0
                  text-3xl
                  font-bold
                  px-1
                  py-3
                  bg-green-500
                  rounded-md
                "
              >
                {{ movies[curID].meta }}
              </p>
            </div>
          </div>
          <div class="flex justify-between items-start border-b border-gray-700 py-5">
            <div>
              <h2 class="uppercase text-xl mb-3">User Score</h2>
              <p class="w-3/5">Universal acclaim based on 16 Critic Reviews</p>
            </div>
            <div class="flex items-center">
              <p
                class="
                  mr-0
                  text-3xl
                  font-bold
                  px-1
                  py-3
                  bg-green-500
                  rounded-md
                "
              >
                {{ movies[curID].user }}
              </p>
            </div>
          </div>
        </div>
        <video muted autoplay :src="movies[curID].video"></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      movies: [],
      urlMovie: "http://localhost:3001/movies",
      movie: null,
      curID: this.$route.params.id - 1,
    };
  },
  async created() {
    try {
      const takeData = await fetch(this.urlMovie);
      const result = await takeData.json();
      this.movies.push(...result);
      console.log(this.movies);
    } catch (error) {
      this.errors.push(error);
    }
  },
  mounted() {
    const movie = this.movies.find(
      (movie) => movie.id == this.$route.params.id
    );
    if (movie) {
      this.movie = movie;
    }
  },
};
</script>