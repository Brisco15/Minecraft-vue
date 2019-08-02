<template lang="pug">
  <div class="home">
    
    .wrapper
      .row
        .column-laptop-1-3
    ArticleListing

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


import ArticleListing from '../components/ArticleListing.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    
    ArticleListing
  }
}
</script>
