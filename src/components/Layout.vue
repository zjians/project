<template>
  <div class="layout">
  layout
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import BScroll from 'better-scroll'
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
      this.$http.get('/banner').then(res => {
        this.bans = res.data.banners;
      }
      ).catch(err => {
        console.dir(err)
      }
        );
    },
    mounted () {


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
