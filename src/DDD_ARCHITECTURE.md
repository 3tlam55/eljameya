# Domain-Driven Design (DDD) Architecture

## Project Structure

```
src/
├── domain/                          # Core business logic (Domain Layer)
│   ├── entities/
│   │   ├── Project.ts              # Project entity with value objects
│   │   └── ProjectDetails.ts       # ProjectDetails value object
│   └── repositories/
│       └── IProjectRepository.ts   # Repository interfaces (contracts)
│
├── application/                     # Application services (Use Cases)
│   └── services/
│       ├── ProjectQueryService.ts  # Query service for projects
│       └── ProjectDetailsQueryService.ts  # Query service for details
│
├── infrastructure/                  # External implementations
│   └── repositories/
│       └── InMemoryProjectRepository.ts  # Repository implementations
│
├── presentation/                    # UI Components (React)
│   └── components/                 # Reusable UI components
│
├── shared/                         # Shared utilities and types
│   ├── ServiceContainer.ts         # Dependency injection
│   └── types.ts                    # Shared DTOs and interfaces
│
└── constants.ts                    # Application constants and data
```

## Architecture Layers

### 1. Domain Layer (`/domain`)
- **Purpose**: Contains core business logic and entities
- **Entities**: `Project`, `ProjectDetails`
- **Value Objects**: `ProjectId`, `ProjectTitle`, `ProjectCategory`, etc.
- **Repositories (Interfaces)**: Contracts for data access without implementation details

### 2. Application Layer (`/application`)
- **Purpose**: Implements use cases and application services
- **Services**:
  - `ProjectQueryService`: Handles project queries (getAll, getById, filterByCategory)
  - `ProjectDetailsQueryService`: Handles project detail queries

### 3. Infrastructure Layer (`/infrastructure`)
- **Purpose**: Implements technical details and repositories
- **Repositories**: `InMemoryProjectRepository`, `InMemoryProjectDetailsRepository`
- Adapts domain interfaces to concrete implementations

### 4. Presentation Layer (`/presentation`)
- **Purpose**: React components and UI logic
- Uses injected services from `ServiceContainer`
- Components remain independent of business logic details

### 5. Shared Layer (`/shared`)
- **Purpose**: Cross-cutting concerns and utilities
- `ServiceContainer`: Dependency injection and singleton management
- `types.ts`: Shared DTOs and type definitions

## Key DDD Principles Applied

### ✅ Entities vs Value Objects
- **Entities**: Have identity (Project with id)
- **Value Objects**: No identity, immutable (ProjectTitle, ProjectCategory)

### ✅ Repository Pattern
- Interfaces defined in domain layer
- Implementations in infrastructure layer
- Allows easy switching between storage mechanisms (in-memory, API, database)

### ✅ Dependency Injection
- Services injected through `ServiceContainer`
- Loosely coupled components
- Easy to test and maintain

### ✅ Clear Separation of Concerns
- Domain logic separated from UI
- Business rules isolated from technical details
- Easy to modify business logic without touching UI

### ✅ Service Layer Pattern
- Query services for read operations
- Application services handle complex business logic
- Prevents logic duplication

## Usage Example

```typescript
// In a React component
import { serviceContainer } from '../shared/ServiceContainer';

const projectService = serviceContainer.getProjectQueryService();
const projects = await projectService.getAllProjects();
```

## Benefits of This Structure

1. **Maintainability**: Clear separation makes code easier to understand and modify
2. **Testability**: Each layer can be tested independently
3. **Scalability**: Easy to add new features without affecting existing code
4. **Flexibility**: Can switch implementations (e.g., from in-memory to API)
5. **Reusability**: Business logic can be reused across different UI frameworks
6. **Domain Clarity**: Business logic is explicit and centralized

## Adding New Features

To add a new project feature following DDD:

1. **Domain**: Create entity/value object in `/domain/entities/`
2. **Repository**: Create interface in `/domain/repositories/`
3. **Application**: Create service in `/application/services/`
4. **Infrastructure**: Implement repository in `/infrastructure/repositories/`
5. **Presentation**: Create components using injected services
