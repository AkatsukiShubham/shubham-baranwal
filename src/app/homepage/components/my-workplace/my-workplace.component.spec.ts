import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkplaceComponent } from './my-workplace.component';

describe('MyWorkplaceComponent', () => {
  let component: MyWorkplaceComponent;
  let fixture: ComponentFixture<MyWorkplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
