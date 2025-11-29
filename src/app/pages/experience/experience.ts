import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data/portfolio-data';
import { fadeIn } from '../../shared/animations/fade-in/fade-in.animate';
import { PillComponent } from '../../shared/components/pill/pill';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, PillComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  animations: [fadeIn],
})
export class ExperiencePage {
  private readonly dataService = inject(PortfolioDataService);
  experienceData = this.dataService.getExperience();
}
