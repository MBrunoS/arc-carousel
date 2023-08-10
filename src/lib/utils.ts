import { clsx, type ClassValue } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Filter children by component type
export function filterChildren<T>(children: React.ReactNode, validationType: T) {
  return React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child) && (child as React.ReactElement).type === validationType
  })
}
