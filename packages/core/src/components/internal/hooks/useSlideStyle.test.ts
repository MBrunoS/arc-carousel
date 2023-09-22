import { describe, expect, it } from 'vitest'
import { useSlideStyle } from './useSlideStyle'

describe('useSlideStyle', () => {
  describe('when using slide transition', () => {
    const props = {
      orientation: 'horizontal' as const,
      transition: 'slide' as const,
      gap: 10,
      currentPage: 0,
      slidesPerPage: 4,
      index: 0,
    }

    it('should return the correct horizontal slide styles', () => {
      const expectedStyles = {
        width: 'calc(25% - 7.5px)',
        transform: 'translateX(calc(0% - 0px))',
      }

      expect(useSlideStyle(props)).toEqual(expectedStyles)
    })

    it('should return the correct horizontal slide styles for single slides', () => {
      const propsWithSingleSlide = {
        ...props,
        slidesPerPage: 1,
      }

      const expectedStyles = {
        width: 'calc(100% - 0px)',
        transform: 'translateX(calc(0% - 0px))',
      }

      expect(useSlideStyle(propsWithSingleSlide)).toEqual(expectedStyles)
    })

    it('should return the correct vertical slide styles', () => {
      const verticalProps = {
        ...props,
        orientation: 'vertical' as const,
      }

      const expectedStyles = {
        height: 'calc(25% - 7.5px)',
        transform: 'translateY(calc(0% - 0px))',
      }

      expect(useSlideStyle(verticalProps)).toEqual(expectedStyles)
    })

    it('should return the correct vertical slide styles for single slides', () => {
      const propsWithSingleSlide = {
        ...props,
        slidesPerPage: 1,
        orientation: 'vertical' as const,
      }

      const expectedStyles = {
        height: 'calc(100% - 0px)',
        transform: 'translateY(calc(0% - 0px))',
      }

      expect(useSlideStyle(propsWithSingleSlide)).toEqual(expectedStyles)
    })

    it('should return the correct horizontal slide styles for a non-zero current page', () => {
      const propsWithCurrentPage = {
        ...props,
        currentPage: 1,
      }

      const expectedStyles = {
        width: 'calc(25% - 7.5px)',
        transform: 'translateX(calc(-400% - 40px))',
      }

      expect(useSlideStyle(propsWithCurrentPage)).toEqual(expectedStyles)
    })

    it('should return the correct vertical slide styles for a non-zero current page', () => {
      const propsWithCurrentPage = {
        ...props,
        orientation: 'vertical' as const,
        currentPage: 1,
      }

      const expectedStyles = {
        height: 'calc(25% - 7.5px)',
        transform: 'translateY(calc(-400% - 40px))',
      }

      expect(useSlideStyle(propsWithCurrentPage)).toEqual(expectedStyles)
    })
  })

  describe('when using fade transition', () => {
    const props = {
      orientation: 'horizontal' as const,
      transition: 'fade' as const,
      gap: 0,
      currentPage: 0,
      slidesPerPage: 1,
      index: 0,
    }

    it('should return the correct active styles', () => {
      const expectedStyles = {
        position: 'absolute',
        inset: 0,
        opacity: 1,
        zIndex: 1,
      }

      expect(useSlideStyle(props)).toEqual(expectedStyles)
    })

    it('should return the correct inactive styles', () => {
      const propsWithIndex = {
        ...props,
        index: 10,
      }

      const expectedStyles = {
        position: 'absolute',
        inset: 0,
        opacity: 0,
        zIndex: 0,
      }

      expect(useSlideStyle(propsWithIndex)).toEqual(expectedStyles)
    })
  })
})
