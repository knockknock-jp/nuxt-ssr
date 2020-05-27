<template>
  <section id="concept" class="container">
    <div class="box">
      <h1 class="heading">CONCEPT</h1>
      <p class="paragraph">博報堂マーケティングシステムズは、<br/>
        デジタルマーケティングとデジタルトランスフォーメーション活動の<br/>
        「橋渡し」する会社です。</p>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'Concept.vue',
      mounted() {
        const scene = this.$scrollmagic
          .scene({
            triggerElement: '#concept',
            triggerHook: 0,
            duration: 2000,
            reverse: true,
          })
          .setPin("#concept")
          .setTween('#concept', {
            css: {
              transform: 'scale(1.2)',
            }
          })
          .on('update', (e)=> {
            if (e.startPos <= e.scrollPos &&  e.scrollPos - window.innerHeight < e.endPos) {
              this.$store.commit('scene/change', 'concept');
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
  #concept {
    transform: scale(1);
  }
</style>
