import type { StoryObj, Meta } from '@storybook/react'
import { Card, CardProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },

  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
        incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
        assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
        facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
        recusandae facilis similique assumenda eum adipisci alias, incidunt rem
        veritatis quasi!
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '50%' }}>{Story()}</div>
      </div>
    ),
  ],
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
