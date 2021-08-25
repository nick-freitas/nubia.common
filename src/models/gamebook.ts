export interface Gamebook {
  id: string;
  title: string;
  description?: string;
  authorId: string;
  imageSrc?: string;
  price?: number;
  version?: number;
}
