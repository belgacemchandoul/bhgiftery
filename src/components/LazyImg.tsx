interface Props {
  src?: string
  alt?: string
  style?: React.CSSProperties
}

export default function LazyImg({ src, alt = '', style }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
      />
    )
  }

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
