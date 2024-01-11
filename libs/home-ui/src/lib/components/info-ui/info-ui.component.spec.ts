import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoUiComponent } from './info-ui.component';

describe('InfoUiComponent', () => {
  let component: InfoUiComponent;
  let fixture: ComponentFixture<InfoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
