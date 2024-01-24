import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeUiComponent } from './code-ui.component';

describe('CodeUiComponent', () => {
  let component: CodeUiComponent;
  let fixture: ComponentFixture<CodeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
