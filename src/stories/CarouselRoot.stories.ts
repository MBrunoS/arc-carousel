import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '..'

const meta = {
  title: 'Arc Carousel/Components/Root',
  component: Carousel.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel.Root>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Children',
    variant: 'full',
  },
}
