<template>
  <div class="layout">
    <button @click="handleToast">click me</button>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import BScroll from 'better-scroll'
  import { Toast } from 'mint-ui'
  export default {
    name: 'Layout',
    data () {
      return {
        bans: []
      }
    },
    computed: {
      ...mapState([

      ])
    },
    beforeCreate () {
      // this.$http.get('/banner').then(res => {
      //   this.bans = res.data.banners;
      // }
      // ).catch(err => {
      //   console.dir(err)
      // }
      //   );
    },
    methods: {
      handleToast () {
        Toast({
          message: '操作button',
          position: 'top',
          duration: 2000
        })
      }
    },
    mounted () {


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
