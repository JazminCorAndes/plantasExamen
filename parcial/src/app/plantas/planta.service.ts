import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from './planta';
import { environment } from '../../enviroments/enviroment.development';

@Injectable({
    providedIn: 'root'
})
export class PlantaService {
    private apiUrl=environment.baseUrl

constructor(private http: HttpClient) { }
    gePlantas(): Observable<Planta[]>{
        return this.http.get<Planta[]>(this.apiUrl)
    }

}
