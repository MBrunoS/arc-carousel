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
    children: [
      <Carousel.Slide className="flex items-center justify-center p-4 text-black bg-indigo-200">
        SLIDE 1
      </Carousel.Slide>,
      <Carousel.Slide className="flex items-center justify-center p-4 text-black bg-indigo-200">
        SLIDE 2
      </Carousel.Slide>,
      <Carousel.Slide className="flex items-center justify-center p-4 text-black bg-indigo-200">
        SLIDE 3
      </Carousel.Slide>,
    ],
    variant: 'default',
  },
}
