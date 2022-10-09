import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    prefix: '',
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    prefix: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefix/',
    placeholder: '',
  },
}
