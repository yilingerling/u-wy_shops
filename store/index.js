import Vue from 'vue'
import Vuex from "vuex"

import index from "../pages/index/index.vue"


Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		index
	}
})