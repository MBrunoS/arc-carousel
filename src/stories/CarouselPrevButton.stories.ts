import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '..'

const meta = {
  title: 'Arc Carousel/Components/PrevButton',
  component: Carousel.PrevButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'small', 'large'],
        default: 'default',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel.PrevButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'default',
  },
}
