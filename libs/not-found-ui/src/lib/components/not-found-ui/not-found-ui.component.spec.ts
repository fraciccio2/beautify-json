import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundUiComponent } from './not-found-ui.component';

describe('NotFoundUiComponent', () => {
  let component: NotFoundUiComponent;
  let fixture: ComponentFixture<NotFoundUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
