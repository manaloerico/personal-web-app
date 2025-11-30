import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  imports: [CommonModule],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.scss',
})
export class NavItem {
  @Input()
  public label: string = '';
  @Input()
  public sectionName: string = '';
  @Input()
  public activeSection: string = '';

  @Output()
  sectionClicked = new EventEmitter<string>();
}
