import React, { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { useEvents } from './EventsContext'

interface CarouselContextType {
  orientation: 'horizontal' | 'vertical'
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  next: () => void
  prev: () => void
  pagesCount: number
  slidesPerPage: number
  initialPage: number
  hasLoop: boolean
  transition: 'slide' | 'fade'
  transitionDuration: number
  gap: number
  startAutoplay: () => void
  stopAutoplay: () => void
  isAutoplaying: boolean
}

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType)

export interface CarouselProviderProps {
  children: React.ReactNode
  orientation: 'horizontal' | 'vertical'
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
  }, [isAutoplaying])

  return (
    <CarouselContext.Provider
      value={{
        orientation,
        currentPage,
        setCurrentPage,
        next,
        prev,
        pagesCount,
        slidesPerPage,
        initialPage,
        hasLoop,
        transition,
        transitionDuration,
        gap,
        startAutoplay,
        stopAutoplay,
        isAutoplaying,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

CarouselProvider.displayName = 'CarouselProvider'
