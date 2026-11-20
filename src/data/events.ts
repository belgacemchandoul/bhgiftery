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
  { id: 1, type: 'Cérémonies', title: 'Cérémonies', description: 'Une décoration raffinée pour une célébration spéciale.', aspectRatio: 'portrait', src: '/cerem2.jpg', mediaType: 'image' },
  { id: 2, type: 'Cérémonies', title: 'Cérémonies', description: 'Une mise en scène élégante et harmonieuse.', aspectRatio: 'portrait', src: '/cerem3.jpg', mediaType: 'image' },
  { id: 3, type: 'Mariages', title: 'Mariage élégant', description: 'Une célébration sublimée par une décoration raffinée.', aspectRatio: 'portrait', src: '/marriage39.jpeg', mediaType: 'image' },
  { id: 4, type: 'Mariages', title: 'Mariage élégant', description: 'Une décoration unique imaginée pour les mariés.', aspectRatio: 'portrait', src: '/marriage38.jpeg', mediaType: 'image' },
  { id: 5, type: 'Fiançailles', title: 'Fiançailles', description: 'Une ambiance romantique pour annoncer les promesses.', aspectRatio: 'portrait', src: '/fiançaille8.jpeg', mediaType: 'image' },
  { id: 6, type: 'Mariages', title: 'Mariage élégant', description: 'Une réception chaleureuse dans un décor harmonieux.', aspectRatio: 'portrait', src: '/marriage37.jpeg', mediaType: 'image' },
  { id: 7, type: 'Mariages', title: 'Mariage élégant', description: 'Une scénographie complète pour le grand jour.', aspectRatio: 'portrait', src: '/marriage36.jpeg', mediaType: 'image' },
  { id: 8, type: 'Mariages', title: 'Mariage élégant', description: 'Une atmosphère féérique pour célébrer l’amour.', aspectRatio: 'portrait', src: '/marriage35.jpeg', mediaType: 'image' },
  { id: 9, type: 'Mariages', title: 'Mariage élégant', description: 'Une décoration intemporelle aux détails soignés.', aspectRatio: 'portrait', src: '/marriage34.jpeg', mediaType: 'image' },
  { id: 10, type: 'Fiançailles', title: 'Fiançailles', description: 'Fleurs et lumières pour un moment précieux.', aspectRatio: 'portrait', src: '/fiançaille7.jpeg', mediaType: 'image' },
  { id: 11, type: 'Mariages', title: 'Mariage élégant', description: 'Une réception romantique pensée dans les moindres détails.', aspectRatio: 'portrait', src: '/marriage33.jpeg', mediaType: 'image' },
  { id: 12, type: 'Cérémonies', title: 'Cérémonies', description: 'Une ambiance distinguée pour une occasion spéciale.', aspectRatio: 'landscape', src: '/cerem1.jpg', mediaType: 'image' },
  { id: 13, type: 'Mariages', title: 'Mariage élégant', description: 'Une décoration lumineuse pour une cérémonie mémorable.', aspectRatio: 'portrait', src: '/marriage32.jpeg', mediaType: 'image' },
  { id: 14, type: 'Mariages', title: 'Mariage élégant', description: 'Une scénographie de prestige pour les mariés.', aspectRatio: 'square', src: '/marriage31.jpeg', mediaType: 'image' },
  { id: 15, type: 'Anniversaires', title: 'Anniversaire sur mesure', description: 'Une fête personnalisée pour célébrer une belle année.', aspectRatio: 'portrait', src: '/anniversaire8.jpeg', mediaType: 'image' },
  { id: 16, type: 'Mariages', title: 'Mariage élégant', description: 'Une décoration élégante imaginée sur mesure.', aspectRatio: 'portrait', src: '/marriage30.jpeg', mediaType: 'image' },
  { id: 17, type: 'Mariages', title: 'Mariage élégant', description: 'Une fête intime sublimée par des détails raffinés.', aspectRatio: 'landscape', src: '/marriage29.jpeg', mediaType: 'image' },
  { id: 18, type: 'Anniversaires', title: 'Anniversaire festif', description: 'Une décoration joyeuse adaptée à chaque âge.', aspectRatio: 'landscape', src: '/anniversaire7.jpeg', mediaType: 'image' },
  { id: 19, type: 'Mariages', title: 'Mariage élégant', description: 'Une réception élégante aux accents dorés.', aspectRatio: 'portrait', src: '/marriage28.jpeg', mediaType: 'image' },
  { id: 20, type: 'Mariages', title: 'Mariage élégant', description: 'Une décoration florale délicate pour le grand jour.', aspectRatio: 'square', src: '/marriage27.jpeg', mediaType: 'image' },
  { id: 21, type: 'Mariages', title: 'Mariage élégant', description: 'Une table d’honneur raffinée pour les mariés.', aspectRatio: 'landscape', src: '/marriage26.jpeg', mediaType: 'image' },
  { id: 22, type: 'Mariages', title: 'Mariage élégant', description: 'Des compositions florales pour une cérémonie élégante.', aspectRatio: 'portrait', src: '/marriage25.jpeg', mediaType: 'image' },
  { id: 23, type: 'Mariages', title: 'Mariage élégant', description: 'Une palette douce pour une célébration romantique.', aspectRatio: 'portrait', src: '/marriage24.jpeg', mediaType: 'image' },
  { id: 24, type: 'Mariages', title: 'Mariage élégant', description: 'Une décoration raffinée pour accueillir les invités.', aspectRatio: 'landscape', src: '/marriage23.jpeg', mediaType: 'image' },
  { id: 25, type: 'Mariages', title: 'Mariage élégant', description: 'Une salle de réception entièrement parée.', aspectRatio: 'square', src: '/marriage22.jpeg', mediaType: 'image' },
  { id: 26, type: 'Mariages', title: 'Mariage élégant', description: 'Une ambiance lumineuse pour une belle célébration.', aspectRatio: 'portrait', src: '/marriage21.jpeg', mediaType: 'image' },
  { id: 27, type: 'Remises de diplômes', title: 'Cérémonie des diplômés', description: 'Une décoration festive pour célébrer une réussite.', aspectRatio: 'portrait', src: '/remisedediplome2.jpeg', mediaType: 'image' },
  { id: 28, type: 'Remises de diplômes', title: 'Remise de diplômes', description: 'Les moments forts d’une cérémonie de réussite.', aspectRatio: 'landscape', src: '/remisedediplome1.mp4', mediaType: 'video' },
  { id: 29, type: 'Événements professionnels', title: 'Accueil professionnel', description: 'Une mise en scène soignée pour recevoir les invités.', aspectRatio: 'square', src: '/evenementpro6.jpeg', mediaType: 'image' },
  { id: 30, type: 'Fiançailles', title: 'Fiançailles', description: 'Une décoration chic pour célébrer les fiancés.', aspectRatio: 'square', src: '/fiançaille6.jpeg', mediaType: 'image' },
  { id: 31, type: 'Événements professionnels', title: 'Réception d’entreprise', description: 'Une décoration élégante pour un événement professionnel.', aspectRatio: 'portrait', src: '/evenementpro5.jpeg', mediaType: 'image' },
  { id: 32, type: 'Événements professionnels', title: 'Événement professionnel', description: 'Une mise en valeur moderne de votre activité.', aspectRatio: 'landscape', src: '/evenementpro3.jpeg', mediaType: 'image' },
  { id: 33, type: 'Mariages', title: 'Mariage élégant', description: 'Une décoration de mariage raffinée.', aspectRatio: 'landscape', src: '/marriage20.jpeg', mediaType: 'image' },
  { id: 34, type: 'Fiançailles', title: 'Fiançailles', description: 'Une soirée romantique sous les lumières.', aspectRatio: 'portrait', src: '/fiançaille5.jpeg', mediaType: 'image' },
  { id: 35, type: 'Fiançailles', title: 'Fiançailles', description: 'Une scénographie douce pour les fiancés.', aspectRatio: 'square', src: '/fiançaille4.jpeg', mediaType: 'image' },
  { id: 36, type: 'Anniversaires', title: 'Décoration anniversaire', description: 'Une fête élégante aux détails colorés.', aspectRatio: 'landscape', src: '/anniversaire6.jpeg', mediaType: 'image' },
  { id: 37, type: 'Anniversaires', title: 'Anniversaire festif', description: 'Une décoration joyeuse pour célébrer un anniversaire.', aspectRatio: 'portrait', src: '/anniversaire5.jpeg', mediaType: 'image' },
  { id: 38, type: 'Fiançailles', title: 'Fiançailles', description: 'Une ambiance tendre pour annoncer les promesses.', aspectRatio: 'portrait', src: '/fiançaille3.jpeg', mediaType: 'image' },
  { id: 39, type: 'Mariages', title: 'Mariage intime', description: 'Une réception chaleureuse et élégante.', aspectRatio: 'square', src: '/marriage19.jpeg', mediaType: 'image' },
  { id: 40, type: 'Événements professionnels', title: 'Gala d’entreprise', description: 'Une soirée professionnelle décorée avec raffinement.', aspectRatio: 'landscape', src: '/evenementpro4.mp4', mediaType: 'video' },
  { id: 41, type: 'Inaugurations', title: 'Inauguration', description: 'Le grand final d’une ouverture mémorable.', aspectRatio: 'landscape', src: '/inauguration12.mp4', mediaType: 'video' },
  { id: 42, type: 'Événements professionnels', title: 'Événement corporate', description: 'Une ambiance élégante pour un lancement professionnel.', aspectRatio: 'landscape', src: '/evenementpro3.mp4', mediaType: 'video' },
  { id: 43, type: 'Mariages', title: 'Mariage élégant', description: 'Fleurs et lumières pour une célébration féérique.', aspectRatio: 'portrait', src: '/marriage17.jpeg', mediaType: 'image' },
  { id: 44, type: 'Mariages', title: 'Mariage élégant', description: 'Un espace transformé en havre d’élégance.', aspectRatio: 'landscape', src: '/marriage16.jpeg', mediaType: 'image' },
  { id: 45, type: 'Mariages', title: 'Mariage élégant', description: 'Une cérémonie romantique dans un décor épuré.', aspectRatio: 'portrait', src: '/marriage15.jpeg', mediaType: 'image' },
  { id: 46, type: 'Mariages', title: 'Mariage élégant', description: 'Une table élégante pour un mariage inoubliable.', aspectRatio: 'square', src: '/marriage14.jpeg', mediaType: 'image' },
  { id: 47, type: 'Inaugurations', title: 'Décoration d’ouverture', description: 'Des détails floraux pour une inauguration prestigieuse.', aspectRatio: 'square', src: '/inauguration11.jpeg', mediaType: 'image' },
  { id: 48, type: 'Fiançailles', title: 'Décoration de fiançailles', description: 'Fleurs et lumières pour une soirée inoubliable.', aspectRatio: 'landscape', src: '/fiançaille2.jpeg', mediaType: 'image' },
  { id: 49, type: 'Fiançailles', title: 'Fiançailles romantiques', description: 'Une ambiance intime pour sceller les promesses.', aspectRatio: 'portrait', src: '/fiançaille1.jpeg', mediaType: 'image' },
  { id: 50, type: 'Sdag', title: 'Sdag prestige', description: 'Un moment de générosité sublimé avec élégance.', aspectRatio: 'square', src: '/sdag4.jpeg', mediaType: 'image' },
  { id: 51, type: 'Événements professionnels', title: 'Salle de conférence', description: 'Une mise en valeur élégante d’un espace professionnel.', aspectRatio: 'portrait', src: '/evenementpro2.jpeg', mediaType: 'image' },
  { id: 52, type: 'Pause café', title: 'Coin café élégant', description: 'Une décoration minimaliste et chaleureuse.', aspectRatio: 'portrait', src: '/pausecafe5.jpeg', mediaType: 'image' },
  { id: 53, type: 'Fête de naissance', title: 'Table de naissance', description: 'Une présentation délicate pour accueillir le nouveau-né.', aspectRatio: 'portrait', src: '/fetedenais9.jpeg', mediaType: 'image' },
  { id: 54, type: 'Mariages', title: 'Mariage élégant', description: 'Une mise en lumière féerique pour la célébration.', aspectRatio: 'portrait', src: '/marriage13.jpeg', mediaType: 'image' },
  { id: 55, type: 'Anniversaires', title: 'Anniversaire doré', description: 'Une décoration luxueuse pour une fête d’exception.', aspectRatio: 'portrait', src: '/anniversaire4.jpeg', mediaType: 'image' },
  { id: 56, type: 'Mariages', title: 'Mariage élégant', description: 'Des compositions florales en blanc pour le grand jour.', aspectRatio: 'landscape', src: '/marriage12.jpeg', mediaType: 'image' },
  { id: 57, type: 'Mariages', title: 'Mariage oriental', description: 'Élégance orientale avec lanternes et touches dorées.', aspectRatio: 'portrait', src: '/marriage11.jpeg', mediaType: 'image' },
  { id: 58, type: 'Sdag', title: 'Art du sdag', description: 'Chaque détail soigné pour honorer la tradition.', aspectRatio: 'portrait', src: '/sdag3.jpeg', mediaType: 'image' },
  { id: 59, type: 'Sdag', title: 'Sdag élégant', description: 'Des cadeaux traditionnels sublimés par une belle décoration.', aspectRatio: 'landscape', src: '/sdag2.jpeg', mediaType: 'image' },
  { id: 60, type: 'Pause café', title: 'Buffet de pause élégant', description: 'Une présentation raffinée pour un moment convivial.', aspectRatio: 'landscape', src: '/pausecafe4.jpeg', mediaType: 'image' },
  { id: 61, type: 'Pause café', title: 'Table café décorée', description: 'Une mise en scène soignée pour le café.', aspectRatio: 'square', src: '/pausecafe3.jpeg', mediaType: 'image' },
  { id: 62, type: 'Mariages', title: 'Mariage élégant', description: 'Les détails qui rendent une réception exceptionnelle.', aspectRatio: 'square', src: '/marriage10.jpeg', mediaType: 'image' },
  { id: 63, type: 'Fête de naissance', title: 'Décor pastel', description: 'Des couleurs tendres pour accueillir le nouveau-né.', aspectRatio: 'square', src: '/fetedenais8.jpeg', mediaType: 'image' },
  { id: 64, type: 'Mariages', title: 'Mariage en mouvement', description: 'Les moments forts d’une célébration inoubliable.', aspectRatio: 'landscape', src: '/marriage9.mp4', mediaType: 'video' },
  { id: 65, type: 'Pause café', title: 'Pause café en vidéo', description: 'Une ambiance chaleureuse pour un moment professionnel.', aspectRatio: 'landscape', src: '/pausecafe2.mp4', mediaType: 'video' },
  { id: 66, type: 'Inaugurations', title: 'Inauguration en mouvement', description: 'Une ouverture capturée en vidéo.', aspectRatio: 'landscape', src: '/inauguration10.mp4', mediaType: 'video' },
  { id: 67, type: 'Fête de naissance', title: 'Fête de naissance', description: 'Les moments forts d’une belle célébration.', aspectRatio: 'landscape', src: '/fetedenais7.mp4', mediaType: 'video' },
  { id: 68, type: 'Fête de naissance', title: 'Ambiance naissance', description: 'Une décoration festive pour célébrer la vie.', aspectRatio: 'landscape', src: '/fetedenais6.mp4', mediaType: 'video' },
  { id: 69, type: 'Fête de naissance', title: 'Célébration naissance', description: 'Un moment de bonheur partagé en famille.', aspectRatio: 'landscape', src: '/fetedenais5.mp4', mediaType: 'video' },
  { id: 70, type: 'Fête de naissance', title: 'Naissance en vidéo', description: 'La joie de l’arrivée d’un nouveau membre de la famille.', aspectRatio: 'landscape', src: '/fetedenais4.mp4', mediaType: 'video' },
  { id: 71, type: 'Sdag', title: 'Sdag traditionnel', description: 'Une présentation raffinée des cadeaux traditionnels.', aspectRatio: 'portrait', src: '/sdag1.jpeg', mediaType: 'image' },
  { id: 72, type: 'Décoration sur mesure', title: 'Création sur mesure', description: 'Un concept unique conçu selon votre vision.', aspectRatio: 'landscape', src: '/decsurmes1.jpeg', mediaType: 'image' },
  { id: 73, type: 'Fête de naissance', title: 'Décoration naissance', description: 'Une mise en scène tendre et joyeuse.', aspectRatio: 'portrait', src: '/fetedenais3.jpeg', mediaType: 'image' },
  { id: 74, type: 'Fête de naissance', title: 'Chambre bébé décorée', description: 'Douceur et délicatesse pour accueillir le bébé.', aspectRatio: 'landscape', src: '/fetedenais2.jpeg', mediaType: 'image' },
  { id: 75, type: 'Mariages', title: 'Mariage champêtre', description: 'Une décoration naturelle et romantique.', aspectRatio: 'landscape', src: '/marriage8.mp4', mediaType: 'video' },
  { id: 76, type: 'Inaugurations', title: 'Espace inauguré', description: 'Le résultat d’une décoration soignée pour une ouverture.', aspectRatio: 'portrait', src: '/inauguration10.jpeg', mediaType: 'image' },
  { id: 77, type: 'Mariages', title: 'Arche florale', description: 'Une arche spectaculaire pour la cérémonie.', aspectRatio: 'portrait', src: '/marriage7.jpeg', mediaType: 'image' },
  { id: 78, type: 'Mariages', title: 'Ambiance dorée', description: 'Des lumières chaudes pour une réception luxueuse.', aspectRatio: 'landscape', src: '/marriage6.mp4', mediaType: 'video' },
  { id: 79, type: 'Anniversaires', title: 'Table anniversaire', description: 'Une table festive pour célébrer dignement.', aspectRatio: 'square', src: '/anniversaire3.jpeg', mediaType: 'image' },
  { id: 80, type: 'Mariages', title: 'Cérémonie en mouvement', description: 'L’atmosphère du grand jour capturée en vidéo.', aspectRatio: 'landscape', src: '/marriage5.mp4', mediaType: 'video' },
  { id: 81, type: 'Inaugurations', title: 'Ambiance d’inauguration', description: 'Une atmosphère festive pour une ouverture mémorable.', aspectRatio: 'landscape', src: '/inauguration9.mp4', mediaType: 'video' },
  { id: 82, type: 'Fête de naissance', title: 'Bienvenue bébé', description: 'Une décoration chaleureuse pour accueillir le nouveau-né.', aspectRatio: 'portrait', src: '/fetedenais1.jpeg', mediaType: 'image' },
  { id: 83, type: 'Inaugurations', title: 'Ouverture officielle', description: 'Les moments forts d’une inauguration réussie.', aspectRatio: 'landscape', src: '/inauguration8.mp4', mediaType: 'video' },
  { id: 84, type: 'Anniversaires', title: 'Décoration anniversaire', description: 'Ballons, fleurs et lumières pour un moment inoubliable.', aspectRatio: 'landscape', src: '/anniversaire2.jpeg', mediaType: 'image' },
  { id: 85, type: 'Anniversaires', title: 'Anniversaire chic', description: 'Une fête colorée et élégante.', aspectRatio: 'portrait', src: '/anniversaire1.jpeg', mediaType: 'image' },
  { id: 86, type: 'Inaugurations', title: 'Vitrine décorée', description: 'Des fleurs pour sublimer une inauguration.', aspectRatio: 'landscape', src: '/inauguration7.jpeg', mediaType: 'image' },
  { id: 87, type: 'Inaugurations', title: 'Espace commercial', description: 'Une mise en valeur d’un nouveau lieu.', aspectRatio: 'square', src: '/inauguration6.jpeg', mediaType: 'image' },
  { id: 88, type: 'Inaugurations', title: 'Boutique habillée', description: 'Une décoration élégante pour le lancement d’une boutique.', aspectRatio: 'portrait', src: '/inauguration5.jpeg', mediaType: 'image' },
  { id: 89, type: 'Inaugurations', title: 'Hall décoré', description: 'Un accueil grandiose pour les invités.', aspectRatio: 'landscape', src: '/inauguration4.jpeg', mediaType: 'image' },
  { id: 90, type: 'Événements professionnels', title: 'Séminaire décoré', description: 'Une décoration moderne pour un événement corporate.', aspectRatio: 'landscape', src: '/evenementpro1.mp4', mediaType: 'video' },
  { id: 91, type: 'Mariages', title: 'Table d’honneur', description: 'Une mise en scène élégante pour les mariés.', aspectRatio: 'portrait', src: '/marriage4.jpeg', mediaType: 'image' },
  { id: 92, type: 'Mariages', title: 'Mariage en mouvement', description: 'Les moments forts d’une célébration de mariage.', aspectRatio: 'landscape', src: '/marriage3.mp4', mediaType: 'video' },
  { id: 93, type: 'Inaugurations', title: 'Décoration d’inauguration', description: 'Des compositions florales pour une première impression mémorable.', aspectRatio: 'portrait', src: '/inauguration3.jpeg', mediaType: 'image' },
  { id: 94, type: 'Inaugurations', title: 'Ruban et fleurs', description: 'Une coupure de ruban dans une ambiance festive.', aspectRatio: 'landscape', src: '/inauguration2.mp4', mediaType: 'video' },
  { id: 95, type: 'Fête des mères', title: 'Fête des mères', description: 'Une décoration tendre et fleurie pour honorer les mamans.', aspectRatio: 'landscape', src: '/fetedemere1.mp4', mediaType: 'video' },
  { id: 96, type: 'Pause café', title: 'Espace détente', description: 'Une installation élégante pour une pause conviviale.', aspectRatio: 'landscape', src: '/pausecafe1.jpeg', mediaType: 'image' },
  { id: 97, type: 'Inaugurations', title: 'Inauguration en mouvement', description: 'Une ouverture officielle capturée en images.', aspectRatio: 'landscape', src: '/inauguration1.mp4', mediaType: 'video' },
  { id: 98, type: 'Mariages', title: 'Décoration florale', description: 'Des compositions florales délicates pour une ambiance féérique.', aspectRatio: 'landscape', src: '/marriage2.jpeg', mediaType: 'image' },
  { id: 99, type: 'Mariages', title: 'Mariage élégant', description: 'Une cérémonie somptueuse décorée avec soin.', aspectRatio: 'portrait', src: '/marriage1.jpeg', mediaType: 'image' },
];
