import { renderHook, act } from '@testing-library/react-hooks'
import { useBreakpointValue } from './useBreakpointValue'
import { describe, expect, it } from 'vitest'

describe('useBreakpointValue', () => {
  const breakpoints = {
    base: 'base',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'extra-large',
    '2xl': 'extra-extra-large',
  }

  it('should start with the initial breakpoint value of "base"', () => {
    window.innerWidth = 0
    const { result } = renderHook(() => useBreakpointValue(breakpoints))
    expect(result.current).toBe('base')
  })

  it('should update the breakpoint value when the window size changes', () => {
    window.innerWidth = 0
    const { result } = renderHook(() => useBreakpointValue(breakpoints))

    expect(result.current).toBe('base')

    act(() => {
      window.innerWidth = 800
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('medium')
  })

  it("should return the value of the breakpoint that's currently active", () => {
    window.innerWidth = 0
    const { result } = renderHook(() => useBreakpointValue(breakpoints))

    expect(result.current).toBe('base')

    act(() => {
      window.innerWidth = 640
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('small')

    act(() => {
      window.innerWidth = 768
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('medium')

    act(() => {
      window.innerWidth = 1024
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('large')

    act(() => {
      window.innerWidth = 1280
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('extra-large')

    act(() => {
      window.innerWidth = 1536
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('extra-extra-large')
  })
})
