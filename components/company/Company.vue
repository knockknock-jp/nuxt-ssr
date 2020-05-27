<template>
  <section id="company" class="container">
    <div class="box">
      <h1 class="heading">COMPANY</h1>
      <div class="box2">
        <dl class="list">
          <dt>社名</dt>
          <dd>株式会社  博報堂マーケティングシステムズ<br/>
            Hakuhodo Marketing Systems Inc.</dd>
        </dl>
        <dl class="list">
          <dt>設立</dt>
          <dd>2017年10月1日</dd>
        </dl>
        <dl class="list">
          <dt>事業内容</dt>
          <dd>企業のマーケティング活動の基盤となる情報システムの設計、開発および活用支援</dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'Company.vue',
      mounted() {
        const scene = this.$scrollmagic
          .scene({
            triggerElement: '#company',
            triggerHook: 0,
            duration: 2000,
            reverse: true,
          })
          .setPin("#company")
          .setTween('#company', {
            css: {
              transform: 'scale(1.2)',
            }
          })
          .on('update', (e)=> {
            if (e.startPos <= e.scrollPos &&  e.scrollPos - window.innerHeight < e.endPos) {
              this.$store.commit('scene/change', 'company');
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
  .box2 {
    margin-top: 50px;
  }
  .list {
    display: table;
    margin: 30px auto 0 auto;
    width: 600px;
    & > dt {
      display: table-cell;
      text-align: left;
      vertical-align: top;
      width: 100px;
    }
    & > dd {
      display: table-cell;
      text-align: left;
      vertical-align: top;
      font-size: 20px;
    }
  }
  #company {
    transform: scale(1);
  }
</style>
