export type EventType =
  | 'Mariages'
  | 'Fiançailles'
  | 'Anniversaires'
  | 'Inaugurations'
  | 'Fête des mères'
  | 'Cérémonies'
  | 'Remises';

export interface GalleryEvent {
  id: number;
  type: EventType;
  title: string;
  description: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export const events: GalleryEvent[] = [
  { id: 1, type: 'Mariages', title: 'Mariage Sonia & Karim', description: 'Une cérémonie de mariage élégante décorée en blanc et or.', aspectRatio: 'portrait' },
  { id: 2, type: 'Fiançailles', title: 'Fiançailles Leila & Aymen', description: 'Une soirée de fiançailles romantique avec des fleurs roses.', aspectRatio: 'landscape' },
  { id: 3, type: 'Anniversaires', title: 'Anniversaire 30 ans Nadia', description: 'Une fête chic avec décoration bordeaux et doré.', aspectRatio: 'square' },
  { id: 4, type: 'Mariages', title: 'Mariage Amira & Youssef', description: 'Décoration champêtre avec des fleurs séchées et bougies.', aspectRatio: 'portrait' },
  { id: 5, type: 'Inaugurations', title: 'Inauguration Boutique Luxe', description: 'Décoration inauguration avec ruban rouge et compositions florales.', aspectRatio: 'landscape' },
  { id: 6, type: 'Cérémonies', title: 'Cérémonie de Remise de Prix', description: 'Mise en scène élégante pour une cérémonie officielle.', aspectRatio: 'square' },
  { id: 7, type: 'Fête des mères', title: 'Fête des Mères 2024', description: 'Décoration tendre et fleurie pour honorer les mamans.', aspectRatio: 'portrait' },
  { id: 8, type: 'Remises', title: 'Remise de Diplômes Université', description: 'Décoration académique sobre et élégante.', aspectRatio: 'landscape' },
  { id: 9, type: 'Fiançailles', title: 'Fiançailles Rania & Maher', description: 'Ambiance féérique avec guirlandes lumineuses et voilages.', aspectRatio: 'square' },
  { id: 10, type: 'Anniversaires', title: 'Anniversaire Enfant Théo', description: 'Décoration colorée et joyeuse sur le thème des étoiles.', aspectRatio: 'portrait' },
  { id: 11, type: 'Mariages', title: 'Mariage Mariem & Bilel', description: 'Élégance orientale avec lanternes et soieries dorées.', aspectRatio: 'landscape' },
  { id: 12, type: 'Inaugurations', title: 'Inauguration Restaurant Zitoun', description: 'Décoration chaleureuse au style méditerranéen.', aspectRatio: 'square' },
];
