<template>
  <div id="app">
    <router-view></router-view>
    <!--显示自己对应的组件，不影响全局-->
  </div>
</template>

<!--逻辑-->
<script>
export default {
	name: 'app'
}
</script>

<style scoped>

</style>
