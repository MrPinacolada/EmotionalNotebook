import { describe, it, expect } from 'vitest'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import MajorCalendarComponentVue from '@/components/CalendarModule/MajorCalendarComponent.vue'

describe('class testing', () => {
  it('calendar container', async () => {
    const app = createApp(MajorCalendarComponentVue)
    const wrapper = mount(app)
    expect(wrapper.findComponent('.calendar-container')).toBeTruthy()
    // expect(wrapper.classes("calendar-container")).toBe(true);
  })
})
