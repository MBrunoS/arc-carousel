import { render, screen } from '@testing-library/react'
import { CarouselContext } from '@/context/CarouselContext'
import { CarouselProgress } from '@/components/CarouselProgress'
import { describe, expect, it, vi } from 'vitest'

describe('CarouselProgress', () => {
  const providerMockValue = {
    currentPage: 0,
    pagesCount: 2,
    slideCount: 2,
    slidesPerPage: 1,
    orientation: 'horizontal',
    next: vi.fn(),
    prev: vi.fn(),
    setCurrentPage: vi.fn(),
    initialPage: 0,
    hasLoop: false,
    transition: 'slide',
    transitionDuration: 150,
    gap: 0,
    autoplay: false,
    autoplayInterval: 3000,
    startAutoplay: vi.fn(),
    stopAutoplay: vi.fn(),
    isAutoplaying: false,
    isPaused: false,
    setIsPaused: vi.fn(),
  } as const

  it('should not render if pagesCount is less than or equal to 1', () => {
    render(
      <CarouselContext.Provider value={{ ...providerMockValue, pagesCount: 0, slideCount: 0 }}>
        <CarouselProgress />
      </CarouselContext.Provider>,
    )

    expect(screen.queryByRole('progressbar')).toBeNull()
  })

  it('should render with correct width if pagesCount is more than 1', () => {
    render(
      <CarouselContext.Provider value={providerMockValue}>
        <CarouselProgress />
      </CarouselContext.Provider>,
    )

    const progressBar = screen.getByRole('progressbar')
    expect(progressBar.style).toEqual(expect.objectContaining({ width: '50%' }))
  })

  it('should render custom progress bar if render prop is provided', () => {
    const renderProp = vi.fn((progress) => (
      <progress data-testid="custom-progress-bar">{progress}</progress>
    ))

    render(
      <CarouselContext.Provider value={providerMockValue}>
        <CarouselProgress render={renderProp} />
      </CarouselContext.Provider>,
    )

    expect(renderProp).toHaveBeenCalledWith(50)
    expect(screen.getByRole('progressbar').textContent).toBe('50')
  })
})
