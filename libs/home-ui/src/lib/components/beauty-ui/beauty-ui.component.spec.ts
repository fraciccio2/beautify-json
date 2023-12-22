import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeautyUiComponent } from './beauty-ui.component';

describe('BeautyUiComponent', () => {
  let component: BeautyUiComponent;
  let fixture: ComponentFixture<BeautyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeautyUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeautyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
