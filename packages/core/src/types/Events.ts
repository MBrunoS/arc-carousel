export type Events = {
  onSlideClick?: (index: number, event: React.MouseEvent) => void
  onPageChange?: (prevIndex: number, nextIndex: number) => void
  onPageChangeEnd?: (index: number) => void
}
