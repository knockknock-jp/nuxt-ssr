<template>
  <section id="access" class="container">
    <div class="box">
      <h1 class="heading">ACCESS</h1>
      <p class="paragraph">〒107-0052 東京都港区赤坂2-14-27 国際新赤坂ビル東館16階<br/>
        2-14-27 Akasaka, Minato-ku, Tokyo, 107-0052 Japan</p>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'Access.vue',
      mounted() {
        const scene = this.$scrollmagic
          .scene({
            triggerElement: '#access',
            triggerHook: 0,
            duration: 2000,
            reverse: true,
          })
          .setPin("#access")
          .setTween('#access', {
            css: {
              transform: 'scale(1.2)',
            }
          })
          .on('update', (e)=> {
            if (e.startPos <= e.scrollPos &&  e.scrollPos - window.innerHeight < e.endPos) {
              this.$store.commit('scene/change', 'access');
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
  #access {
    transform: scale(1);
  }
</style>
