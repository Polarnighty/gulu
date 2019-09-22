import Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'
import input from './input'
import collapse from './collapse'
import collapseitem from './collapse-item'
import row from './grid/row'
import col from './grid/col'
import layout from './layout/layout'
import content from './layout/content'
import footer from './layout/footer'
import sider from './layout/sider'
import header from './layout/header'
import toast from './toast'
import plugin from './plugin'
import tabs from './tabs/tabs'
import tabsItem from './tabs/tabs-item'
import tabsPine from './tabs/tabs-pane'
import tabsBody from './tabs/tabs-body'
import tabsHeader from './tabs/tabs-head'
import popover from './popover'

Vue.component('g-toast', toast)
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
Vue.component('g-tabs', tabs)
Vue.component('g-tabs-head', tabsHeader)
Vue.component('g-tabs-body', tabsBody)
Vue.component('g-tabs-item', tabsItem)
Vue.component('g-tabs-pane', tabsPine)
Vue.component('g-popover', popover)

Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        message: '',
        selectedTab: 'woman'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        },
        showToast() {
            this.$toast(`你的余额为 ${parseInt(Math.random() * 100)}你需要充钱`, {
                position: 'middle',
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
        },
    },
    created() {

    }
})