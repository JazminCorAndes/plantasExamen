import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlantasComponent } from './plantas/plantas.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
         AppComponent,PlantasComponent
      ],
      declarations: [
        
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'parcial'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('parcial');
  });

});