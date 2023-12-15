export type Breakpoints = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type ResponsiveProp<T> = Partial<Record<Breakpoints, T>> & {
  base: T
}
