import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  standalone: true,
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements OnInit {
  isDark = false;

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        this.isDark = true;
        document.documentElement.classList.add('dark');
      } else if (stored === 'light') {
        this.isDark = false;
        document.documentElement.classList.remove('dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDark = prefersDark;
        if (prefersDark) document.documentElement.classList.add('dark');
      }
    }
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark');
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }
  }
}
