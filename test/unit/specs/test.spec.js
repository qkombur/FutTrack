// import Vue from 'vue'
import FixtureCard from '@/components/FixtureCard.vue'

describe('FixtureCard', () => {
  it('sets the correct default data', () => {
    const defaultData = FixtureCard.data()
    expect(defaultData.formatedDate).to.equal('')
    expect(defaultData.search).to.equal('')
  })

  it('should filter dates', () => {
    const dateFilter = FixtureCard.filter('formatDate')
    expect(dateFilter('2017-08-13T12:30:00Z').to.equal('7/13/2017'))
  })
})
