<template>
  <section id="top" class="container">
    <div class="box">
      <h1 class="heading">HAKUHODO<br/>MARKETING<br/>SYSTEMS</h1>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {
      const scene = this.$scrollmagic
        .scene({
          triggerElement: '#top',
          triggerHook: 0,
          duration: 2000,
          reverse: true,
        })
      .setPin('#top')
      .setTween('#top', {
        css: {
          transform: 'scale(5)',
        }
      })
      .on('update', (e)=> {
        if (e.startPos <= e.scrollPos &&  e.scrollPos - window.innerHeight < e.endPos) {
          this.$store.commit('scene/change', 'top');
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
    font-size: 50px;
    line-height: 1.2em;
  }
  #top {
    transform: scale(1);
  }
</style>
