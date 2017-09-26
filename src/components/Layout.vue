<template>
  <div class="layout">

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
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
