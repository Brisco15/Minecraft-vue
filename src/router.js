import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Header from './components/Header.vue'
import side_menu from './components/side_menu.vue'
import donations from './components/donations.vue'
import menu from './components/menu.vue'
import servers from './components/servers.vue'
import our_team from './components/our_team.vue'
import about_games from './components/about_games.vue'
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
import ArticlesPage from './views/ArticlesPage.vue'
import FullArticle from './views/FullArticle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Article',
      name: 'Article',
      component: ArticlesPage
    },
    {
      path: '/Article/:id',
      name: 'Article',
      component: FullArticle

    },
    {
      path: '/about_games',
      name: 'about_games',
      component: about_games
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/servers',
      name: 'servers',
      component: servers
    },
    {
      path: '/donations',
      name: 'donations',
      component: donations
    },
    {
      path: '/our_team',
      name: 'our_team',
      component: our_team
    },
    {
      path: '/minecraft_world',
      name: 'minecraft_world',
      component: minecraft_world
    },
    {
      path: '/blocks',
      name: 'blocks',
      component: blocks
    },
    {
      path: '/mobi',
      name: 'mobi',
      component: mobi
    },
    {
      path: '/structures',
      name: 'structures',
      component: structures
    },
    {
      path: '/biombi',
      name: 'biombi',
      component: biombi
    },
    {
      path: '/worlds',
      name: 'worlds',
      component: worlds
    },
    {
      path: '/Industrial_craft',
      name: 'Industrial_craft',
      component: Industrial_craft
    },
    {
      path: '/Optfine',
      name: 'Optfine',
      component: Optfine
    },
    {
      path: '/Forge',
      name: 'Forge',
      component: Forge
    },
    {
      path: '/tooManyItems',
      name: 'tooManyItems',
      component: tooManyItems
    },
    {
      path: '/RailCraft',
      name: 'RailCraft',
      component: RailCraft
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
