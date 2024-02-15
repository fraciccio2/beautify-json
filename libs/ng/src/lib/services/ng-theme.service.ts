import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeType } from '@beautify-json/home-util';

@Injectable({
  providedIn: 'root',
})
export class NgThemeService {
  private darkStyle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private theme: BehaviorSubject<ThemeType> = new BehaviorSubject<ThemeType>(
    'auto'
  );
  public darkStyle$ = this.darkStyle.asObservable();
  public theme$ = this.theme.asObservable();

  setDarkStyle(value: boolean) {
    this.darkStyle.next(value);
  }

  setTheme(value: ThemeType) {
    this.theme.next(value);
  }
}
