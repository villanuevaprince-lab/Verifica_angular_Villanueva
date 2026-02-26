import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInterrogazione } from './componente-interrogazione';

describe('ComponenteInterrogazione', () => {
  let component: ComponenteInterrogazione;
  let fixture: ComponentFixture<ComponenteInterrogazione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteInterrogazione]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteInterrogazione);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
