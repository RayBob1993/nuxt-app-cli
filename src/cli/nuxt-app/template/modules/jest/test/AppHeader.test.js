import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(AppHeader)
})

afterEach(() => {
  wrapper.destroy()
})

describe('AppHeader.vue', () => {
  test('Является экземпляром Vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Рендер прошёл успешно', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
