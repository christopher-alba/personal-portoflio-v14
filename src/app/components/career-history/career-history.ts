import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-career-history',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './career-history.html',
  styleUrl: './career-history.scss',
})
export class CareerHistory {
  jobs: Job[] = [
    {
      title: 'Software Engineer',
      company: 'Turners Automotive Group Digital',
      period: 'July 2023 - Present',
      description:
        'Responsible for creating and maintaining frontend and backend web applications. Worked on AI aspects and designed UI/UX flows in Figma.',
    },
    {
      title: 'Graduate Software Engineer',
      company: 'Turners Automotive Group Digital',
      period: 'June 2022 - July 2023',
      description:
        'Maintained end-to-end integration tests using Java and Playwright. Learned different software flows in the business.',
    },
    {
      title: 'Fullstack Software Developer Intern',
      company: 'Henry Schein One',
      period: 'November 2021 - February 2022 (400 hours)',
      description:
        'Designed and developed web applications in C#, covering both frontend and backend. Presented work to a large online audience.',
    },
    {
      title: 'Frontend Software Engineer Intern',
      company: 'Jasper',
      period: 'November 2020 - February 2021 (416 hours)',
      description:
        'Worked primarily in Javascript/React frontend. Learned GraphQL for API calls instead of REST.',
    },
  ];
}
