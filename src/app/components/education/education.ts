import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
}
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  education: Education[] = [
    {
      title: 'Computer Systems Engineering Student',
      institution: 'University of Auckland',
      period: 'March 2018 - November 2022',
      description:
        'Bachelor of Engineering (Honours) in Computer Systems Engineering, providing core skills and theoretical knowledge.',
    },
    {
      title: 'Fullstack Web Development Student',
      institution: 'Enspiral Dev Academy',
      period: 'March 2020 - June 2020 (800 hours)',
      description: 'Intensive 800-hour bootcamp gaining foundational software development skills.',
    },
  ];
}
