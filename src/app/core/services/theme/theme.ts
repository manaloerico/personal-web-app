import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'portfolio-theme';

  constructor() {
    const saved = localStorage.getItem(this.themeKey) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(this.themeKey, next);
  }
}
