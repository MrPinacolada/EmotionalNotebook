import { describe, it, expect } from 'vitest'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import MajorCalendarComponentVue from '@/components/CalendarModule/MajorCalendarComponent.vue'
import EmotionalCircleCalendarVue from '@/components/CalendarModule/EmotionalCircleCalendar.vue'
import UserPopUpCalendarVue from '@/components/CalendarModule/UserPopUpCalendar.vue'
import MajorHeaderComponentVue from '@/components/HeaderModule/MajorHeaderComponent.vue'
import MajorLeftBarComponentVue from '@/components/LeftBarModule/MajorLeftBarComponent.vue'
import AppVue from '@/App.vue'
describe('test itself', () => {
  it('test itself', () => {
    expect(1 + 1).toBe(2)
  })
})
describe('mountTest', () => {
  it('test App', () => {
    const app = createApp(AppVue)
    const wrapper = mount(app)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('test major view', () => {
    const app = createApp(MajorCalendarComponentVue)
    const wrapper = mount(app)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('test custom component', () => {
    const app = createApp(EmotionalCircleCalendarVue)
    const wrapper = mount(app)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('test custom component', () => {
    const app = createApp(UserPopUpCalendarVue)
    const wrapper = mount(app)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('test custom component', () => {
    const app = createApp(MajorHeaderComponentVue)
    const wrapper = mount(app)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('test custom component', () => {
    const app = createApp(MajorLeftBarComponentVue)
    const wrapper = mount(app)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
