import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Props {
  onDone: () => void
}

const FONT_SIZE = 'clamp(72px, 10vw, 88px)'

function FillingLetter({ char, delay }: { char: string; delay: number }) {
  const sharedStyle: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontSize: FONT_SIZE,
    fontWeight: 300,
    letterSpacing: '0.02em',
    lineHeight: 1,
    display: 'block',
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block', lineHeight: 1 }}>
      {/* Outline layer */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
        style={{
          ...sharedStyle,
          WebkitTextStroke: '1px #c9a84c',
          color: 'transparent',
        }}
      >
        {char}
      </motion.span>

      {/* Gold fill — rises bottom to top */}
      <motion.span
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        animate={{ clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay }}
        style={{
          ...sharedStyle,
          position: 'absolute',
          top: 0,
          left: 0,
          color: '#c9a84c',
          whiteSpace: 'nowrap',
        }}
      >
        {char}
      </motion.span>
    </div>
  )
}

export default function PageLoader({ onDone }: Props) {
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    // B fills:       0.2s + 1.0s = 1.2s done
    // H fills:       0.5s + 1.0s = 1.5s done
    // GIFTERY fades: 1.6s + 0.5s = 2.1s done
    // Line draws:    2.0s + 0.45s = 2.45s done
    // onDone at 2.6s → exit fade 0.55s → gone ~3.15s
    const t = setTimeout(() => onDoneRef.current(), 2600)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: 'easeIn' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#faf7f2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.65rem',
      }}
    >
      {/* BH letters */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.12em' }}>
        <FillingLetter char="B" delay={0.2} />
        <FillingLetter char="H" delay={0.5} />
      </div>

      {/* GIFTERY + underline */}
      <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.45rem' }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1.6 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '15px',
            letterSpacing: '0.4em',
            color: '#c9a84c',
            display: 'block',
            textAlign: 'center',
          }}
        >
          GIFTERY
        </motion.span>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 2.0 }}
          style={{
            height: '1px',
            background: '#c9a84c',
            transformOrigin: 'left',
          }}
        />
      </div>
    </motion.div>
  )
}
