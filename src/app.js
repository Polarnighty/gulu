import Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'
import input from './input'
import collapse from './collapse'
import collapseitem from './collapse-item'
import row from './row'
import col from './col'
import layout from './layout'
import content from './content'
import footer from './footer'
import sider from './sider'
import header from './header'
import toast from './toast'
import plugin from './plugin'

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
Vue.component('g-toast', toast)
Vue.use(plugin)

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
        },
        showToast() {
            this.$toast('I am Toast', {
                position: 'bottom',
                enableHtml: false,
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('用户知道了')
                    }
                },
                autoCloseDelay: 3,
                autoClose: true
            })
        }
    },
    created() {
        this.$toast('你需要充钱', {
            position: 'center',
            enableHtml: false,
            closeButton: {
                text: '已充值',
                callback() {
                    console.log('用户升级到心悦三')
                }
            },
            autoCloseDelay: 3,
            autoClose: false

        })
    }
})
