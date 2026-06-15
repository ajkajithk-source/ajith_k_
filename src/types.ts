export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  longDescription: string;
  role: string;
  client: string;
  tags: string[];
  link?: string;
}

export type Section = 'works' | 'about' | 'contact';
