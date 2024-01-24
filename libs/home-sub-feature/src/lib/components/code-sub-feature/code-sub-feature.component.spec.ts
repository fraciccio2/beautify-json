import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeSubFeatureComponent } from './code-sub-feature.component';

describe('CodeSubFeatureComponent', () => {
  let component: CodeSubFeatureComponent;
  let fixture: ComponentFixture<CodeSubFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeSubFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeSubFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
