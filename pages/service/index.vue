<template>
  <section>
    <h1>SERVICE</h1>
  </section>
</template>

<script>
  export default {
    name: 'index.vue',
    data () {
      return {
        meta: {
          title: 'SERVICE | Hakuhodo Marketing Systems',
          description: 'Service Page Description',
          type: 'article',
          url: 'http://13.231.174.83:4000/service/',
          image: 'http://13.231.174.83:4000/og-service.png',
        },
      }
    },
    head () {
      return {
        title: this.meta.title,
        meta: [
          { hid: 'description', name: 'description', content: this.meta.description },
          { hid: 'og:type', property: 'og:type', content: this.meta.type },
          { hid: 'og:title', property: 'og:title', content: this.meta.title },
          { hid: 'og:description', property: 'og:description', content: this.meta.description },
          { hid: 'og:url', property: 'og:url', content: this.meta.url },
          { hid: 'og:image', property: 'og:image', content: this.meta.image },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    /*display: none;*/
  }
</style>
