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
        name: 'TMDB Movie Web App',
        description:
          'Browse, discover, and dive into movies using live data from The Movie Database (TMDB) API. See now playing films in a carousel, explore popular, top-rated, and upcoming titles, and check full details and cast for each movie. Sleek, interactive, and perfect for film lovers.',
        tech: [
          'Angular',
          'RxJS',
          'NgRx',
          'Angular Material',
          'TMDB API',
          'Github',
          'Github Pages',
          ' Github Actions',
        ],
        demo: 'https://manaloerico.github.io/tmdb-movie-web-app/home',
        repo: 'https://github.com/mock/insight-dashboard',
      },
      {
        name: 'Metrics Dashboard Web App',
        description:
          'Track your personal goals and performance with a secure, interactive dashboard. Login with JWT authentication, view key metrics, explore detailed charts, and monitor streaks and historical trends. Built with Angular and a custom Chart.js library for reusable, data-driven visualizations.',
        tech: [
          'Angular',
          'RxJS',
          'NgRx',
          'Angular Material',
          'Github',
          'Github Pages',
          'Github Actions',
          'NodeJs',
          'JWT',
          'ChartJs',
          'MongoDB',
        ],
        demo: 'https://metrics-dashboard-theta.vercel.app/login',
        repo: 'https://github.com/mock/taskforge',
      },
      {
        name: 'Maneric Charts',
        description:
          'An Angular TypeScript library extending Chart.js for building interactive, customizable charts. Seamlessly adapt to your app’s theme—whether your own, Angular Matrial’s, or the default—while creating visually dynamic and responsive data visualizations.',
        tech: ['Angular', 'ChartsJs', 'Angular Material', 'SCSS', 'NPM'],
        demo: 'https://www.npmjs.com/package/maneric-charts',
        repo: 'https://github.com/mock/devshelf',
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
