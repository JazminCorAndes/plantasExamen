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
  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.plantaService.gePlantas().subscribe(plantas => {
      this.plantas=plantas
      console.log(this.plantas)
    })
  }

}
