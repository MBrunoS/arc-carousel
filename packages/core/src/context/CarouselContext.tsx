import React, { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { useEvents } from './EventsContext'

interface CarouselContextType {
  orientation: 'horizontal' | 'vertical'
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  next: () => void
  prev: () => void
  slideCount: number
  pagesCount: number
  slidesPerPage: number
  initialPage: number
  hasLoop: boolean
  transition: 'slide' | 'fade'
  transitionDuration: number
  gap: number
  autoplay: boolean
  startAutoplay: () => void
  stopAutoplay: () => void
  isAutoplaying: boolean
  isPaused: boolean
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
}

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType)

export interface CarouselProviderProps {
  children: React.ReactNode
  orientation: 'horizontal' | 'vertical'
  slideCount: number
  pagesCount: number
  slidesPerPage: number
  initialPage: number
  hasLoop: boolean
  transition: 'slide' | 'fade'
  transitionDuration: number
  gap: number
  autoplay: boolean
  autoplayInterval: number
}

export const CarouselProvider = ({
  children,
  orientation,
  slideCount,
  pagesCount,
  slidesPerPage,
  initialPage,
  hasLoop,
  transition,
  transitionDuration,
  gap,
  autoplay,
  autoplayInterval,
}: CarouselProviderProps) => {
  const [currentPage, setCurrentPage] = useState(() => {
    if (initialPage < 1) return 0
    else if (initialPage > pagesCount) return pagesCount - 1
    else return initialPage - 1
  })
  const { onPageChange } = useEvents()

  const next = () => {
    const prevIndex = currentPage
    let nextIndex = 0

    if (hasLoop) {
      nextIndex = (currentPage + 1) % pagesCount
    } else {
      nextIndex = currentPage === pagesCount - 1 ? currentPage : currentPage + 1
    }

    onPageChange?.(prevIndex, nextIndex)
    setCurrentPage(nextIndex)
  }

  const prev = () => {
    const prevIndex = currentPage
    let nextIndex = 0

    if (hasLoop) {
      nextIndex = (currentPage - 1 + pagesCount) % pagesCount
    } else {
      nextIndex = currentPage === 0 ? currentPage : currentPage - 1
    }

    onPageChange?.(prevIndex, nextIndex)
    setCurrentPage(nextIndex)
  }

  const [isAutoplaying, setIsAutoplaying] = useState(autoplay)
  const [isPaused, setIsPaused] = useState(false)
  const autoplayTimerRef = useRef<NodeJS.Timeout>()

  const startAutoplay = useCallback(() => {
    setIsAutoplaying(true)
  }, [])

  const stopAutoplay = useCallback(() => {
    setIsAutoplaying(false)
  }, [])

  useEffect(() => {
    if (isAutoplaying) {
      autoplayTimerRef.current = setInterval(() => {
        next()
      }, autoplayInterval)
    } else {
      clearInterval(autoplayTimerRef.current!)
    }
    return () => {
      clearInterval(autoplayTimerRef.current!)
    }
  }, [isAutoplaying, next])

  return (
    <CarouselContext.Provider
      value={{
        orientation,
        currentPage,
        setCurrentPage,
        next,
        prev,
        slideCount,
        pagesCount,
        slidesPerPage,
        initialPage,
        hasLoop,
        transition,
        transitionDuration,
        gap,
        autoplay,
        startAutoplay,
        stopAutoplay,
        isAutoplaying,
        isPaused,
        setIsPaused,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

CarouselProvider.displayName = 'CarouselProvider'
