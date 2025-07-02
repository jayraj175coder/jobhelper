import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const DEFAULT_RESUME = {
  name: 'Jane Doe',
  email: 'janedoe@email.com',
  summary: 'Frontend Engineer with 6+ years of experience building scalable web applications. Passionate about UI/UX and modern JavaScript frameworks.',
  experience: [
    {
      jobTitle: 'Senior Software Developer',
      company: 'Company 1',
      startDate: 'Apr 2021',
      endDate: 'present',
      description: '• Led front-end development for major projects.\n• Reviewed code and mentored junior developers.\n• Collaborated with designers to ensure UI/UX best practices.'
    },
    {
      jobTitle: 'Software Developer',
      company: 'Company 2',
      startDate: 'Jun 2015',
      endDate: 'Dec 2017',
      description: '• Developed web applications using Angular and React.\n• Worked closely with clients to gather requirements.\n• Improved application performance by 30%.'
    }
  ],
  education: [
    {
      degree: 'B.Tech (VTU) - Computer Science',
      institution: 'NMAMIT, Nitte',
      startDate: 'Jan 2010',
      endDate: 'Jan 2014',
      description: 'Graduated with First Class Honors.'
    }
  ],
  skills: 'JavaScript, HTML5, CSS, Angular, React, Redux, Firebase'
};

@Component({
  standalone: true,
  selector: 'app-resume-builder',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './resume-builder.html',
  styleUrl: './resume-builder.scss'
})
export class ResumeBuilder {
  resumeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resumeForm = this.fb.group({
      name: [DEFAULT_RESUME.name],
      email: [DEFAULT_RESUME.email],
      summary: [DEFAULT_RESUME.summary],
      experience: this.fb.array(DEFAULT_RESUME.experience.map(exp => this.fb.group({
        jobTitle: [exp.jobTitle],
        company: [exp.company],
        startDate: [exp.startDate],
        endDate: [exp.endDate],
        description: [exp.description]
      }))),
      education: this.fb.array(DEFAULT_RESUME.education.map(edu => this.fb.group({
        degree: [edu.degree],
        institution: [edu.institution],
        startDate: [edu.startDate],
        endDate: [edu.endDate],
        description: [edu.description]
      }))),
      skills: [DEFAULT_RESUME.skills]
    });
  }

  createExperienceGroup() {
    return this.fb.group({
      jobTitle: [''],
      company: [''],
      startDate: [''],
      endDate: [''],
      description: ['']
    });
  }

  createEducationGroup() {
    return this.fb.group({
      degree: [''],
      institution: [''],
      startDate: [''],
      endDate: [''],
      description: ['']
    });
  }

  get experience() {
    return this.resumeForm.get('experience') as FormArray;
  }

  get education() {
    return this.resumeForm.get('education') as FormArray;
  }

  addExperience() {
    this.experience.push(this.createExperienceGroup());
  }

  removeExperience(index: number) {
    this.experience.removeAt(index);
  }

  addEducation() {
    this.education.push(this.createEducationGroup());
  }

  removeEducation(index: number) {
    this.education.removeAt(index);
  }

  resetToDefault() {
    this.resumeForm.reset({
      name: DEFAULT_RESUME.name,
      email: DEFAULT_RESUME.email,
      summary: DEFAULT_RESUME.summary,
      skills: DEFAULT_RESUME.skills
    });
    // Reset experience
    while (this.experience.length > 0) {
      this.experience.removeAt(0);
    }
    DEFAULT_RESUME.experience.forEach(exp => {
      this.experience.push(this.fb.group({
        jobTitle: [exp.jobTitle],
        company: [exp.company],
        startDate: [exp.startDate],
        endDate: [exp.endDate],
        description: [exp.description]
      }));
    });
    // Reset education
    while (this.education.length > 0) {
      this.education.removeAt(0);
    }
    DEFAULT_RESUME.education.forEach(edu => {
      this.education.push(this.fb.group({
        degree: [edu.degree],
        institution: [edu.institution],
        startDate: [edu.startDate],
        endDate: [edu.endDate],
        description: [edu.description]
      }));
    });
  }

  onSubmit() {
    // PDF export logic will go here
  }
} 