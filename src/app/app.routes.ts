import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { ExperiencePage } from './pages/experience/experience';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects';
import { ResumeComponent } from './pages/resume/resume';
import { SkillsComponent } from './pages/skills/skills';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'experience',
    component: ExperiencePage,
  },
  { path: '**', redirectTo: '' },
];
