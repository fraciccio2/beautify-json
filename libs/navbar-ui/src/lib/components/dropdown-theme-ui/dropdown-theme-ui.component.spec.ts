import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownThemeUiComponent } from './dropdown-theme-ui.component';

describe('DropdownThemeUiComponent', () => {
  let component: DropdownThemeUiComponent;
  let fixture: ComponentFixture<DropdownThemeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownThemeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownThemeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
