import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data/portfolio-data';
import { fadeIn } from '../../shared/animations/fade-in/fade-in.animate';
import { projectStagger } from '../../shared/animations/project-stagger/project-stagger.animate';
import { PillComponent } from '../../shared/components/pill/pill';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, PillComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  animations: [projectStagger, fadeIn],
})
export class ProjectsComponent {
  constructor() {}
  private readonly dataService = inject(PortfolioDataService);
  projects = this.dataService.getProjects();
}
