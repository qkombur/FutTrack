import Vue from 'vue'
import FixtureCard from '@/components/FixtureCard'

describe('FixtureCard.vue', () => {
  it('should get json', () => {
    const Constructor = Vue.extend(FixtureCard)
    const vm = new Constructor().$mount()
    expect(vm.$data).to.equal(vm.$data.search)
  })
})
