import { Breakpoints, ResponsiveProp } from '@/types/Breakpoints'
import { useEffect, useState } from 'react'

const BREAKPOINTS_SIZES = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export function useBreakpointValue<T>(breakpoints: ResponsiveProp<T>): T {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoints>('base')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      const breakpoint = Object.keys(breakpoints)
        .reverse()
        .find((key) => width >= BREAKPOINTS_SIZES[key as Breakpoints]) as Breakpoints

      setCurrentBreakpoint(breakpoint)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return breakpoints[currentBreakpoint] as T
}
