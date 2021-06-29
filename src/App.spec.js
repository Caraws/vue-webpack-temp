import { shallowMount } from '@vue/test-utils'
import App from './App'

describe('gg', () => {
  it('test app', () => {
    const app = shallowMount(App)
    expect(app.html()).toContain('heise')
  })
})
