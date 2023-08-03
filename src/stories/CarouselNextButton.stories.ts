import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '..'

const meta = {
  title: 'Arc Carousel/Components/NextButton',
  component: Carousel.NextButton,
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
} satisfies Meta<typeof Carousel.NextButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'default',
  },
}
