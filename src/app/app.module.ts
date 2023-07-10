import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { Wave2021Component } from './wave2021/wave2021.component';

@NgModule({
  declarations: [
    AppComponent,
    Wave2021Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
