export interface Artist {
  id: number;
  name: string;
  image: string;
  description: string;
  albums: Album[];
  performerPrizes: Prizes[];
}
export interface Album {
  id: number;
  name: string;
  cover: string;
  releaseDate: Date;
  description: string;
  genre: string;
  recordLabel: string;
}

export interface Prizes {
  id: number;
  premiationDate: Date;
}
