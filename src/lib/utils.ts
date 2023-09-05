import { clsx, type ClassValue } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function filterChildren<T>(children: React.ReactNode, validationType: T) {
  return React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child) && (child as React.ReactElement).type === validationType
  })
}

export function countGrandChildrenOfType<T>(children: React.ReactNode, validationType: T) {
  let count = 0
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const filteredChildren = filterChildren(child.props.children, validationType)
      count += filteredChildren.length
    }
  })
  return count
}
