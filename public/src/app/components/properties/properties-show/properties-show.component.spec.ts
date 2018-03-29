import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesShowComponent } from './properties-show.component';

describe('ListingShowComponent', () => {
  let component: PropertiesShowComponent;
  let fixture: ComponentFixture<PropertiesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
