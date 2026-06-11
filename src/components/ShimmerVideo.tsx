import { useState } from 'react'

type Props = React.VideoHTMLAttributes<HTMLVideoElement>

export default function ShimmerVideo({ style, onCanPlay, ...rest }: Props) {
  const [ready, setReady] = useState(false)

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        className="lazy-shimmer"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: ready ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <video
        {...rest}
        onCanPlay={(e) => {
          setReady(true)
          onCanPlay?.(e)
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          ...style,
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />
    </div>
  )
}
