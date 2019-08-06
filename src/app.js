import Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'

Vue.component('g-button', button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', buttonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,

    }
})
