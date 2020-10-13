import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToXlsxComponent } from './json-to-xlsx.component';

describe('JsonToXlsxComponent', () => {
  let component: JsonToXlsxComponent;
  let fixture: ComponentFixture<JsonToXlsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToXlsxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToXlsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
