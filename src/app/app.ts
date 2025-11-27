import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('personal-web-app');

  private mouseX = 0;
  private mouseY = 0;
  private currentX = 0;
  private currentY = 0;
  // Follow delay factor
  private speed = 0.15;

  ngOnInit(): void {
    const highlight = document.querySelector('.cursor-highlight');
    console.log(highlight);
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    this.animate(highlight);
  }

  private animate(highlight: any): void {
    this.currentX += (this.mouseX - this.currentX) * this.speed;
    this.currentY += (this.mouseY - this.currentY) * this.speed;
    highlight.style.background = `
      radial-gradient(600px at ${this.currentX}px ${this.currentY}px,
      rgba(29, 78, 216, 0.15),
      transparent 80%)
    `;
    requestAnimationFrame(() => this.animate(highlight));
  }
}
