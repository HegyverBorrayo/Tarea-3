import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponent } from './components/primo/primo.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NotasComponent } from './components/notas/notas.component';

const appRoutes: Routes = [
  {
    path: 'calculadora', 
    component: CalculadoraComponent
  },
  {
    path: 'notas',
    component: NotasComponent,
  },
  {
    path: 'primo', 
    component: PrimoComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    CalculadoraComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
