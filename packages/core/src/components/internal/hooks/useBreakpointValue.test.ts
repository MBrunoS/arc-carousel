import { renderHook, act } from '@testing-library/react-hooks'
import { useBreakpointValue } from './useBreakpointValue'
import { describe, expect, it, vi } from 'vitest'

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

  it("should handle breakpoints that don't exist", () => {
    window.innerWidth = 1536
    const { result } = renderHook(() =>
      useBreakpointValue({ base: 'base', md: 'medium', xl: 'extra-large' }),
    )

    expect(result.current).toBe('extra-large')

    act(() => {
      window.innerWidth = 1280
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('extra-large')

    act(() => {
      window.innerWidth = 1024
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('medium')

    act(() => {
      window.innerWidth = 768
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('medium')

    act(() => {
      window.innerWidth = 640
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('base')

    act(() => {
      window.innerWidth = 0
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe('base')
  })

  it('should handle different types of values', () => {
    window.innerWidth = 768

    const { result: numberResult } = renderHook(() => useBreakpointValue({ base: 0, md: 1, xl: 2 }))

    expect(numberResult.current).toBe(1)

    const { result: booleanResult } = renderHook(() =>
      useBreakpointValue({ base: false, md: true }),
    )

    expect(booleanResult.current).toBe(true)

    const { result: stringResult } = renderHook(() =>
      useBreakpointValue({ base: 'base', md: 'medium' }),
    )

    expect(stringResult.current).toBe('medium')

    const { result: arrayResult } = renderHook(() => useBreakpointValue({ base: [0], md: [1] }))

    expect(arrayResult.current).toEqual([1])

    const { result: objectResult } = renderHook(() =>
      useBreakpointValue({ base: { base: 0 }, md: { md: 1 } }),
    )

    expect(objectResult.current).toEqual({ md: 1 })

    const { result: functionResult } = renderHook(() =>
      useBreakpointValue({ base: () => 0, md: () => 1 }),
    )

    expect(typeof functionResult.current).toBe('function')
    expect(functionResult.current()).toBe(1)

    const { result: nullResult } = renderHook(() => useBreakpointValue({ base: null, md: null }))

    expect(nullResult.current).toBeNull()

    const { result: undefinedResult } = renderHook(() =>
      useBreakpointValue({ base: undefined, md: undefined }),
    )

    expect(undefinedResult.current).toBeUndefined()
  })

  it('should clean up the resize event when the component is unmounted', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount } = renderHook(() => useBreakpointValue(breakpoints))

    expect(removeEventListenerSpy).not.toHaveBeenCalled()

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
  })
})
