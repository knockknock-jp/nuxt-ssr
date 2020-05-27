<template>
  <div>
    <div class="bg"></div>
    <div ref="wrapper">
      <Top/>
      <Concept/>
      <Service/>
      <Company/>
      <Access/>
      <Contact/>
    </div>
    <div class="box">
      <Navigation/>
      <div class="box2">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
  import Top from "../components/top/Top";
  import Concept from "../components/concept/Concept";
  import Navigation from "../components/navigation/Navigation";
  import Service from "../components/service/Service";
  import Company from "../components/company/Company";
  import Access from "../components/access/Access";
  import Contact from "../components/contact/Contact";
  export default {
    components: {
      Top,
      Concept,
      Service,
      Navigation,
      Company,
      Access,
      Contact,
    },
    mounted() {
      this.$scrollmagic.scrollTo('#' + location.pathname.replace('/', ''));
      this.$scrollmagic.attachTo(this.$refs.wrapper);
    },
    computed: {
      scene: function() {
        return this.$store.state.scene.scene;
      }
    },
    watch: {
      scene: function(val, oldVal) {
        if (val === 'top') {
          this.$router.push({path: '/'})
        } else {
          this.$router.push({path: '/' + val})
        }
      }
    }

  }
</script>

<style lang="scss">
  @import 'reset-css';
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&display=swap');
  html {
  }
  body {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    color: #333;
    /*background-color: #fff;*/
  }
</style>
<style lang="scss" scoped>
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(./bg.png);
    background-size: cover;
    background-position: center;
    opacity: 0.5;
  }
  .box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .box2 {
    display: none;
  }
</style>
