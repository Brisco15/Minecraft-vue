<template lang="pug">
  #articles_page
    
    ArticleListing(:limit="2" :paginate="true")

</template>
<script>
  
  import ArticleListing from '../components/ArticleListing.vue'
  export default{
    components: {
      ArticleListing
      
    }
  }
</script>