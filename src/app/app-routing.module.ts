import { LoginComponent } from './login/login.component';
import { HomeComponent } from './fixed/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  { path: 'scheduler',
  loadChildren: () => import('./generator/generator.module').then(mod => mod.GeneratorModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
