import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionUiComponent } from './action-ui.component';

describe('JsonActionUiComponent', () => {
  let component: ActionUiComponent;
  let fixture: ComponentFixture<ActionUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
