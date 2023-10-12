'use client'
import { Carousel } from 'arc-carousel'
import 'arc-carousel/styles.css'

function App() {
  return (
    <section className="h-screen p-4 lg:px-20 lg:py-10">
      <Carousel.Root
        className="flex flex-col items-center h-full gap-2"
        orientation="horizontal"
        slidesPerPage={1}
        initialPage={0}
        hasLoop
        transition="slide"
        transitionDuration={300}
        gap={0}
        onSlideClick={(index) => console.log('slide clicked', index)}
        onPageChange={(prevIndex, nextIndex) => console.log('page changed', prevIndex, nextIndex)}
        onPageChangeEnd={(index) => console.log('page change end', index)}
        autoplay
        autoplayInterval={3000}
      >
        <Carousel.Wrapper>
          <Carousel.Slide className="flex items-center justify-center bg-neutral-300">
            SLIDE 1
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-neutral-400">
            SLIDE 2
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-neutral-300">
            SLIDE 3
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-neutral-400">
            SLIDE 4
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-neutral-300">
            SLIDE 5
          </Carousel.Slide>
          <Carousel.Slide className="flex items-center justify-center bg-neutral-400">
            SLIDE 6
          </Carousel.Slide>
        </Carousel.Wrapper>

        <div className="flex items-center">
          <Carousel.PlayPauseButton className="p-1 text-neutral-600 hover:text-neutral-950 focus:text-neutral-950" />
          <Carousel.PrevButton className="p-1 text-neutral-600 hover:text-neutral-950 focus:text-neutral-950 disabled:cursor-not-allowed" />

          <Carousel.Pagination
            className="px-4"
            render={(index, isActive) => (
              <Carousel.PaginationItem
                key={index}
                index={index}
                className={
                  isActive
                    ? 'appearance-none w-2 h-2 m-1 bg-neutral-700 rounded-full hover:bg-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-950'
                    : 'appearance-none w-2 h-2 m-1 bg-neutral-500 rounded-full hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-700'
                }
              />
            )}
          />

          <Carousel.NextButton className="p-1 text-neutral-600 hover:text-neutral-950 focus:text-neutral-950 disabled:cursor-not-allowed" />
        </div>
      </Carousel.Root>
    </section>
  )
}

export default App
