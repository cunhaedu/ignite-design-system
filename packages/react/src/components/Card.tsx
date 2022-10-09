import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Card = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export type CardProps = ComponentProps<typeof Card> & {
  as?: ElementType
}

Card.displayName = 'Card'
