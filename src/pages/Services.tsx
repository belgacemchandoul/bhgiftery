import { motion } from 'framer-motion'
import { Heart, Gem, Gift, Scissors, Flower2, Star, GraduationCap, Sparkles, MessageCircle, Crown, Briefcase, Coffee, Cake, Ribbon } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { fadeUp, stagger } from '../utils/animations'

const services = [
  {
    icon: Heart,
    label: 'Mariages',
    desc: "Décoration sur-mesure pour votre plus beau jour. Compositions florales, arches, tables d'honneur et mise en lumière féerique.",
  },
  {
    icon: Gem,
    label: 'Fiançailles',
    desc: 'Une ambiance romantique et mémorable pour sceller vos promesses. Décoration intimiste et élégante adaptée à vos goûts.',
  },
  {
    icon: Crown,
    label: 'Sdag',
    desc: "Mise en scène raffinée pour la présentation des cadeaux traditionnels. Un moment de prestige et de générosité sublimé.",
  },
  {
    icon: Gift,
    label: 'Anniversaires',
    desc: 'Des célébrations colorées et élégantes à tout âge. Chaque anniversaire mérite une décoration unique et sur-mesure.',
  },
  {
    icon: Scissors,
    label: 'Inaugurations',
    desc: "Mettez en valeur votre nouveau projet avec une décoration professionnelle et percutante qui laisse une première impression inoubliable.",
  },
  {
    icon: Flower2,
    label: 'Fête des mères',
    desc: "Célébrez les mamans avec des compositions florales délicates et une décoration tendre qui traduit toute votre affection.",
  },
  {
    icon: Star,
    label: 'Cérémonies',
    desc: "Mariages civils, baptêmes, communions — nous habillons chaque cérémonie avec raffinement et attention aux détails.",
  },
  {
    icon: GraduationCap,
    label: 'Remises de diplômes',
    desc: "Honorez la réussite avec une scène et une décoration dignes de cet accomplissement. Banderoles, fleurs, photocalls personnalisés.",
  },
  {
    icon: Sparkles,
    label: 'Décoration sur mesure',
    desc: "Vous avez un événement hors du commun ? Nous concevons des décorations entièrement personnalisées selon votre vision et votre budget.",
  },
  {
    icon: Briefcase,
    label: 'Événements professionnels',
    desc: "Séminaires, conférences, lancements de produits — une décoration sobre et impactante qui valorise votre image de marque.",
  },
  {
    icon: Coffee,
    label: 'Pause café',
    desc: "Transformez vos pauses en moments de convivialité. Installation élégante pour des espaces de détente en entreprise ou événement.",
  },
  {
    icon: Ribbon,
    label: 'Révélation du sexe',
    desc: "Un moment de surprise et de joie partagée. Décoration festive et colorée pour révéler le grand secret avec style.",
  },
  {
    icon: Cake,
    label: 'Fête de naissance',
    desc: "Bienvenue au monde ! Une décoration chaleureuse et joyeuse pour célébrer l'arrivée du nouveau-né en famille.",
  },
]

const WHATSAPP = 'https://wa.me/21625376765'

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

export default function Services() {
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
          position: 'relative',
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          >
            <Label>Ce que nous proposons</Label>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
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
            Nos Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.65 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 2.4vw, 22px)',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            De la mise en scène à la décoration florale, chaque prestation est pensée pour sublimer votre événement.
          </motion.p>
        </section>

        {/* SERVICE CARDS GRID */}
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {services.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: '2.75rem 2.25rem',
                    border: '1px solid rgba(201, 168, 76, 0.2)',
                    background: 'rgba(250, 247, 242, 0.7)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <Icon size={30} color="var(--gold)" strokeWidth={1.2} />
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    letterSpacing: '0.05em',
                    color: 'var(--text-dark)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}>
                    {label}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                    flex: 1,
                  }}>
                    {desc}
                  </p>

                  <span style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    padding: '0.3rem 0.85rem',
                    border: '1px solid rgba(201, 168, 76, 0.5)',
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}>
                    Sur devis
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROCESS STRIP */}
        <section style={{
          padding: 'clamp(4rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)',
          background: '#F2EDE6',
          textAlign: 'center',
        }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            style={{ maxWidth: '640px', margin: '0 auto' }}
          >
            <Label>Notre engagement</Label>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 4vw, 38px)',
              letterSpacing: '0.06em',
              color: 'var(--text-dark)',
              fontWeight: 400,
              marginBottom: '1.25rem',
            }}>
              Chaque prestation est unique
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
            }}>
              Nous ne travaillons pas avec des formules toutes faites. Chaque projet commence par une conversation — nous écoutons votre vision, votre budget, et nous construisons ensemble quelque chose qui vous ressemble.
            </p>
          </motion.div>
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
              <Label>Prêt à commencer ?</Label>
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
              Demandez votre devis gratuit
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
              Décrivez-nous votre événement sur WhatsApp. Nous vous répondons dans les 24 h.
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
                Écrire sur WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  )
}
