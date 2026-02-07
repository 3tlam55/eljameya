import { Project } from '../entities/Project';
import { ProjectDetails } from '../entities/ProjectDetails';

export interface IProjectRepository {
  findById(id: number): Promise<Project | null>;
  findAll(): Promise<Project[]>;
  findByCategory(category: string): Promise<Project[]>;
  save(project: Project): Promise<void>;
}

export interface IProjectDetailsRepository {
  findByProjectId(projectId: number): Promise<ProjectDetails | null>;
  saveDetails(details: ProjectDetails): Promise<void>;
}
