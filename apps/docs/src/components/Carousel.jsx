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
          <img src="https://picsum.photos/id/11/300" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/29/300" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/46/300" className="object-cover w-full" />
        </Carousel.Slide>

        <Carousel.Slide>
          <img src="https://picsum.photos/id/54/300" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/66/300" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/74/300" className="object-cover w-full" />
        </Carousel.Slide>

        <Carousel.Slide>
          <img src="https://picsum.photos/id/83/300" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/108/300" className="object-cover w-full" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="https://picsum.photos/id/114/300" className="object-cover w-full" />
        </Carousel.Slide>
      </Carousel.Wrapper>

      <div className="absolute bottom-1 left-1">
        <Carousel.PlayPauseButton className="p-2 text-white bg-black/50" />
      </div>
    </Carousel.Root>
  )
}
