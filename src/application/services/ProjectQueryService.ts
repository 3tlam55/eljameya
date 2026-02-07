import { Project } from '../../domain/entities/Project';
import { IProjectRepository } from '../../domain/repositories/IProjectRepository';

export class ProjectQueryService {
  constructor(private projectRepository: IProjectRepository) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }

  async getProjectById(id: number): Promise<Project | null> {
    return this.projectRepository.findById(id);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return this.projectRepository.findByCategory(category);
  }

  async getCategories(): Promise<string[]> {
    const projects = await this.projectRepository.findAll();
    const categories = new Set(projects.map(p => p.getCategory()));
    return Array.from(categories).sort();
  }

  async filterProjectsByCategory(category: string): Promise<Project[]> {
    if (category === 'الكل') {
      return this.getAllProjects();
    }
    return this.getProjectsByCategory(category);
  }
}
