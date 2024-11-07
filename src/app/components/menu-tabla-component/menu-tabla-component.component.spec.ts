import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTablaComponentComponent } from './menu-tabla-component.component';

describe('MenuTablaComponentComponent', () => {
  let component: MenuTablaComponentComponent;
  let fixture: ComponentFixture<MenuTablaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuTablaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTablaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
