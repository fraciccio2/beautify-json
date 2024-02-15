import { Component, inject, OnInit } from '@angular/core';
import { NgThemeService } from '@beautify-json/ng';
import { ThemeType } from '@beautify-json/home-util';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'beautify-json-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private ngThemeService = inject(NgThemeService);

  darkStyle$ = this.ngThemeService.darkStyle$;
  theme$ = this.ngThemeService.theme$;

  ngOnInit() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (value) => {
        this.checkTheme(value.matches);
      });
    this.ngThemeService.theme$.pipe(distinctUntilChanged()).subscribe(() => {
      this.checkTheme(
        !!(
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
        )
      );
    });
  }

  checkTheme(match: boolean) {
    let theme = localStorage.getItem('theme');
    if (!theme) {
      localStorage.setItem('theme', 'auto');
      theme = 'auto';
    }
    this.ngThemeService.setTheme(theme as ThemeType);
    if (match) {
      if (theme === 'auto' || theme === 'dark') {
        this.ngThemeService.setDarkStyle(true);
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        this.ngThemeService.setDarkStyle(false);
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
    } else {
      if (theme === 'auto' || theme === 'light') {
        this.ngThemeService.setDarkStyle(false);
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      } else {
        this.ngThemeService.setDarkStyle(true);
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    }
  }
}
