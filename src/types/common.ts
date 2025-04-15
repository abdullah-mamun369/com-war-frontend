export interface Player {
  id: string | number;
  fullName: string;
  surName: string;
  age: number;
  battingStyle: string;
  bowlingStyle: string;
  wicketKepper: string;
  nationality: string;
  playerSince: string | number;
  biography: string;
  email: string;
  squadImage: string;
  profileImage: string;
}

export interface GalleryImage {
  _id: number;
  url: string;
  alt: string;
  title: string;
}

export interface AppContextType {
  player: Player | {};
  setPlayer: (player: Player | {}) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
  galleryImages: GalleryImage[];
  setGalleryImages: (images: GalleryImage[]) => void;
}
