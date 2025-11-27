import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  getPersonalInfo() {
    return {
      name: 'Echo Manalo',
      title: 'Angular Frontend Developer',
      bio: `Lorem ipsum dolor sit amet. Qui distinctio laudantium qui omnis vero quo sunt beatae est soluta ipsa aut dolorem accusantium ut illo cupiditate qui voluptas quas.`,
      location: 'Manila,Philippines',
    };
  }

  getSkills() {
    return {
      frontend: [
        'Angular',
        'TypeScript',
        'RxJS',
        'NgRx',
        'SCSS',
        'TailwindCSS',
        'Angular Material',
      ],
      backend: ['Node.js', 'Express', 'REST APIs', 'Firebase'],
      tooling: ['Webpack', 'Vite', 'Docker', 'Git', 'CI/CD'],
      testing: ['Jasmine', 'Karma', 'Jest', 'Cypress'],
    };
  }

  getProjects() {
    return [
      {
        name: 'Insight Dashboard',
        description:
          'A real-time analytics dashboard with dynamic charts, live metrics and role-based UI.',
        tech: ['Angular', 'RxJS', 'NgRx', 'Chart.js'],
        demo: 'https://demo.insight-dashboard.dev',
        repo: 'https://github.com/mock/insight-dashboard',
      },
      {
        name: 'TaskForge',
        description:
          'A Trello-style task management platform with drag-and-drop and real-time updates.',
        tech: ['Angular', 'Node.js', 'WebSockets'],
        demo: 'https://taskforge.app',
        repo: 'https://github.com/mock/taskforge',
      },
      {
        name: 'DevShelf',
        description: 'Developer resource library with advanced search, filters, and bookmarking.',
        tech: ['Angular', 'Firebase', 'TailwindCSS'],
        demo: 'https://devshelf.io',
        repo: 'https://github.com/mock/devshelf',
      },
      {
        name: 'Portfolio v3',
        description: 'Previous version of portfolio with animations and theming system.',
        tech: ['Angular', 'GSAP', 'SCSS'],
        demo: 'https://alexcarter.dev',
        repo: 'https://github.com/mock/portfolio-v3',
      },
    ];
  }
}
