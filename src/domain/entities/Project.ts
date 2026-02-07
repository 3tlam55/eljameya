// Domain Entity: Project
export interface ProjectId {
  value: number;
}

export interface ProjectTitle {
  value: string;
}

export interface ProjectCategory {
  value: string;
}

export interface ProjectDescription {
  value: string;
}

export interface ProjectImage {
  url: string;
}

export class Project {
  private constructor(
    private readonly id: ProjectId,
    private readonly title: ProjectTitle,
    private readonly category: ProjectCategory,
    private readonly description: ProjectDescription,
    private readonly image: ProjectImage,
    private readonly date: string,
    private readonly excerpt: string
  ) {}

  static create(
    id: number,
    title: string,
    category: string,
    description: string,
    imageUrl: string,
    date: string,
    excerpt: string
  ): Project {
    if (!title || title.trim().length === 0) {
      throw new Error('Project title cannot be empty');
    }
    if (!category || category.trim().length === 0) {
      throw new Error('Project category cannot be empty');
    }

    return new Project(
      { value: id },
      { value: title },
      { value: category },
      { value: description },
      { url: imageUrl },
      date,
      excerpt
    );
  }

  getId(): number {
    return this.id.value;
  }

  getTitle(): string {
    return this.title.value;
  }

  getCategory(): string {
    return this.category.value;
  }

  getDescription(): string {
    return this.description.value;
  }

  getImageUrl(): string {
    return this.image.url;
  }

  getDate(): string {
    return this.date;
  }

  getExcerpt(): string {
    return this.excerpt;
  }

  toDTO() {
    return {
      id: this.id.value,
      title: this.title.value,
      category: this.category.value,
      description: this.description.value,
      image: this.image.url,
      date: this.date,
      excerpt: this.excerpt,
    };
  }
}
