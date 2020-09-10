<template>
  <div>
    <div class="detail" @click="push">
      <div style="height: 29.828vw" class="pic">
        <img :src="detailitem.img" style="width: 100%; height: 100%"/>
        <div class="count">
          <span class="left">
            <van-icon name="video-o" size="5vw" />
            <span class="number">2334万</span>
          </span>
          <span class="right">
            <van-icon name="comment-o" size="5vw" />
            <span class="number">{{ detailitem.commentlen }}万</span>
          </span>
        </div>
      </div>
      <p>{{ detailitem.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detailitem'],
  methods: {
    push () {
      if (this.$route.path !== `/article/${this.detailitem.id}`) {
        this.$router.push(`/article/${this.detailitem.id}`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  p {
    margin-top: 1.389vw;
    font-size: 3.333vw;
    color: #212121;
    overflow: hidden;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
  }
  .pic {
    position: relative;
    .count {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 1.667vw;
      width: 100%;
      height: 5.556vw;
      z-index: 1;
      color: #fff;
      background: linear-gradient(0deg, rgba(0,0,0, 0.85), transparent);
      .number {
        margin-left: 1.389vw;
        font-size: 12px;
        vertical-align: top;
      }
    }
  }
}
</style>
