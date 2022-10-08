import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio optio, impedit explicabo quos adipisci quod vel hic fuga dicta deserunt tenetur, totam, corporis doloremque vero quas. Laudantium, incidunt beatae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Text with custom tag',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Text é sempre um `p`, mas podemos sobrescrever com o `as`',
      },
    },
  },
}
