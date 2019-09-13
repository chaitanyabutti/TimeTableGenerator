import { LoginComponent } from './login/login.component';
import { HomeComponent } from './fixed/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ConfigHomeComponent } from './common/config-home/config-home.component';


const routes: Routes = [
  {path: '',
  component: MainComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'configurations', component: ConfigHomeComponent},
    { path: 'scheduler',
    loadChildren: () => import('./generator/generator.module').then(mod => mod.GeneratorModule)}
  ]
},
  {path: '**', component: MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
