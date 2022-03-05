import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { EnviarComponent } from './enviar/enviar.component';




@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    EnviarComponent,
    

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
