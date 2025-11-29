import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  imports: [],
  templateUrl: './pill.html',
  styleUrl: './pill.scss',
})
export class PillComponent {
  @Input() label: string = '';
}
