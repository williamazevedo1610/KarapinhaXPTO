import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { PasswordModule } from 'primeng/password';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MenuComponent } from './components/menu/menu.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { Route, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ServicosTratamentosComponent } from './components/servicos-tratamentos/servicos-tratamentos.component';
import { GalleryPhotosComponent } from './components/gallery-photos/gallery-photos.component';
import { AdminMenuComponent } from './AdminComp/admin-menu/admin-menu.component';

const routes : Routes =[

  {path: 'login' , component: LoginComponent},
  {path: 'cadastro' , component: CadastroComponent}, 
  {path: 'servicos', component: ServicosTratamentosComponent},
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: '/main' , pathMatch: 'full'},

];

@NgModule({

  exports: [RouterModule],

  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    MenuComponent,
    RodapeComponent,
    MainComponent,
    ServicosTratamentosComponent,
    GalleryPhotosComponent,
    AdminMenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    PasswordModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


