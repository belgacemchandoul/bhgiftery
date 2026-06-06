import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  // useSpring gives a smooth trailing feel rather than a jerky direct match
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'var(--gold)',
        scaleX,
        transformOrigin: '0%',
        zIndex: 100,
        pointerEvents: 'none',
      }}
    />
  )
}
