export interface IPost {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  resume: string;
  date?: string;
  content?: string;
}

export interface ISearch {
  name: string;
  image: string;
  typeUrl: string;
}

export interface IContent {
  posts?: {
    id: number;
    category: string;
    title: string;
    resume: string;
    imageUrl?: string;
    content?: string;
    date?: string;
  };
  content?: {
    id: number;
    category: string;
    title: string;
    resume: string;
    imageUrl?: string;
    content?: string;
    date?: string;
  };
}
