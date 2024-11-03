/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { PlantasComponent } from './plantas.component';
import { PlantaService } from './planta.service';
import { Planta } from './planta';

describe('BookListComponent', () => {
 let component: PlantasComponent;
 let fixture: ComponentFixture<PlantasComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PlantasComponent ],
     providers: [ PlantaService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(PlantasComponent);
   component = fixture.componentInstance;
   component.plantas = [
     new Planta(faker.number.int(), faker.person.fullName(),faker.lorem.sentence(),faker.number.int(),faker.lorem.sentence(),faker.lorem.sentence() )
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.plantas[0].nombre_comun)
 });


});