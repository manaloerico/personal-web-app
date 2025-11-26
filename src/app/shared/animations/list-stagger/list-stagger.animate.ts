import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const listStagger = trigger('listStagger', [
  transition(':enter', [
    query('li', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      stagger(100, animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
    ]),
  ]),
]);
