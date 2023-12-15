import { Carousel } from 'arc-carousel'
import 'arc-carousel/styles.css'

export default function CarouselProgress({ images }) {
  return (
    <Carousel.Root
      className="relative h-48 mt-12 mb-32 md:mb-40 md:mx-20 lg:mx-40 md:h-96"
      transition="fade"
      autoplay
      hasLoop
    >
      <Carousel.Wrapper className="shadow-lg shadow-gray-950/70">
        {images.map((image) => (
          <Carousel.Slide className="!mt-0" key={image.src}>
            <img src={image.src} alt={image.alt} className="w-full h-full" />
          </Carousel.Slide>
        ))}
      </Carousel.Wrapper>

      <div className="flex items-center justify-center w-full gap-4">
        <Carousel.Progress
          className="[&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-moz-progress-bar]:rounded-full [&::-moz-progress-value]:rounded-full
            [&::-webkit-progress-bar]:bg-accent-600/30 [&::-webkit-progress-value]:bg-accent-600 dark:[&::-webkit-progress-bar]:bg-accent-200/30 dark:[&::-webkit-progress-value]:bg-accent-200
          [&::-moz-progress-bar]:bg-accent-600/30 [&::-moz-progress-value]:bg-accent-600 dark:[&::-moz-progress-bar]:bg-accent-200/30 dark:[&::-moz-progress-value]:bg-accent-200"
        />
        <Carousel.PlayPauseButton className="!mt-0 p-2 bg-transparent cursor-pointer text-accent-600 hover:text-accent-600/60 dark:text-accent-200 dark:hover:text-accent-200/60" />
      </div>
    </Carousel.Root>
  )
}
