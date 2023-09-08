import { Carousel } from '@mbrunos/arc-carousel'
import '@mbrunos/arc-carousel/styles.css'

function App() {
  return (
    <section className="h-screen p-4 lg:px-20 lg:py-10">
      <Carousel.Root variant="vertical">
        <Carousel.Wrapper>
          <Carousel.Slide className="flex items-center justify-center bg-indigo-300">
            SLIDE 1
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-indigo-400">
            SLIDE 2
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-indigo-300">
            SLIDE 3
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-indigo-400">
            SLIDE 4
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-indigo-300">
            SLIDE 5
          </Carousel.Slide>
        </Carousel.Wrapper>
      </Carousel.Root>
    </section>
  )
}

export default App
