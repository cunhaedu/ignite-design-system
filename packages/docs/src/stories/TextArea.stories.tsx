import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Placeholder',
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
