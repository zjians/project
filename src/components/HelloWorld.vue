<template>
  <div class="hello">
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {TEST} from '../store/mutation-types'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'test'
    ])
  },
  methods: {
    ...mapMutations([
      TEST
    ])
  },
  mounted () {
    this[TEST](Math.random())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
