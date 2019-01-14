<template>
  <html:video
      :controls="controls"
      :autoplay="autoplay"
      :loop="loop"
      :src="src"
      @play="onstart"
      @pause="onpause"
      @ended="onfinish"
      @error="onfail"
  />
</template>
<script>
 class Video implements VideoInterface {
    props = {
      controls: {
        type: Boolean,
        default: false
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      loop: {
        type: Boolean,
        default: false
      },
      src: {
        type: String,
        default: ''
      }
    }
    methods = {
      onstart (e) {
        this.$cmlEmit('start')
      },
      onpause (e) {
        this.$cmlEmit('pause')
      },
      onfinish (e) {
        this.$cmlEmit('finish')
      },
      onfail (e) {
        this.$cmlEmit('fail')
      }
    }
  }
  export default new Video();
</script>
<style scoped>
</style>