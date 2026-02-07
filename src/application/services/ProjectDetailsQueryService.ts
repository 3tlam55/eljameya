import { ProjectDetails } from '../../domain/entities/ProjectDetails';
import { IProjectDetailsRepository } from '../../domain/repositories/IProjectRepository';

export class ProjectDetailsQueryService {
  constructor(private projectDetailsRepository: IProjectDetailsRepository) {}

  async getProjectDetails(projectId: number): Promise<ProjectDetails | null> {
    return this.projectDetailsRepository.findByProjectId(projectId);
  }

  async validateProjectExists(projectId: number): Promise<boolean> {
    const details = await this.projectDetailsRepository.findByProjectId(projectId);
    return details !== null;
  }
}
