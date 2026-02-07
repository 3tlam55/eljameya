// Domain Entity: ProjectDetails (Value Object)
export interface ProjectDetailInfo {
  fullDescription: string;
  beneficiaries: string;
  location: string;
  frequency: string;
  details: string[];
}

export class ProjectDetails {
  private constructor(
    private readonly projectId: number,
    private readonly info: ProjectDetailInfo
  ) {}

  static create(
    projectId: number,
    fullDescription: string,
    beneficiaries: string,
    location: string,
    frequency: string,
    details: string[]
  ): ProjectDetails {
    if (!fullDescription || fullDescription.trim().length === 0) {
      throw new Error('Project description cannot be empty');
    }
    if (!details || details.length === 0) {
      throw new Error('Project must have at least one detail');
    }

    return new ProjectDetails(projectId, {
      fullDescription,
      beneficiaries,
      location,
      frequency,
      details,
    });
  }

  getProjectId(): number {
    return this.projectId;
  }

  getFullDescription(): string {
    return this.info.fullDescription;
  }

  getBeneficiaries(): string {
    return this.info.beneficiaries;
  }

  getLocation(): string {
    return this.info.location;
  }

  getFrequency(): string {
    return this.info.frequency;
  }

  getDetails(): string[] {
    return this.info.details;
  }

  toDTO(): ProjectDetailInfo {
    return { ...this.info };
  }
}
