import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownLanguageUiComponent } from './dropdown-language-ui.component';

describe('DropdownLanguageUiComponent', () => {
  let component: DropdownLanguageUiComponent;
  let fixture: ComponentFixture<DropdownLanguageUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownLanguageUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownLanguageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
