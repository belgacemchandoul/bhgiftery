import { useState, useEffect, useRef } from 'react'
import { useInView, useMotionValue, useMotionValueEvent, animate } from 'framer-motion'

interface Props {
  value: string  // e.g. "150+", "5 ans", "100%"
  label: string
}

// Split "150+" → { num: 150, suffix: "+" }  /  "5 ans" → { num: 5, suffix: " ans" }
function parse(value: string): { num: number; suffix: string } {
  const m = value.match(/^(\d+)(.*)$/)
  return m ? { num: parseInt(m[1], 10), suffix: m[2] } : { num: 0, suffix: value }
}

export default function AnimatedStat({ value, label }: Props) {
  const { num, suffix } = parse(value)
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useMotionValueEvent(mv, 'change', (v) => setDisplay(Math.round(v)))

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(num)
      return
    }
    const controls = animate(mv, num, { duration: 2, ease: 'easeOut' })
    return () => controls.stop()
  }, [inView, mv, num])

  return (
    <div ref={ref}>
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(28px, 7.5vw, 72px)',
        color: 'var(--gold)',
        letterSpacing: '0.04em',
        fontWeight: 300,
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        {display}{suffix}
      </p>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(10px, 2.5vw, 12px)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        color: 'rgba(250, 247, 242, 0.55)',
      }}>
        {label}
      </p>
    </div>
  )
}
