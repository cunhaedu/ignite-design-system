import type { StoryObj, Meta } from '@storybook/react'
import { HeadingProps, Heading } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },

  args: {
    children: 'Subtitle',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Title',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Heading é sempre um `h2`, mas podemos sobrescrever com o `as`',
      },
    },
  },
}
