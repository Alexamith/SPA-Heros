import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';



const APP_ROUTES: Routes = [
    {path:'home',component: HomeComponent},
    {path:'notfound',component: NotFoundComponent},
    {path:'about',component: AboutComponent},
    {path:'heroes',component: HeroesComponent},
    {path:'heroe/:id',component: HeroeComponent},
    {path:'busqueda/:r',component: ResultadoBusquedaComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);