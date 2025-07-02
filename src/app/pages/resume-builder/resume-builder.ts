import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-resume-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './resume-builder.html',
  styleUrl: './resume-builder.scss'
})
export class ResumeBuilder {
  resumeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resumeForm = this.fb.group({
      name: [''],
      email: [''],
      experience: this.fb.array([
        this.fb.control('')
      ]),
      education: this.fb.array([
        this.fb.control('')
      ]),
      skills: ['']
    });
  }

  get experience() {
    return this.resumeForm.get('experience') as FormArray;
  }

  get education() {
    return this.resumeForm.get('education') as FormArray;
  }

  addExperience() {
    this.experience.push(this.fb.control(''));
  }

  removeExperience(index: number) {
    this.experience.removeAt(index);
  }

  addEducation() {
    this.education.push(this.fb.control(''));
  }

  removeEducation(index: number) {
    this.education.removeAt(index);
  }

  onSubmit() {
    // PDF export logic will go here
  }
} 