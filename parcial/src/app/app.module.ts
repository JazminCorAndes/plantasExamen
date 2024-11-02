import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlantasModule } from './plantas/plantas.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PlantasModule,
        HttpClient 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }