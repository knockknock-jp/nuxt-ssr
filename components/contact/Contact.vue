<template>
  <section id="contact" class="container">
    <div class="box">
      <h1 class="heading">CONTACT</h1>
      <p class="paragraph">弊社のサービスや採用についてのお問い合わせはこちら</p>
      <dl class="list">
        <dt>メールでのお問い合わせはこちら</dt>
        <dd><a class="link" href="mailto:anfragen@hakuhodo-ms.co.jp">anfragen@hakuhodo-ms.co.jp</a></dd>
      </dl>
      <dl class="list">
        <dt>お電話でのお問い合わせはこちら</dt>
        <dd>03-6411-7775</dd>
      </dl>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'Contact.vue',
      mounted() {
        const scene = this.$scrollmagic
          .scene({
            triggerElement: '#contact',
            triggerHook: 0,
            duration: 2000,
            reverse: true,
          })
          .setPin("#contact")
          .setTween('#contact', {
            css: {
              transform: 'scale(1.2)',
            }
          })
          .on('update', (e)=> {
            if (e.startPos <= e.scrollPos &&  e.scrollPos - window.innerHeight < e.endPos) {
              this.$store.commit('scene/change', 'contact');
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
  .list {
    margin-top: 30px;
    & > dt {
    }
    & > dd {
      display: inline-block;
      margin-top: 10px;
      padding: 0.5em 1em;
      border-radius: 5px;
      font-size: 24px;
      color: #333;
      background-color: #eee;
    }
  }
  .link {
    color: #333;
    text-decoration: none;
  }
  #contact {
    transform: scale(1);
  }
</style>
