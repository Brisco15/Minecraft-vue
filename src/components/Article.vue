<template lang= "pug">

  mixin article(item)
    .article #{item}
      .article__top
        .article__date #{item.date}
          span {{article.created_date | formatDate}}
        .article__text #{item.text}

      .article__img 
        img(src=item.img alt="")   
  
</template>
<script >
  export default {
    props: ['article']
  }
</script>