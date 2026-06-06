import { useEffect, useRef } from 'react'

// Disabled on touch devices and when prefers-reduced-motion is set.
export default function CursorSparkle() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastRef.current < 80) return   // ~12 sparkes/s max
      lastRef.current = now

      const container = containerRef.current
      if (!container) return

      const size = 8 + Math.random() * 9
      const rotate = Math.random() * 360

      // Outer div: carries the CSS fade+rise animation
      const outer = document.createElement('div')
      outer.style.cssText = `
        position: fixed;
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        pointer-events: none;
        animation: bhg-sparkle 0.7s ease-out forwards;
        will-change: opacity, transform;
      `
      // Inner div: static rotation so it doesn't conflict with the animation transform
      const inner = document.createElement('div')
      inner.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        font-size: ${size}px;
        line-height: 1;
        color: #c9a84c;
        user-select: none;
        transform: rotate(${rotate}deg);
      `
      inner.textContent = '✦'

      outer.appendChild(inner)
      container.appendChild(outer)
      setTimeout(() => outer.remove(), 750)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}
      />
      <style>{`
        @keyframes bhg-sparkle {
          0%   { opacity: 0.85; transform: scale(1)   translateY(0px);   }
          100% { opacity: 0;    transform: scale(0.1) translateY(-28px); }
        }
      `}</style>
    </>
  )
}
