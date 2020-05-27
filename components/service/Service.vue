<template>
  <section id="service" class="container">
    <div class="box">
      <h1 class="heading">SERVICE</h1>
      <p class="paragraph">クリエイティブ×統合プロデュース×エンジニアリングで、<br/>
        デジタルマーケティングの仕組みつくりと施策実践をワンストップで提供します。</p>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'Service.vue',
      mounted() {
        const scene = this.$scrollmagic
          .scene({
            triggerElement: '#service',
            triggerHook: 0,
            duration: 2000,
            reverse: true,
          })
          .setPin("#service")
          .setTween('#service', {
            css: {
              transform: 'scale(1.2)',
            }
          })
          .on('update', (e)=> {
            if (e.startPos <= e.scrollPos &&  e.scrollPos - window.innerHeight < e.endPos) {
              this.$store.commit('scene/change', 'service');
            }
          });
        this.$scrollmagic.addScene(scene);
      },
    }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
  }
  .heading {
    font-size: 40px;
    line-height: 1em;
  }
  .paragraph {
    margin-top: 50px;
    font-size: 20px;
    line-height: 1.5em;
  }
  #service {
    transform: scale(1);
  }
</style>
