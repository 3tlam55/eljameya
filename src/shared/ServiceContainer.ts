import { IProjectRepository, IProjectDetailsRepository } from '../domain/repositories/IProjectRepository';
import { InMemoryProjectRepository, InMemoryProjectDetailsRepository } from '../infrastructure/repositories/InMemoryProjectRepository';
import { ProjectQueryService } from '../application/services/ProjectQueryService';
import { ProjectDetailsQueryService } from '../application/services/ProjectDetailsQueryService';

export class ServiceContainer {
  private static instance: ServiceContainer;
  private projectRepository: IProjectRepository;
  private projectDetailsRepository: IProjectDetailsRepository;
  private projectQueryService: ProjectQueryService;
  private projectDetailsQueryService: ProjectDetailsQueryService;

  private constructor() {
    // Initialize repositories
    this.projectRepository = new InMemoryProjectRepository();
    this.projectDetailsRepository = new InMemoryProjectDetailsRepository();

    // Initialize services
    this.projectQueryService = new ProjectQueryService(this.projectRepository);
    this.projectDetailsQueryService = new ProjectDetailsQueryService(this.projectDetailsRepository);
  }

  static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }

  getProjectQueryService(): ProjectQueryService {
    return this.projectQueryService;
  }

  getProjectDetailsQueryService(): ProjectDetailsQueryService {
    return this.projectDetailsQueryService;
  }

  getProjectRepository(): IProjectRepository {
    return this.projectRepository;
  }

  getProjectDetailsRepository(): IProjectDetailsRepository {
    return this.projectDetailsRepository;
  }
}

// Export singleton instance
export const serviceContainer = ServiceContainer.getInstance();
