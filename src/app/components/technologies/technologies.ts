import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Tech {
  name: string;
  value: number;
}

@Component({
  selector: 'app-technologies',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class TechnologiesComponent {
  technologies: Tech[] = [
    { name: 'Python', value: 2 },
    { name: 'VHDL', value: 3 },
    { name: 'C++', value: 4 },
    { name: 'Blender', value: 5 },
    { name: 'C', value: 6 },
    { name: 'Unity', value: 6 },
    { name: 'Figma', value: 6 },
    { name: 'Node.js', value: 7 },
    { name: 'Java', value: 7 },
    { name: 'Git', value: 7 },
    { name: 'HTML', value: 8 },
    { name: 'JavaScript', value: 8 },
    { name: 'Postgresql', value: 8 },
    { name: 'MongoDB', value: 8 },
    { name: 'AWS', value: 8 },
    { name: 'Angular', value: 9 },
    { name: 'CSS', value: 9 },
    { name: 'ASP.NET C#', value: 10 },
    { name: 'React', value: 10 },
    { name: 'Typescript', value: 10 },
  ];
}
