import React from 'react'
import { describe, expect, it } from 'vitest'
import { countGrandChildrenOfType, filterChildren } from './utils'

describe('filterChildren', () => {
  it('should filter children by validation type', () => {
    const children = [<span>Child 1</span>, <span>Child 2</span>, <div>Child 3</div>]

    const filteredChildren = filterChildren(children, 'span')
    const filteredChildren2 = filterChildren(children, 'div')

    if (React.isValidElement(filteredChildren[0]) && React.isValidElement(filteredChildren[1])) {
      expect(filteredChildren).toHaveLength(2)
      expect(filteredChildren[0].props.children).toBe('Child 1')
      expect(filteredChildren[1].props.children).toBe('Child 2')
    } else {
      throw new Error('Invalid element')
    }

    if (React.isValidElement(filteredChildren2[0])) {
      expect(filteredChildren2).toHaveLength(1)
      expect(filteredChildren2[0].props.children).toBe('Child 3')
    } else {
      throw new Error('Invalid element')
    }
  })

  it('should return an empty array if no children match validation type', () => {
    const children = <div></div>

    const filteredChildren = filterChildren(children, 'button')

    expect(filteredChildren).toHaveLength(0)
  })

  it('should return an empty array if children is null or undefined', () => {
    const filteredChildren1 = filterChildren(null, 'span')
    const filteredChildren2 = filterChildren(undefined, 'span')

    expect(filteredChildren1).toHaveLength(0)
    expect(filteredChildren2).toHaveLength(0)
  })
})

describe('countGrandChildrenOfType', () => {
  it('should return 0 when no children are of the specified type', () => {
    const children = (
      <div>
        <span>hello</span>
        <span>world</span>
      </div>
    )
    const count = countGrandChildrenOfType(children, 'button')
    expect(count).toBe(0)
  })

  it('should return the correct count when some children are of the specified type', () => {
    const children = (
      <div>
        <span>hello</span>
        <button>click me</button>
        <span>world</span>
        <button>click me too</button>
      </div>
    )
    const count = countGrandChildrenOfType(children, 'button')
    expect(count).toBe(2)
  })

  it('should return the correct count when all children are of the specified type', () => {
    const children = (
      <div>
        <button>click me</button>
        <button>click me too</button>
      </div>
    )
    const count = countGrandChildrenOfType(children, 'button')
    expect(count).toBe(2)
  })
})
