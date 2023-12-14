import React, { useRef, useState, useEffect } from 'react'
import useMousePosition from '../utils/mouse-position'
import SpotlightCard from './SpotlightCard'

export default function SpotlightGrid({ className = '', cards }) {
  const containerRef = useRef(null)
  const mousePosition = useMousePosition()
  const mouse = useRef({ x: 0, y: 0 })
  const containerSize = useRef({ w: 0, h: 0 })
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    containerRef.current && setBoxes(Array.from(containerRef.current.children).map((el) => el))
  }, [])

  useEffect(() => {
    initContainer()
    window.addEventListener('resize', initContainer)

    return () => {
      window.removeEventListener('resize', initContainer)
    }
  }, [setBoxes])

  useEffect(() => {
    onMouseMove()
  }, [mousePosition])

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth
      containerSize.current.h = containerRef.current.offsetHeight
    }
  }

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const { w, h } = containerSize.current
      const x = mousePosition.x - rect.left
      const y = mousePosition.y - rect.top
      const inside = x < w && x > 0 && y < h && y > 0
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
        boxes.forEach((box) => {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x
          const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y
          box.style.setProperty('--mouse-x', `${boxX}px`)
          box.style.setProperty('--mouse-y', `${boxY}px`)
        })
      }
    }
  }

  return (
    <div className={`grid group ${className}`} ref={containerRef}>
      {cards.map((card) => (
        <SpotlightCard
          title={card.title}
          icon={icons[card.icon]}
          key={card.title}
          className="last:sm:translate-x-1/2 last:lg:translate-x-0"
        >
          <p className="!mt-3">{card.description}</p>
        </SpotlightCard>
      ))}
    </div>
  )
}

var icons = {
  pencil: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
    </svg>
  ),
  mobile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
      <path
        fillRule="evenodd"
        d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
        clipRule="evenodd"
      />
    </svg>
  ),
  a11y: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </svg>
  ),
}
