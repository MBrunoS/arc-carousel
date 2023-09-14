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
}

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType)

export interface CarouselProviderProps {
  children: React.ReactNode
  orientation: 'horizontal' | 'vertical'
  pagesCount: number
  slidesPerPage: number
  initialPage: number
}

export const CarouselProvider = ({
  children,
  orientation,
  pagesCount,
  slidesPerPage,
  initialPage,
}: CarouselProviderProps) => {
  const [currentPage, setCurrentPage] = useState(() => {
    if (initialPage < 1) return 0
    else if (initialPage > pagesCount) return pagesCount - 1
    else return initialPage - 1
  })

  const next = () => {
    setCurrentPage((prev) => (prev + 1) % pagesCount)
  }

  const prev = () => {
    setCurrentPage((prev) => (prev - 1 + pagesCount) % pagesCount)
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
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

CarouselProvider.displayName = 'CarouselProvider'
