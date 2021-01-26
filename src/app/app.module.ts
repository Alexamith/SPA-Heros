import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from "./app.routes";

// servicios
import { HeroesService } from './services/heroes.serive';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    NotFoundComponent,
    HeroeComponent,
    ResultadoBusquedaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  