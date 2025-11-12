import { Component } from '@angular/core';
import { Nav } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { TechnologiesComponent } from './components/technologies/technologies';
import { CareerHistory } from './components/career-history/career-history';
import { EducationComponent } from './components/education/education';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, Hero, About, TechnologiesComponent, CareerHistory, EducationComponent, Footer],
  templateUrl: './app.html',
})
export class AppComponent {}
