import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { events, type EventType } from '../data/events'
import LazyImg from '../components/LazyImg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fadeUp } from '../utils/animations'

type Filter = 'Tous' | EventType

const filters: Filter[] = [
  'Tous',
  'Mariages',
  'Fiançailles',
  'Anniversaires',
  'Inaugurations',
  'Fête des mères',
  'Cérémonies',
  'Remises',
]

const breakpointCols = { default: 3, 1024: 2, 640: 1 }

const cardHeights: Record<string, string> = {
  portrait: '400px',
  landscape: '260px',
  square: '320px',
}

function Label({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      letterSpacing: '0.22em',
      textTransform: 'uppercase' as const,
      color: 'var(--gold)',
      marginBottom: '0.75rem',
    }}>
      {children}
    </p>
  )
}

function GalleryCard({ event }: { event: typeof events[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        height: cardHeights[event.aspectRatio],
        marginBottom: '1.25rem',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LazyImg alt={event.title} />

      {/* Event type tag */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        padding: '0.3rem 0.85rem',
        background: 'var(--gold)',
        color: 'var(--charcoal)',
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
      }}>
        {event.type}
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(26, 23, 20, 0.72)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '1.5rem',
          pointerEvents: 'none',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20px',
          letterSpacing: '0.05em',
          color: 'var(--cream)',
          fontWeight: 400,
          lineHeight: 1.25,
          marginBottom: '0.4rem',
        }}>
          {event.title}
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'rgba(250, 247, 242, 0.65)',
          lineHeight: 1.55,
        }}>
          {event.description}
        </p>
      </motion.div>
    </div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Tous')

  const filtered = activeFilter === 'Tous'
    ? events
    : events.filter((e) => e.type === activeFilter)

  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>

        {/* HERO */}
        <section style={{
          paddingTop: 'clamp(6rem, 14vw, 13rem)',
          paddingBottom: 'clamp(3rem, 7vw, 7rem)',
          paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          background: 'var(--cream)',
          textAlign: 'center',
        }}>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            style={{
              width: '1px',
              height: '48px',
              background: 'var(--gold)',
              margin: '0 auto 2rem',
              transformOrigin: 'top',
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Label>Portfolio</Label>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 8vw, 80px)',
              letterSpacing: '0.1em',
              color: 'var(--text-dark)',
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: '1.25rem',
            }}
          >
            Nos Réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 2.4vw, 22px)',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Chaque événement raconte une histoire. Parcourez nos plus belles créations.
          </motion.p>
        </section>

        {/* FILTER BAR */}
        <section style={{
          background: 'var(--cream)',
          padding: '0 clamp(1.5rem, 5vw, 5rem) clamp(3rem, 5vw, 4rem)',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
            }}
          >
            {filters.map((f) => {
              const active = f === activeFilter
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: '0 1.25rem',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: active
                      ? '1px solid var(--gold)'
                      : '1px solid rgba(201, 168, 76, 0.3)',
                    background: active ? 'var(--gold)' : 'transparent',
                    color: active ? 'var(--charcoal)' : 'var(--text-muted)',
                    fontWeight: active ? 500 : 400,
                  }}
                >
                  {f}
                </button>
              )
            })}
          </motion.div>
        </section>

        {/* MASONRY GRID */}
        <section style={{
            padding: '0 clamp(1.5rem, 5vw, 5rem) clamp(5rem, 8vw, 8rem)',
            background: 'var(--cream)',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <Masonry
                  breakpointCols={breakpointCols}
                  className="gallery-masonry"
                  columnClassName="gallery-masonry-col"
                >
                  {filtered.map((event, i) => (
                    <motion.div
                      key={event.id}
                      variants={fadeUp}
                      initial="hidden"
                      animate="show"
                      transition={{ delay: i * 0.07 }}
                    >
                      <GalleryCard event={event} />
                    </motion.div>
                  ))}
                </Masonry>
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <p style={{
                textAlign: 'center',
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '20px',
                color: 'var(--text-muted)',
                padding: '4rem 0',
              }}>
                Aucune réalisation dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .gallery-masonry {
          display: flex;
          gap: 1.25rem;
          width: 100%;
        }
        .gallery-masonry-col {
          background-clip: padding-box;
          flex: 1;
        }
      `}</style>
    </>
  )
}
