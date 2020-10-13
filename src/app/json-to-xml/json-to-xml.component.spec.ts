import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToXmlComponent } from './json-to-xml.component';

describe('JsonToXmlComponent', () => {
  let component: JsonToXmlComponent;
  let fixture: ComponentFixture<JsonToXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToXmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
