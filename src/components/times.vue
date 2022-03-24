<template>
    <div>
        <div class="container">
          <p>gfhfghf</p>
          {{news.text}}
        </div>
   
    </div>
</template>
<script>
export default {
    name: "News",
    data() {
        return {
            errors:[],
            image:"",
             id: 1,
            name: "",
             text: "",
             urlNews: "http://localhost:3001/news"
            
        }
    },
      async created() {
    try {
      const takeData = await fetch(this.urlNews);
      const result = await takeData.json();
      this.news.push(...result);
      console.log(this.news);
    } catch (error) {
      this.errors.push(error);
    }
  },
}
</script>