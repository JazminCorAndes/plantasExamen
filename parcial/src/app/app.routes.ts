import { Routes } from '@angular/router';
import { PlantasComponent } from './plantas/plantas.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', component: PlantasComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }