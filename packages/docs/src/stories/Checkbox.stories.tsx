import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Placeholder',
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
