export interface Load {
  id: string;
  origin: string;
  destination: string;
  equipment: string;
  weight: string;
  rate: string;
  date: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  client: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
