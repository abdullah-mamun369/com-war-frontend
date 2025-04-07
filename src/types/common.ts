export interface Player {
  fullName: string;
  surName: string;
  age: number;
  battingStyle: string;
  bowlingStyle: string;
  wicketKepper: string;
  nationality: string;
  playerSince: string | number;
  biohraphy: string;
  email: string;
  squadImage: string;
  profileImage: string;
}

export interface AppContextType {
  player: Player | {};
  setPlayer: (player: Player | {}) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
}
