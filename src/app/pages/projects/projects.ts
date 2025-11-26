import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data/portfolio-data';
import { projectStagger } from '../../shared/animations/project-stagger/project-stagger.animate';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  animations: [projectStagger],
})
export class ProjectsComponent {
  constructor() {}
  private readonly dataService = inject(PortfolioDataService);
  projects = this.dataService.getProjects();
}
