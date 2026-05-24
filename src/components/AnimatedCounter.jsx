import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return

    const numeric = parseFloat(value)
    if (isNaN(numeric)) {
      setCount(value)
      return
    }

    let start = 0
    const increment = numeric / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= numeric) {
        setCount(numeric)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [inView, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
