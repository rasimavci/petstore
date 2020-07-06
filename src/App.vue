<template>
  <div id="app" :class="pageClass">

    <div class="wrapper">
        <router-view/>
    </div>
  </div>
</template>
<script>
// import Breadcrumbs from '@/components/Breadcrumbs'
export default {
  name: 'app',
/*   components: {
    Breadcrumbs
  },  */ 
  data () {
    return {
      display: false
    }
  },
  computed: {
  },
  watch: {
    $route () {
      let set = this.settings

    }
  }  
}
</script>
<style lang="scss">
  @import "assets/scss/bootstrap.min";
  @import "assets/scss/normalize";
  @import "assets/scss/helpers";
  @import "assets/scss/swiper";
//  @import "assets/scss/components/shapes";
//  @import "assets/scss/components/form";
  //fade


  .menuDisplay{
    display: none;
  }
</style>
