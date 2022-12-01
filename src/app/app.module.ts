import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAutosComponent } from './pagaes/listar-autos/listar-autos.component';
import { CrearAutosComponent } from './pagaes/crear-autos/crear-autos.component';
import { EditarAutosComponent } from './pagaes/editar-autos/editar-autos.component';
import { AcercaDeComponent } from './pagaes/acerca-de/acerca-de.component';
import { AutoService } from './services/autos.service';
import { InicioComponent } from './pagaes/inicio/inicio.component';

import {ActionReducer, StoreModule} from '@ngrx/store';
import LogRocket from 'logrocket';

const reduxMiddleware = LogRocket.reduxMiddleware();

export function logrocketMiddleware(reducer): ActionReducer<any, any> {
  let currentState;
  const fakeDispatch = reduxMiddleware({
    getState: () => currentState,
  })(() => {});

  return function (state, action) {
    const newState = reducer(state, action);
    currentState = state;
    fakeDispatch(action);
    return newState;
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ListarAutosComponent,
    CrearAutosComponent,
    EditarAutosComponent,
    AcercaDeComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reduxMiddleware, {
      metaReducers: [
        logrocketMiddleware,
      ],
    }),
  ],
  providers: [AutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
