import { useState } from 'react'

interface Props {
  src?: string
  alt?: string
  style?: React.CSSProperties
}

export default function LazyImg({ src, alt = '', style }: Props) {
  const [loaded, setLoaded] = useState(false)

  if (!src) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#E8DDD0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
        <span style={{ color: '#8C7B6B', fontSize: '13px', fontFamily: 'var(--font-body)' }}>
          Photo à venir
        </span>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }}>
      <div
        className="lazy-shimmer"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: loaded ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />
    </div>
  )
}
