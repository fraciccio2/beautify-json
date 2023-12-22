import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextUiComponent } from './text-ui.component';

describe('TextUiComponent', () => {
  let component: TextUiComponent;
  let fixture: ComponentFixture<TextUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
