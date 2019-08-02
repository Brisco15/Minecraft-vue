<template lang="pug">
  .wrapper
    .row
      .column-phablet-1-2.column-laptop-1-3.m-b-30(v-for="item in articles")
        Article(:article="item")
    Pagination(v-if="paginate" :pagination="{page: page, pages:pages}")
</template>
<script>
import axios from 'axios'
import Article from './Article.vue'
import Pagination from './Pagination.vue'
export default{
  props: ['limit', 'paginate'],
  components: {
    Article,
    Pagination
  },
  data: function(){
    return {
      page: 1,
      pages: 0,
      articles : [
        {
          date : '2016-04-17',
          text : 'Страж подводной крепости довольно сильный противник для начинащ'
        },
        {
          date : '2016-06-27',
          text : 'Встречайте: белые медведи в холодных биомах!'
        },
        {
          date : '2016-08-04',
          text : 'В мобильной версии теперь можно приручить кролика, он станет ве'
        }
      ]
    }
  },
  watch: {
     $route: function(){
        this.getArticles()
     }
  },
  methods:{
    getNews(){
      console.log(this.$route, 'route')
      var path = 'http://localhost:4000/articles'
      var params = `limit=${this.limit}`
      if(this.$route.query.page){
        params = [params, 'page='+this.$route.query.page].join('&')
      }
      if(this.limit){
        path = [path, params].join('?')
      }
      axios.get(path)
      .then((responce) => {
        console.log(responce)
        this.news = responce.data.docs
        this.page = responce.data.page
        this.pages = responce.data.totalPages
      })
      .catch((errors) => {
        console.log(errors)
      })
    }
  },
  mounted(){
    this.getArticles()
  }
}