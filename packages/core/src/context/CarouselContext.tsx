import React, { createContext, useState } from 'react'

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
  gap: number
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
  gap: number
}

export const CarouselProvider = ({
  children,
  orientation,
  pagesCount,
  slidesPerPage,
  initialPage,
  hasLoop,
  transition,
  gap,
}: CarouselProviderProps) => {
  const [currentPage, setCurrentPage] = useState(() => {
    if (initialPage < 1) return 0
    else if (initialPage > pagesCount) return pagesCount - 1
    else return initialPage - 1
  })

  const next = () => {
    if (hasLoop) {
      setCurrentPage((prev) => (prev + 1) % pagesCount)
    } else {
      setCurrentPage((prev) => (currentPage === pagesCount - 1 ? prev : prev + 1))
    }
  }

  const prev = () => {
    if (hasLoop) {
      setCurrentPage((prev) => (prev - 1 + pagesCount) % pagesCount)
    } else {
      setCurrentPage((prev) => (currentPage === 0 ? prev : prev - 1))
    }
  }

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
        gap,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

CarouselProvider.displayName = 'CarouselProvider'
