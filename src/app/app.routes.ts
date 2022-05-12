import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { NoticiasComponent } from './components/noticias/noticias.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: '**', pathMatch: 'full',  redirectTo:'home' }

   
];


export const APP_ROUTING = RouterModule.forRoot( ROUTES );
