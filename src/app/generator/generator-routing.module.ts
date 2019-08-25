import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorHomeComponent } from './generator-home/generator-home.component';


const routes: Routes = [
  {path: '', component: GeneratorHomeComponent},
  {path: 'home', component: GeneratorHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule { }
