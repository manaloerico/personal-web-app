import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data/portfolio-data';
import { fadeIn } from '../../shared/animations/fade-in/fade-in.animate';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [fadeIn],
})
export class AboutComponent {
  private readonly dataService = inject(PortfolioDataService);
  personalInfo = this.dataService.getPersonalInfo();
  constructor() {}
}
