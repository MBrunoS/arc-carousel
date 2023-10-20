import { Carousel } from 'arc-carousel'
import 'arc-carousel/styles.css'

export default function MyCarousel() {
  return (
    <Carousel.Root
      className="relative mt-4"
      slidesPerPage={3}
      autoplay
      autoplayInterval={4000}
      hasLoop
    >
      <Carousel.Wrapper>
        <Carousel.Slide className="mt-6">
          <img src="https://picsum.photos/id/11/400" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/29/400" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/46/400" className="object-cover w-full" />
        </Carousel.Slide>

        <Carousel.Slide>
          <img src="https://picsum.photos/id/54/400" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/66/400" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/74/400" className="object-cover w-full" />
        </Carousel.Slide>

        <Carousel.Slide>
          <img src="https://picsum.photos/id/83/400" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/108/400" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/114/400" className="object-cover w-full" />
        </Carousel.Slide>
      </Carousel.Wrapper>

      <div className="absolute -bottom-1 left-1">
        <Carousel.PlayPauseButton className="p-2 text-gray-500 bg-transparent cursor-pointer hover:text-gray-400" />
      </div>

      <div className="flex items-center justify-center gap-4">
        <Carousel.PrevButton className="w-8 h-8 text-gray-500 bg-transparent cursor-pointer hover:text-gray-400 !mt-0" />

        <Carousel.Pagination
          className="justify-center gap-2 !mt-0"
          render={(index) => (
            <Carousel.PaginationItem
              key={index}
              index={index}
              className="w-3 h-3 bg-gray-800 rounded-full appearance-none cursor-pointer checked:bg-gray-500 checked:hover:bg-gray-400 hover:bg-gray-700"
            />
          )}
        />

        <Carousel.NextButton className="w-8 h-8 !mt-0 cursor-pointer bg-transparent text-gray-500 hover:text-gray-400" />
      </div>
    </Carousel.Root>
  )
}
