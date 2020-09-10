<template>
  <div class="btnBox">
    <div class="btn" @click="TextClick">{{ BtnText }}</div>
  </div>
</template>

<script>
export default {
  props: ['BtnText'],
  methods: {
    TextClick () {
      this.$emit('TextClick')
    }
  }
}
</script>

<style scoped lang="less">
.btnBox {
  padding: 5.556vw 2.778vw;
}
.btn {
  height: 12.5vw;
  text-align: center;
  line-height: 12.5vw;
  background-color: #ff9db5;
  border-radius: 6.389vw;
  font-size: 5vw;
  color: #fff;
}
</style>
