import { Carousel } from 'arc-carousel'
import 'arc-carousel/styles.css'

export default function CarouselSimple({ images }) {
  return (
    <Carousel.Root
      className="relative my-12"
      slidesPerPage={{ base: 1, md: 2, lg: 3 }}
      gap={8}
      hasLoop
    >
      <Carousel.Wrapper>
        {images.map((image) => (
          <Carousel.Slide className="!mt-0" key={image.src}>
            <img src={image.src} alt={image.alt} className="w-full h-full" />
          </Carousel.Slide>
        ))}
      </Carousel.Wrapper>

      <div className="flex items-center justify-center gap-4">
        <Carousel.PrevButton className="w-8 h-8 text-accent-600 hover:text-accent-600/60 dark:text-accent-200 dark:hover:text-accent-200/60 bg-transparent cursor-pointer !mt-0" />

        <Carousel.Pagination
          className="justify-center gap-2 !mt-0"
          render={(index) => (
            <Carousel.PaginationItem
              key={index}
              index={index}
              className="w-2 h-2 rounded-full appearance-none cursor-pointer bg-accent-600/50 hover:bg-accent-600/60 checked:bg-accent-600 dark:bg-accent-200/30 dark:hover:bg-accent-200/60 dark:checked:bg-accent-200"
            />
          )}
        />

        <Carousel.NextButton className="w-8 h-8 !mt-0 cursor-pointer bg-transparent text-accent-600 hover:text-accent-600/60 dark:text-accent-200 dark:hover:text-accent-200/60" />
      </div>
    </Carousel.Root>
  )
}
