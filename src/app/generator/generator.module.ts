import { MaterialModule } from './../common/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorHomeComponent } from './generator-home/generator-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    GeneratorHomeComponent,
  ],
  imports: [
    CommonModule,
    GeneratorRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  // exports: [
  //   ConfigGeneratorComponent
  // ],
  entryComponents: [
  ],
  bootstrap: [
    GeneratorHomeComponent
  ]
})
export class GeneratorModule { }
