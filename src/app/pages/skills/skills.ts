import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data/portfolio-data';
import { listStagger } from '../../shared/animations/list-stagger/list-stagger.animate';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  animations: [listStagger],
})
export class SkillsComponent {
  private readonly dataService = inject(PortfolioDataService);
  skills = this.dataService.getSkills();
}
