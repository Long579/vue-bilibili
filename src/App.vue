<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"/>
    </keep-alive>
      <router-view v-if="!$route.meta.keepalive"/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}
p {
  margin: 0;
}
</style>
