import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/home/home.component';
import { RegistrarComponent } from 'src/app/registrar/registrar.component';
import { PrincipalComponent } from 'src/app/principal/principal.component';
import { PerfilComponent } from 'src/app/perfil/perfil.component';
// tslint:disable-next-line:variable-name
const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// tslint:disable-next-line:variable-name
export const app_routing = RouterModule.forRoot(app_routes);
