/* tslint:disable:no-unused-variable */

import { TestBed,inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppComponent } from '../app.component';
import { PlantasComponent } from './plantas.component';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Planta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
      providers: [PlantaService],
      declarations: [AppComponent,PlantasComponent]
    });
  });

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
