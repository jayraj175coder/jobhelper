import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
      name: [''],
      email: [''],
      summary: [''],
      experience: this.fb.array([
        this.createExperienceGroup()
      ]),
      education: this.fb.array([
        this.createEducationGroup()
      ]),
      skills: ['']
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

  onSubmit() {
    // PDF export logic will go here
  }
} 