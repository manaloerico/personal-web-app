import { Component } from '@angular/core';
import { fadeIn } from '../../shared/animations/fade-in/fade-in.animate';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  animations: [fadeIn],
})
export class ResumeComponent {}
