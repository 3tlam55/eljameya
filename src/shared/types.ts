export interface ProjectDTO {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  excerpt: string;
}

export interface ProjectDetailDTO {
  fullDescription: string;
  beneficiaries: string;
  location: string;
  frequency: string;
  details: string[];
}

export interface ProjectsResponse {
  projects: ProjectDTO[];
  categories: string[];
}

export interface ProjectDetailResponse {
  project: ProjectDTO;
  details: ProjectDetailDTO;
}
