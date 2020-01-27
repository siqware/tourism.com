/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);

import user from './modules/user'
import tour_destination from './modules/tour-destination/tour_destination'
import gallery from './modules/gallery/gallery'
import gallery_detail from './modules/gallery-detail/gallery_detail'
export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        user, tour_destination, gallery, gallery_detail
    }
})
