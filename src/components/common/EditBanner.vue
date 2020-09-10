<template>
  <div class="edit-wrapper" @click="bannerClick">
    <span>{{ left }}</span>
    <span><slot name='right' /></span>
  </div>
</template>

<script>
export default {
  props: ['left'],
  methods: {
    bannerClick () {
      this.$emit('bannerClick')
    }
  }
}
</script>

<style scoped lang="less">
.edit-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 0.278vw solid #fafafa;
  span {
    padding: 2.778vw 3.333vw;
    font-size: 3.889vw;
    color: #505050;
  }
}
</style>
