import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fadeUp, stagger } from '../utils/animations'

const WA1 = 'https://wa.me/21625376765'
const WA2 = 'https://wa.me/21646226863'
const PHONES = ['+216 25 376 765', '+216 46 226 863']
const ADDRESS = 'Médenine, Tunisie'

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

export default function Contact() {
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
            <Label>Parlons de votre projet</Label>
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
            Nous contacter
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
            La meilleure façon de démarrer est d&apos;envoyer un message. Nous répondons dans les 24 h.
          </motion.p>
        </section>

        {/* CONTACT CARD */}
        <section style={{
          padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem) clamp(5rem, 9vw, 9rem)',
          background: 'var(--cream)',
        }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              style={{
                border: '1px solid rgba(201, 168, 76, 0.25)',
                padding: 'clamp(2.5rem, 6vw, 4rem)',
                background: 'rgba(250, 247, 242, 0.7)',
                textAlign: 'center',
              }}
            >
              {/* WhatsApp primary CTA */}
              <motion.div variants={fadeUp}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.75rem',
                }}>
                  <MessageCircle size={28} color="var(--charcoal)" strokeWidth={1.5} />
                </div>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(26px, 4vw, 38px)',
                  letterSpacing: '0.06em',
                  color: 'var(--text-dark)',
                  fontWeight: 400,
                  marginBottom: '0.75rem',
                }}
              >
                WhatsApp
              </motion.h2>

              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '0.5rem',
                }}
              >
                Décrivez-nous votre événement, la date, et vos idées. Nous vous répondons rapidement avec une proposition adaptée.
              </motion.p>

              <motion.div
                variants={fadeUp}
                style={{ marginBottom: '2.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}
              >
                {PHONES.map((p) => (
                  <p
                    key={p}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      letterSpacing: '0.08em',
                      color: 'var(--text-dark)',
                    }}
                  >
                    {p}
                  </p>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                {[
                  { href: WA1, label: PHONES[0] },
                  { href: WA2, label: PHONES[1] },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '1rem 2rem',
                      background: 'var(--gold)',
                      color: 'var(--charcoal)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
                  >
                    <MessageCircle size={16} strokeWidth={1.5} />
                    {label}
                  </a>
                ))}
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={fadeUp}
                style={{
                  width: '40px',
                  height: '1px',
                  background: 'rgba(201, 168, 76, 0.35)',
                  margin: '2.75rem auto',
                }}
              />

              {/* Secondary contact info */}
              <motion.div
                variants={stagger}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                {PHONES.map((p) => (
                  <motion.div
                    key={p}
                    variants={fadeUp}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                  >
                    <Phone size={16} color="var(--gold)" strokeWidth={1.5} />
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.04em',
                    }}>
                      {p}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  variants={fadeUp}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                >
                  <MapPin size={16} color="var(--gold)" strokeWidth={1.5} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                  }}>
                    {ADDRESS}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
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
              <Label>On vous attend</Label>
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
              Chaque grand moment mérite une belle décoration
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
              Mariages, fiançailles, anniversaires — quelle que soit l&apos;occasion, nous sommes là pour la rendre inoubliable.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={WA1}
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
