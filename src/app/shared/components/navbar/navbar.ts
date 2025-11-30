import { Component, HostBinding, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../core/services/theme/theme';
import { NavItem } from './nav-item/nav-item';

export type NavBarOrientation = 'horizontal' | 'vertical';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NavItem],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private theme: ThemeService) {}

  public activeSection: string = '';
  @HostBinding('class')
  get hostClasses(): string {
    return `navbar__${this.orientation}`;
  }

  @Input()
  public orientation: NavBarOrientation = 'horizontal';

  toggleTheme() {
    this.theme.toggleTheme();
  }

  onClick(section: string) {
    this.activeSection = section;
  }
}
