import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Dashboard } from './pages/dashboard/dashboard';
import { JobList } from './pages/job-list/job-list';
import { CvMaker } from './pages/cv-maker/cv-maker';
import { JobTracker } from './pages/job-tracker/job-tracker';
import { ResumeBuilder } from './pages/resume-builder/resume-builder';
import { InterviewTools } from './pages/interview-tools/interview-tools';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'dashboard', component: Dashboard },
  { path: 'jobs', component: JobList },
  { path: 'cv-maker', component: CvMaker },
  { path: 'job-tracker', component: JobTracker },
  { path: 'resume-builder', component: ResumeBuilder },
  { path: 'interview-tools', component: InterviewTools },
];
