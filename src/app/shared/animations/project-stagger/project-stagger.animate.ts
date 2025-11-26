import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const projectStagger = trigger('projectStagger', [
  transition(':enter', [
    query('.project-card', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(150, animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
    ]),
  ]),
]);
