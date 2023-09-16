export type Events = {
  onSlideClick?: (index: number, event: React.MouseEvent) => void
  onSlideChange?: (prevIndex: number, nextIndex: number) => void
  onSlideChangeStart?: (prevIndex: number, nextIndex: number) => void
  onSlideChangeEnd?: (prevIndex: number, nextIndex: number) => void
  onSlideFocus?: (index: number) => void
}
