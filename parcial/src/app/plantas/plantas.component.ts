import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css'],
  imports: [CommonModule],
})
export class PlantasComponent implements OnInit {

  plantas: Array<Planta>=[]
  totalPInterior: number=0;
  totalPExterior: number=0;
  constructor(private plantaService: PlantaService) { }

  getPlantas(){
    this.plantaService.gePlantas().subscribe(plantas => {
      this.plantas=plantas
      this.getTotals();
    })
  }
  getTotals(){
    this.totalPInterior = this.plantas.filter(planta => planta.tipo === 'Interior').length;
    this.totalPExterior = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }

  ngOnInit() {
    this.getPlantas();
    
  }

}
