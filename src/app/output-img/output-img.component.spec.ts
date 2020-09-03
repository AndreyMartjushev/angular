import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputImgComponent } from './output-img.component';

describe('OutputImgComponent', () => {
  let component: OutputImgComponent;
  let fixture: ComponentFixture<OutputImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
