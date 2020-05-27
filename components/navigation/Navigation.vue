<template>
  <ul class="list">
    <li>
      <a class="link" v-on:click.prevent="clickHandler('top')" v-bind:class="scene === 'top' ? 'active' : ''">TOP</a>
      <!--<nuxt-link class="link" to="/" exact>TOP</nuxt-link>-->
    </li>
    <li>
      <a class="link" v-on:click.prevent="clickHandler('concept')" v-bind:class="scene === 'concept' ? 'active' : ''">CONCEPT</a>
      <!--<nuxt-link class="link" to="/concept/" @on:click="console.log('test')">CONCEPT</nuxt-link>-->
    </li>
    <li>
      <a class="link" v-on:click.prevent="clickHandler('service')" v-bind:class="scene === 'service' ? 'active' : ''">SERVICE</a>
      <!--<nuxt-link class="link" to="/service/">SERVICE</nuxt-link>-->
    </li>
    <li>
      <a class="link" v-on:click.prevent="clickHandler('company')" v-bind:class="scene === 'company' ? 'active' : ''">COMPANY</a>
      <!--<nuxt-link class="link" to="/company/">COMPANY</nuxt-link>-->
    </li>
    <li>
      <a class="link" v-on:click.prevent="clickHandler('access')" v-bind:class="scene === 'access' ? 'active' : ''">ACCESS</a>
      <!--<nuxt-link class="link" to="/access/">ACCESS</nuxt-link>-->
    </li>
    <li>
      <a class="link" v-on:click.prevent="clickHandler('contact')" v-bind:class="scene === 'contact' ? 'active' : ''">CONTACT</a>
      <!--<nuxt-link class="link" to="/contact/">CONTACT</nuxt-link>-->
    </li>
  </ul>
</template>

<script>
    export default {
      name: 'Navigation.vue',
      methods: {
        clickHandler: function(path) {
          this.$scrollmagic.scrollTo('#' + path);
          // this.$store.commit('scene/change', path);
        }
      },
      computed: {
        scene: function() {
          return this.$store.state.scene.scene;
        }
      },
    }
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    justify-content: center;
    background-color: #fff;
    border-bottom: solid 1px #ccc;
    & > li {
      min-width: 150px;
    }
  }
  .link {
    display: block;
    padding: 1em;
    color: #000;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    &.active {
      color: #fff;
      background-color: #333;
    }
    /*&.nuxt-link-active {*/
    /*  color: #fff;*/
    /*  background-color: #333;*/
    /*}*/
  }
</style>
