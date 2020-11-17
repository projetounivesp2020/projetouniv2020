import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacaoPage } from './informacao.page';

describe('InformacaoPage', () => {
  let component: InformacaoPage;
  let fixture: ComponentFixture<InformacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
