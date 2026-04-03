'use client'
import { useEffect, useRef } from 'react'

export default function Animations() {
  const ran = useRef(false)

  useEffect(() => {
    if (ran.current) return
    ran.current = true

    requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
      )

      document.querySelectorAll('[data-reveal]').forEach((el) => {
        observer.observe(el)
      })
    })
  }, [])

  return null
}
