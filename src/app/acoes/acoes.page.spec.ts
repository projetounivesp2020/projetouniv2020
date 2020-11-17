import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcoesPage } from './acoes.page';

describe('AcoesPage', () => {
  let component: AcoesPage;
  let fixture: ComponentFixture<AcoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
