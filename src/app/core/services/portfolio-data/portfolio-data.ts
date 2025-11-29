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

  getExperience() {
    return [
      {
        company: 'Manulife IT Delivery Center',
        position: 'Front-End Software Engineer',
        startDate: 'Jan 2022',
        description:
          'I collaborated closely with project managers and cross-functional teams to plan realistic milestones and deliver high-quality software throughout the full development lifecycle. I translated customer requirements into clear technical specifications, built responsive user interfaces for both desktop and mobile, and wrote clean, testable code across multiple projects. I contributed to sprint planning, backlog prioritization, and code reviews, while maintaining shared code libraries to ensure consistency. I also supported QA with testing, bug investigation, and test case development, helping ensure smooth integration and reliable production releases.',
        endDate: null,
        responsibilities: ['asdasdasd', 'asdasdasd'],
        link: undefined,
        techStack: ['Angular', 'TypeScript', 'SCSS', 'NgRx'],
      },
      {
        company: 'Infor PSSC',
        position: 'Front-End Software Engineer',
        startDate: 'Oct 2018',
        endDate: 'Dec 2021',
        description:
          'I collaborated closely with the team to troubleshoot issues, share best practices, and ensure smooth project delivery. I also translated customer requirements into clear technical specifications and successfully migrated Angular applications to newer versions. Throughout the process, I consistently stayed up-to-date with evolving coding standards to maintain reliable and future-ready software.',
        link: undefined,
        techStack: ['Angular', 'TypeScript', 'SCSS', 'NgRx'],
      },
      {
        company: 'Forever Rich Philippines',
        position: 'Full-Stack Developer',
        startDate: 'Sep 2013',
        endDate: 'Oct 2018',
        description:
          'As a Full Stack Developer working with C#, JavaScript, AngularJS, jQuery, and PHP, I helped design and build both front-end and back-end features across multiple web projects. I collaborated closely with the team, contributing ideas during planning, providing updates on progress, and helping resolve issues through debugging and code reviews. On the back end, I developed databases, servers, stored procedures, and API integrations, including shipment and payment processing features. I also supported the creation of dashboards and reports, and assisted users by addressing inquiries and resolving concerns. On the front end, I worked on layouts, graphics, and content collaboration to enhance the website’s overall user experience and visual design.',
        link: undefined,
        techStack: [
          'AngularJs',
          'Angular',
          'JavaScript',
          'TypeScript',
          'JQuery',
          'CSS',
          'PHP',
          'C#',
          'SQL',
          'MySQL',
        ],
      },
    ];
  }
}
