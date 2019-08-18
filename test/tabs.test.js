const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/tabs'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('tabs', () => {
    it('存在.', () => {
        expect(tabs).to.be.ok
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#isettings')
        vm.$destroy()
    })
}
