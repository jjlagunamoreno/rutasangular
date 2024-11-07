import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMultiplicarRoutingComponent } from './tabla-multiplicar-routing.component';

describe('TablaMultiplicarRoutingComponent', () => {
  let component: TablaMultiplicarRoutingComponent;
  let fixture: ComponentFixture<TablaMultiplicarRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
