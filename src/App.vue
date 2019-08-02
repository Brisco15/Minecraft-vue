<template>
  <div id="app">
    <div id="nav">    
      <Header></Header>
      <side_menu></side_menu>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/Article">Article</router-link>
        
      </div>
      <div class="column-laptop-3-4">
      <div class="column-laptop-1-3">

        <router-view></router-view>

      </div>
      </div>
      <Footer></Footer>
    </div>
  
</template>
<script>
  import axios from 'axios'
  
  import Article from './components/Article.vue'
  import Header from './components/Header.vue'
  import side_menu from './components/side_menu.vue'
  import Footer from './components/Footer.vue'
  import about_games from './components/about_games.vue'
  import menu from './components/menu.vue'
  import servers from './components/servers.vue'
  import donations from './components/donations.vue'
  import our_team from './components/our_team.vue'
  import minecraft_world from './components/minecraft_world.vue'
  import blocks from './components/blocks.vue'
  import mobi from './components/mobi.vue'
  import structures from './components/structures.vue'
  import biombi from './components/biombi.vue'
  import worlds from './components/worlds.vue'
  import Industrial_craft from './components/Industrial_craft.vue'
  import Optfine from './components/Optfine.vue'
  import Forge from './components/Forge.vue'
  import tooManyItems from './components/tooManyItems.vue'
  import RailCraft from './components/RailCraft.vue'


  export default {
    name: 'app',
    components: {
      Header,
      side_menu,
      Footer,
      about_games,
      menu,
      our_team,
      servers,
      donations,
      minecraft_world,
      blocks,
      mobi,
      structures,
      biombi,
      worlds,
      Industrial_craft,
      Optfine,
      Forge,
      tooManyItems,
      RailCraft,
      Article
    },
     data: function(){
      return {
        Article : [
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
       mounted(){
          axios.get('http://localhost:4000/articles')
        .then((data)=>{
          
          this.article = data.data.docs
        })
        .catch((errors)=>{
          
        })
      }   
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
