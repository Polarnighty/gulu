import Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'
import input from './input'
import collapse from './collapse'
import collapseitem from './collapse-item'
import row from './row'
import col from './col'
import layout from  './layout'
import content from  './content'
import footer from  './footer'
import sider from  './sider'
import header from  './header'

Vue.component('g-button', button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', buttonGroup)
Vue.component('g-input', input)
Vue.component('g-collapse', collapse)
Vue.component('g-collapse-item', collapseitem)
Vue.component('g-row', row)
Vue.component('g-col', col)
Vue.component('g-layout', layout)
Vue.component('g-header', header)
Vue.component('g-footer', footer)
Vue.component('g-sider', sider)
Vue.component('g-content', content)

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
