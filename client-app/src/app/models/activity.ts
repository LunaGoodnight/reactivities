export interface Activity {
  id: string;
  title: string;
  date: string;
  category: string;
  city: string;
  venue: string;
  description: string;
}

export interface MangaLink {
  id: string;
  title: string;
  domain: string;
}

export interface ItemInterface {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
}
