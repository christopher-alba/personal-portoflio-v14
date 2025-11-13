import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  items = [
    'ASP.NET C#',
    'Angular',
    'TypeScript',
    'CSS',
    'JavaScript',
    'PostgresQL',
    'HTML',
    'SCSS',
    'AWS',
    'Docker',
    'Git',
    'Tailwind CSS',
    'Terraform'
  ];
}
