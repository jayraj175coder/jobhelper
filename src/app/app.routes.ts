import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Dashboard } from './pages/dashboard/dashboard';
import { JobList } from './pages/job-list/job-list';
import { CvMaker } from './pages/cv-maker/cv-maker';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'dashboard', component: Dashboard },
  { path: 'jobs', component: JobList },
  { path: 'cv-maker', component: CvMaker },
];
