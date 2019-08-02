<template>
  <div class="home">
    
    <h1>{{article.description}}</h1>
    <data>{{article.created_date | formatDate}}</data>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  data: function(){
    return {
      article: {}
    }
  },
  components:{
    
  },
  mounted(){
    let id = this.$route.params.id;
    console.log(id)
    axios.get('http://localhost:4000/articles/'+ id)
      .then((data)=> {
        console.log(data)
        this.article = data.data
      })
      .catch(()=>{
        this.$router.push("/");
      })
  }
}
</script>