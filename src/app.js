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

import chai from 'chai'
const expect = chai.expect

import spies from 'chai-spies'
chai.use(spies)

//单元测试
{
    const Constructor = Vue.extend(button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#isettings')
    //销毁测试用例
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#iloading')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}

{
    // mock
    const Constructor = Vue.extend(button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    console.log(vm.$el);
    console.log(vm.$mount())
    vm.$mount()
    vm.$on('click', function () {
        console.log('1');
    })
    // 希望这个函数被执行
    console.log(vm.$el);
    let button = vm.$el
    button.click()
}

