import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { app_routing } from './app.routes';


import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { NoencontradaComponent } from './noencontrada/noencontrada.component';
import { PrincipalComponent } from './principal/principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

const firebaseConfig = {
  apiKey: 'AIzaSyBGGTnFO0SQrsT6gPeCF36XtTHwAMuUodU',
  authDomain: 'vecinosapp-7d531.firebaseapp.com',
  databaseURL: 'https://vecinosapp-7d531-default-rtdb.firebaseio.com',
  projectId: 'vecinosapp-7d531',
  storageBucket: 'vecinosapp-7d531.appspot.com',
  messagingSenderId: '468066183919',
  appId: '1:468066183919:web:775062718745fd15d6c91a',
  measurementId: 'G-LBNK9EYFYC'
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    HomeComponent,
    NoencontradaComponent,
    PrincipalComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
