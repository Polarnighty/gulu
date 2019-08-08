import Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'
import input from './input'
import collapse from './collapse'
import collapseitem from './collapse-item'


Vue.component('g-button', button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', buttonGroup)
Vue.component('g-input', input)
Vue.component('g-collapse', collapse)
Vue.component('g-collapse-item', collapseitem)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    },
})
