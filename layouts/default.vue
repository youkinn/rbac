<template>
  <div class="site">
    <header class="site-header">
      <site-header/>
    </header>
    <div class="site-content clearfix">
      <asile class="site-aside fl" ref="aside">
        <site-menu />
      </asile>
      <section class="site-main">
        <nuxt/>
      </section>
    </div>
  </div>
</template>

<script>
  import SiteHeader from '../components/layouts/header.vue'
  import SiteFooter from '../components/layouts/footer.vue'
  import SiteMenu from '../components/layouts/menu.vue'

  export default {
    components: {
      SiteHeader,
      SiteFooter,
      SiteMenu
    }
  }
</script>

<style lang="scss" scoped>
  .site-header {
    width: 100%;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #373d41;
  }
  
  .site-content {
    background-color: #fff;
    width: 100%;
    position: absolute;
    top: 50px;
    bottom: 0px;
    left: 0px;
  }
  
  .site-aside {
    position: fixed;
    padding-top: 35px;
    min-height: 100%;
    background-color: #333744;
  }
  .site-main {
    min-height: 100%;
    margin-left: 200px;
    padding: 30px;
  }
  
  .container {
    margin: 0;
    width: 100%;
    padding: 100px 0;
    text-align: center;
  }
  
  .button,
  .button:visited {
    display: inline-block;
    color: #3B8070;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #3B8070;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 45px;
  }
  
  .button:hover,
  .button:focus {
    color: #fff;
    background-color: #3B8070;
  }
  
  .title {
    color: #505153;
    font-weight: 300;
    font-size: 2.5em;
    margin: 0;
  }

</style>
