import {
  TEST
} from './mutation-types.js'

export default {
  [TEST] (state, v) {
    state.test = v
  }
}
