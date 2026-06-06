import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedStat from '../components/AnimatedStat'
import LazyImg from '../components/LazyImg'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fadeUp, stagger } from '../utils/animations'

const WHATSAPP = 'https://wa.me/21600000000'
const PHONE = '+216 XX XXX XXX'
const EMAIL = 'contact@bhgiftery.tn'
const ADDRESS = 'Sfax, Tunisie'
const SFAX: [number, number] = [34.7406, 10.7603]

const stats = [
  { value: '150+', label: 'Événements réalisés' },
  { value: '5 ans', label: "D'expérience" },
  { value: '100%', label: 'Satisfaction client' },
]

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

function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<ReturnType<typeof import('leaflet')['map']> | null>(null)

  useEffect(() => {
    if (!mapRef.current || instanceRef.current) return

    import('leaflet').then((L) => {
      if (!mapRef.current || instanceRef.current) return

      const map = L.map(mapRef.current, {
        center: SFAX,
        zoom: 13,
        scrollWheelZoom: false,
        zoomControl: true,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map)

      const icon = L.divIcon({
        html: '<div style="width:16px;height:16px;background:#c9a84c;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35)"></div>',
        className: '',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })

      L.marker(SFAX, { icon })
        .addTo(map)
        .bindPopup('<b style="font-family:sans-serif;font-size:13px">BH Giftery</b><br><span style="font-family:sans-serif;font-size:12px;color:#8c7b6b">Sfax, Tunisie</span>')

      instanceRef.current = map
    })

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove()
        instanceRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: 'clamp(300px, 45vw, 480px)',
        border: '1px solid rgba(201, 168, 76, 0.2)',
      }}
    />
  )
}

export default function About() {
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
            <Label>Notre histoire</Label>
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
            À propos
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
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Une passion pour la beauté, un sens du détail, et l&apos;envie de rendre chaque célébration inoubliable.
          </motion.p>
        </section>

        {/* BRAND STORY */}
        <section style={{
          padding: 'clamp(5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
          background: 'var(--cream)',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(3rem, 6vw, 7rem)',
                alignItems: 'center',
              }}
              className="about-story-grid"
            >
              {/* Image placeholder */}
              <motion.div
                variants={fadeUp}
                style={{
                  height: 'clamp(340px, 48vw, 580px)',
                  overflow: 'hidden',
                }}
              >
                <LazyImg alt="BH Giftery" />
              </motion.div>

              {/* Text */}
              <motion.div variants={stagger}>
                <motion.div variants={fadeUp}>
                  <Label>BH Giftery</Label>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    letterSpacing: '0.06em',
                    color: 'var(--text-dark)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    marginBottom: '1.5rem',
                  }}
                >
                  Nés pour sublimer vos célébrations
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.85,
                    marginBottom: '1.25rem',
                  }}
                >
                  BH Giftery est une entreprise de décoration et d&apos;événementiel basée à Sfax, en Tunisie. Fondée avec la conviction que chaque moment de vie mérite d&apos;être magnifié, nous mettons notre créativité et notre savoir-faire au service de vos plus belles occasions.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.85,
                    marginBottom: '1.25rem',
                  }}
                >
                  Mariages, fiançailles, anniversaires, inaugurations — nous intervenons sur tous types d&apos;événements, du plus intime au plus grandiose, avec la même attention portée aux détails et le même engagement envers l&apos;excellence.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '18px',
                    color: 'var(--text-dark)',
                    lineHeight: 1.65,
                    letterSpacing: '0.03em',
                    borderLeft: '2px solid var(--gold)',
                    paddingLeft: '1.25rem',
                  }}
                >
                  Chaque décoration est unique, pensée sur-mesure pour refléter votre personnalité et votre vision.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-story-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* STATS */}
        <section style={{
          padding: 'clamp(4rem, 7vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
          background: 'var(--charcoal)',
        }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(0.5rem, 2vw, 2rem)',
              textAlign: 'center',
            }}
          >
            {stats.map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp}>
                <AnimatedStat value={value} label={label} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* MAP + CONTACT INFO */}
        <section style={{
          padding: 'clamp(5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
          background: '#F2EDE6',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              style={{ marginBottom: '3rem' }}
            >
              <Label>Nous trouver</Label>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 40px)',
                letterSpacing: '0.06em',
                color: 'var(--text-dark)',
                fontWeight: 400,
              }}>
                Basés à Sfax, Tunisie
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: 'clamp(2rem, 5vw, 5rem)',
                alignItems: 'start',
              }}
              className="about-map-grid"
            >
              {/* Map */}
              <motion.div variants={fadeUp}>
                <LeafletMap />
              </motion.div>

              {/* Contact details */}
              <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <motion.div variants={fadeUp}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(201, 168, 76, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Phone size={16} color="var(--gold)" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: '0.3rem',
                      }}>
                        Téléphone
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        color: 'var(--text-dark)',
                      }}>
                        {PHONE}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(201, 168, 76, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Mail size={16} color="var(--gold)" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: '0.3rem',
                      }}>
                        Email
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        color: 'var(--text-dark)',
                      }}>
                        {EMAIL}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(201, 168, 76, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <MapPin size={16} color="var(--gold)" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: '0.3rem',
                      }}>
                        Adresse
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        color: 'var(--text-dark)',
                        lineHeight: 1.5,
                      }}>
                        {ADDRESS}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} style={{ paddingTop: '0.75rem' }}>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '1rem 2.25rem',
                      background: 'var(--gold)',
                      color: 'var(--charcoal)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
                  >
                    <MessageCircle size={15} strokeWidth={1.5} />
                    WhatsApp
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-map-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* CTA BANNER */}
        <section style={{
          padding: 'clamp(5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
          background: 'var(--charcoal)',
          textAlign: 'center',
        }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <motion.div variants={fadeUp}>
              <Label>Travaillons ensemble</Label>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 5vw, 46px)',
                letterSpacing: '0.06em',
                color: 'var(--cream)',
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              Votre prochain événement commence ici
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'rgba(250, 247, 242, 0.6)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}
            >
              Contactez-nous pour discuter de votre projet. Devis gratuit, réponse rapide.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '1rem 2.75rem',
                  background: 'var(--gold)',
                  color: 'var(--charcoal)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Nous contacter
              </a>
            </motion.div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  )
}
