import { Project } from '../../domain/entities/Project';
import { ProjectDetails } from '../../domain/entities/ProjectDetails';
import { IProjectRepository, IProjectDetailsRepository } from '../../domain/repositories/IProjectRepository';
import { PROJECTS, PROJECT_DETAILS_MAP } from '../../constants';

export class InMemoryProjectRepository implements IProjectRepository {
  private projects: Map<number, Project> = new Map();

  constructor() {
    this.initializeProjects();
  }

  private initializeProjects(): void {
    PROJECTS.forEach(p => {
      const project = Project.create(
        p.id,
        p.title,
        p.category,
        p.excerpt,
        p.image,
        p.date,
        p.excerpt
      );
      this.projects.set(p.id, project);
    });
  }

  async findById(id: number): Promise<Project | null> {
    return this.projects.get(id) || null;
  }

  async findAll(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async findByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      p => p.getCategory() === category
    );
  }

  async save(project: Project): Promise<void> {
    this.projects.set(project.getId(), project);
  }
}

export class InMemoryProjectDetailsRepository implements IProjectDetailsRepository {
  private details: Map<number, ProjectDetails> = new Map();

  constructor() {
    this.initializeDetails();
  }

  private initializeDetails(): void {
    Object.entries(PROJECT_DETAILS_MAP).forEach(([key, detail]) => {
      const projectId = parseInt(key);
      const projectDetail = ProjectDetails.create(
        projectId,
        detail.fullDescription,
        detail.beneficiaries,
        detail.location,
        detail.frequency,
        detail.details
      );
      this.details.set(projectId, projectDetail);
    });
  }

  async findByProjectId(projectId: number): Promise<ProjectDetails | null> {
    return this.details.get(projectId) || null;
  }

  async saveDetails(details: ProjectDetails): Promise<void> {
    this.details.set(details.getProjectId(), details);
  }
}
