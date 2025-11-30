import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data/portfolio-data';
import { fadeIn } from '../../shared/animations/fade-in/fade-in.animate';
import { projectStagger } from '../../shared/animations/project-stagger/project-stagger.animate';
import { PillComponent } from '../../shared/components/pill/pill';
import { SectionContainer } from '../../shared/components/section-container/section-container';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, PillComponent, SectionContainer],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  animations: [projectStagger, fadeIn],
})
export class ProjectsComponent {
  constructor() {}
  private readonly dataService = inject(PortfolioDataService);
  projects = this.dataService.getProjects();
}
