import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, ref } from 'vue'

describe('Button test', () => {
  const SystemUnderTest = defineComponent({
    template: '<button @click="count++">Count: {{ count }}</button>',
    setup: () => {
      const count = ref(1)

      return {
        count,
      }
    },
  })

  test('Should have initial value to 0', async () => {
    const component = mount(SystemUnderTest)
    await expect(component.find('button').text()).toEqual('Count: 1')
  })
  test('Should increment counter on click', async () => {
    const component = mount(SystemUnderTest)

    await component.find('button').trigger('click')

    await expect(component.find('button').text()).toEqual('Count: 2')
  })
})
