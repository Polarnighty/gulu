import Vue from 'vue'
import button from './button'
import icon from './icon'

Vue.component('g-button', button)
Vue.component('g-icon', icon)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,

    }
})
