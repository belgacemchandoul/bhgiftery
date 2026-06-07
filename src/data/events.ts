export type EventType =
  | 'Mariages'
  | 'Fiançailles'
  | 'Sdag'
  | 'Anniversaires'
  | 'Inaugurations'
  | 'Fête des mères'
  | 'Cérémonies'
  | 'Remises de diplômes'
  | 'Décoration sur mesure'
  | 'Événements professionnels'
  | 'Pause café'
  | 'Révélation du sexe'
  | 'Fête de naissance';

export interface GalleryEvent {
  id: number;
  type: EventType;
  title: string;
  description: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  src: string;
  mediaType: 'image' | 'video';
}

export const events: GalleryEvent[] = [
  // ── Mariages ──────────────────────────────────────────────────────────────
  { id: 1,  type: 'Mariages', title: 'Mariage élégant en blanc et or',        description: 'Une cérémonie somptueuse décorée avec soin.',                           aspectRatio: 'portrait',  src: '/marriage1.jpeg',      mediaType: 'image' },
  { id: 2,  type: 'Mariages', title: 'Décoration florale et bougies',          description: 'Compositions florales délicates pour une ambiance féérique.',           aspectRatio: 'landscape', src: '/marriage2.jpeg',      mediaType: 'image' },
  { id: 3,  type: 'Mariages', title: 'Mariage — moments en vidéo',             description: 'Les moments forts d\'une célébration inoubliable.',                    aspectRatio: 'landscape', src: '/marriage3.mp4',       mediaType: 'video' },
  { id: 4,  type: 'Mariages', title: 'Table d\'honneur raffinée',              description: 'Mise en scène élégante pour les mariés.',                              aspectRatio: 'portrait',  src: '/marriage4.jpeg',      mediaType: 'image' },
  { id: 5,  type: 'Mariages', title: 'Cérémonie en mouvement',                 description: 'L\'atmosphère du grand jour capturée en vidéo.',                       aspectRatio: 'landscape', src: '/marriage5.mp4',       mediaType: 'video' },
  { id: 6,  type: 'Mariages', title: 'Ambiance dorée et lumineuse',            description: 'Lumières chaudes et décoration luxueuse.',                             aspectRatio: 'landscape', src: '/marriage6.mp4',       mediaType: 'video' },
  { id: 7,  type: 'Mariages', title: 'Arche florale et voilages',              description: 'Une arche spectaculaire au cœur de la cérémonie.',                    aspectRatio: 'portrait',  src: '/marriage7.jpeg',      mediaType: 'image' },
  { id: 8,  type: 'Mariages', title: 'Mariage champêtre',                      description: 'Décoration naturelle et romantique capturée en vidéo.',                aspectRatio: 'landscape', src: '/marriage8.mp4',       mediaType: 'video' },
  { id: 9,  type: 'Mariages', title: 'Salle de réception parée',               description: 'La salle dans toute sa splendeur capturée en vidéo.',                 aspectRatio: 'landscape', src: '/marriage9.mp4',       mediaType: 'video' },
  { id: 10, type: 'Mariages', title: 'Détails de décoration',                  description: 'Les petits détails qui font toute la différence.',                     aspectRatio: 'square',    src: '/marriage10.jpeg',     mediaType: 'image' },
  { id: 11, type: 'Mariages', title: 'Mariage oriental',                       description: 'Élégance orientale avec lanternes et soieries dorées.',                aspectRatio: 'portrait',  src: '/marriage11.jpeg',     mediaType: 'image' },
  { id: 12, type: 'Mariages', title: 'Compositions en blanc',                  description: 'Pureté et raffinement pour ce beau jour.',                             aspectRatio: 'landscape', src: '/marriage12.jpeg',     mediaType: 'image' },
  { id: 13, type: 'Mariages', title: 'Mise en lumière féerique',               description: 'Un jeu de lumières pour une atmosphère magique.',                      aspectRatio: 'portrait',  src: '/marriage13.jpeg',     mediaType: 'image' },
  { id: 14, type: 'Mariages', title: 'Décoration de table',                    description: 'Art de la table pour un mariage inoubliable.',                         aspectRatio: 'square',    src: '/marriage14.jpeg',     mediaType: 'image' },
  { id: 15, type: 'Mariages', title: 'Cérémonie romantique',                   description: 'Une union célébrée dans un décor épuré et élégant.',                  aspectRatio: 'portrait',  src: '/marriage15.jpeg',     mediaType: 'image' },
  { id: 16, type: 'Mariages', title: 'Grand salon décoré',                     description: 'Un espace transformé en havre d\'élégance.',                          aspectRatio: 'landscape', src: '/marriage16.jpeg',     mediaType: 'image' },
  { id: 17, type: 'Mariages', title: 'Fleurs et lumières',                     description: 'L\'alliance parfaite du floral et du lumineux.',                      aspectRatio: 'portrait',  src: '/marriage17.jpeg',     mediaType: 'image' },
  { id: 18, type: 'Mariages', title: 'Mariage intime et élégant',              description: 'Une réception chaleureuse et raffinée.',                               aspectRatio: 'square',    src: '/marriage19.jpeg',     mediaType: 'image' },

  // ── Sdag ──────────────────────────────────────────────────────────────────
  { id: 19, type: 'Sdag', title: 'Présentation des cadeaux traditionnels',     description: 'Mise en scène raffinée pour le sdag.',                                 aspectRatio: 'portrait',  src: '/sdag1.jpeg',          mediaType: 'image' },
  { id: 20, type: 'Sdag', title: 'Sdag élégant et coloré',                     description: 'Cadeaux traditionnels sublimés par une belle décoration.',             aspectRatio: 'landscape', src: '/sdag2.jpeg',          mediaType: 'image' },
  { id: 21, type: 'Sdag', title: 'Art du sdag',                                description: 'Chaque détail soigné pour honorer la tradition.',                      aspectRatio: 'portrait',  src: '/sdag3.jpeg',          mediaType: 'image' },
  { id: 22, type: 'Sdag', title: 'Sdag prestige',                              description: 'Un moment de générosité sublimé avec élégance.',                       aspectRatio: 'square',    src: '/sdag4.jpeg',          mediaType: 'image' },

  // ── Pause café ────────────────────────────────────────────────────────────
  { id: 23, type: 'Pause café', title: 'Espace détente en entreprise',         description: 'Installation élégante pour une pause conviviale.',                     aspectRatio: 'landscape', src: '/pausecafe1.jpeg',     mediaType: 'image' },
  { id: 24, type: 'Pause café', title: 'Pause café en vidéo',                  description: 'Ambiance chaleureuse d\'un espace de détente professionnel.',          aspectRatio: 'landscape', src: '/pausecafe2.mp4',      mediaType: 'video' },
  { id: 25, type: 'Pause café', title: 'Table café décorée',                   description: 'Une mise en scène soignée pour le moment café.',                       aspectRatio: 'square',    src: '/pausecafe3.jpeg',     mediaType: 'image' },
  { id: 26, type: 'Pause café', title: 'Buffet de pause élégant',              description: 'Présentation raffinée pour un break d\'exception.',                    aspectRatio: 'landscape', src: '/pausecafe4.jpeg',     mediaType: 'image' },
  { id: 27, type: 'Pause café', title: 'Coin café élégant',                    description: 'Décoration minimaliste et chaleureuse.',                               aspectRatio: 'portrait',  src: '/pausecafe5.jpeg',     mediaType: 'image' },

  // ── Inaugurations ─────────────────────────────────────────────────────────
  { id: 28, type: 'Inaugurations', title: 'Inauguration en vidéo',             description: 'L\'ouverture officielle capturée en images.',                          aspectRatio: 'landscape', src: '/inauguration1.mp4',   mediaType: 'video' },
  { id: 29, type: 'Inaugurations', title: 'Ruban et fleurs d\'ouverture',      description: 'La coupure du ruban dans une ambiance festive.',                       aspectRatio: 'landscape', src: '/inauguration2.mp4',   mediaType: 'video' },
  { id: 30, type: 'Inaugurations', title: 'Décoration d\'inauguration',        description: 'Compositions florales percutantes pour une première impression mémorable.', aspectRatio: 'portrait', src: '/inauguration3.jpeg', mediaType: 'image' },
  { id: 31, type: 'Inaugurations', title: 'Hall d\'entrée décoré',             description: 'Un accueil grandiose pour les invités.',                               aspectRatio: 'landscape', src: '/inauguration4.jpeg',  mediaType: 'image' },
  { id: 32, type: 'Inaugurations', title: 'Boutique habillée',                 description: 'Décoration élégante pour le lancement d\'une boutique.',              aspectRatio: 'portrait',  src: '/inauguration5.jpeg',  mediaType: 'image' },
  { id: 33, type: 'Inaugurations', title: 'Espace commercial en fête',         description: 'Mise en valeur d\'un nouveau lieu commercial.',                        aspectRatio: 'square',    src: '/inauguration6.jpeg',  mediaType: 'image' },
  { id: 34, type: 'Inaugurations', title: 'Vitrine et fleurs',                 description: 'Compositions florales pour sublimer l\'inauguration.',                aspectRatio: 'landscape', src: '/inauguration7.jpeg',  mediaType: 'image' },
  { id: 35, type: 'Inaugurations', title: 'Ouverture officielle',              description: 'Les coulisses d\'une inauguration réussie.',                           aspectRatio: 'landscape', src: '/inauguration8.mp4',   mediaType: 'video' },
  { id: 36, type: 'Inaugurations', title: 'Ambiance d\'inauguration',          description: 'L\'atmosphère festive d\'une ouverture mémorable.',                   aspectRatio: 'landscape', src: '/inauguration9.mp4',   mediaType: 'video' },
  { id: 37, type: 'Inaugurations', title: 'Espace inauguré',                   description: 'Le résultat d\'une décoration soignée pour le grand jour.',           aspectRatio: 'portrait',  src: '/inauguration10.jpeg', mediaType: 'image' },
  { id: 38, type: 'Inaugurations', title: 'Inauguration en mouvement',         description: 'Une vidéo de l\'événement dans toute sa splendeur.',                  aspectRatio: 'landscape', src: '/inauguration10.mp4',  mediaType: 'video' },
  { id: 39, type: 'Inaugurations', title: 'Décor d\'ouverture',                description: 'Détails floraux et lumineux pour une inauguration de prestige.',      aspectRatio: 'square',    src: '/inauguration11.jpeg', mediaType: 'image' },
  { id: 40, type: 'Inaugurations', title: 'Grand finale d\'inauguration',      description: 'Le clou du spectacle capturé en vidéo.',                              aspectRatio: 'landscape', src: '/inauguration12.mp4',  mediaType: 'video' },

  // ── Fiançailles ───────────────────────────────────────────────────────────
  { id: 41, type: 'Fiançailles', title: 'Soirée de fiançailles romantique',    description: 'Une ambiance intimiste et élégante pour sceller les promesses.',       aspectRatio: 'portrait',  src: '/fiançaille1.jpeg',    mediaType: 'image' },
  { id: 42, type: 'Fiançailles', title: 'Décoration de fiançailles',           description: 'Fleurs et lumières pour une soirée inoubliable.',                      aspectRatio: 'landscape', src: '/fiançaille2.jpeg',    mediaType: 'image' },

  // ── Fête de naissance ─────────────────────────────────────────────────────
  { id: 43, type: 'Fête de naissance', title: 'Bienvenue bébé !',              description: 'Une décoration chaleureuse pour accueillir le nouveau-né.',            aspectRatio: 'portrait',  src: '/fetedenais1.jpeg',    mediaType: 'image' },
  { id: 44, type: 'Fête de naissance', title: 'Chambre bébé décorée',          description: 'Douceur et délicatesse pour fêter l\'arrivée du bébé.',               aspectRatio: 'landscape', src: '/fetedenais2.jpeg',    mediaType: 'image' },
  { id: 45, type: 'Fête de naissance', title: 'Décoration naissance',          description: 'Une mise en scène tendre et joyeuse pour la famille.',                 aspectRatio: 'portrait',  src: '/fetedenais3.jpeg',    mediaType: 'image' },
  { id: 46, type: 'Fête de naissance', title: 'Naissance en vidéo',            description: 'La joie de l\'arrivée d\'un nouveau membre de la famille.',           aspectRatio: 'landscape', src: '/fetedenais4.mp4',     mediaType: 'video' },
  { id: 47, type: 'Fête de naissance', title: 'Célébration naissance',         description: 'Un moment de bonheur partagé en famille.',                            aspectRatio: 'landscape', src: '/fetedenais5.mp4',     mediaType: 'video' },
  { id: 48, type: 'Fête de naissance', title: 'Ambiance naissance',            description: 'Décoration festive et colorée pour fêter la vie.',                    aspectRatio: 'landscape', src: '/fetedenais6.mp4',     mediaType: 'video' },
  { id: 49, type: 'Fête de naissance', title: 'Fête de naissance en images',   description: 'Les moments forts d\'une belle célébration.',                         aspectRatio: 'landscape', src: '/fetedenais7.mp4',     mediaType: 'video' },
  { id: 50, type: 'Fête de naissance', title: 'Décor pastel et douceur',       description: 'Des couleurs tendres pour accueillir le nouveau-né.',                  aspectRatio: 'square',    src: '/fetedenais8.jpeg',    mediaType: 'image' },
  { id: 51, type: 'Fête de naissance', title: 'Table de naissance',            description: 'Une présentation délicate pour fêter la naissance.',                   aspectRatio: 'portrait',  src: '/fetedenais9.jpeg',    mediaType: 'image' },

  // ── Événements professionnels ─────────────────────────────────────────────
  { id: 52, type: 'Événements professionnels', title: 'Séminaire décoré',      description: 'Décoration sobre et moderne pour un événement corporate.',             aspectRatio: 'landscape', src: '/evenementpro1.mp4',   mediaType: 'video' },
  { id: 53, type: 'Événements professionnels', title: 'Salle de conférence',   description: 'Mise en valeur d\'un espace professionnel.',                          aspectRatio: 'portrait',  src: '/evenementpro2.jpeg',  mediaType: 'image' },
  { id: 54, type: 'Événements professionnels', title: 'Événement corporate',   description: 'Ambiance élégante pour un lancement de produit.',                     aspectRatio: 'landscape', src: '/evenementpro3.mp4',   mediaType: 'video' },
  { id: 55, type: 'Événements professionnels', title: 'Gala d\'entreprise',    description: 'Une soirée professionnelle décorée avec raffinement.',                aspectRatio: 'landscape', src: '/evenementpro4.mp4',   mediaType: 'video' },

  // ── Anniversaires ─────────────────────────────────────────────────────────
  { id: 56, type: 'Anniversaires', title: 'Anniversaire chic et festif',       description: 'Une fête colorée et élégante pour un bel anniversaire.',               aspectRatio: 'portrait',  src: '/anniversaire1.jpeg',  mediaType: 'image' },
  { id: 57, type: 'Anniversaires', title: 'Décoration anniversaire',           description: 'Ballons, fleurs et lumières pour un moment inoubliable.',              aspectRatio: 'landscape', src: '/anniversaire2.jpeg',  mediaType: 'image' },
  { id: 58, type: 'Anniversaires', title: 'Table d\'anniversaire',             description: 'Art de la table pour fêter dignement chaque année.',                   aspectRatio: 'square',    src: '/anniversaire3.jpeg',  mediaType: 'image' },
  { id: 59, type: 'Anniversaires', title: 'Ambiance anniversaire dorée',       description: 'Décoration luxueuse pour une fête d\'exception.',                      aspectRatio: 'portrait',  src: '/anniversaire4.jpeg',  mediaType: 'image' },

  // ── Décoration sur mesure ─────────────────────────────────────────────────
  { id: 60, type: 'Décoration sur mesure', title: 'Création sur mesure',       description: 'Un concept unique conçu selon votre vision et votre budget.',          aspectRatio: 'landscape', src: '/decsurmes1.jpeg',     mediaType: 'image' },

  // ── Fête des mères ────────────────────────────────────────────────────────
  { id: 61, type: 'Fête des mères', title: 'Fête des mères en vidéo',          description: 'Décoration tendre et fleurie pour honorer les mamans.',                aspectRatio: 'landscape', src: '/fetedemere1.mp4',     mediaType: 'video' },
];
