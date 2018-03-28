import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesEditAddImagesComponent } from './properties-edit-add-images.component';

describe('PropertiesEditAddImagesComponent', () => {
  let component: PropertiesEditAddImagesComponent;
  let fixture: ComponentFixture<PropertiesEditAddImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesEditAddImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesEditAddImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
