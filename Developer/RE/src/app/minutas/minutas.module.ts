import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinutasPageRoutingModule } from './minutas-routing.module';

import { MinutasPage } from './minutas.page';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinutasPageRoutingModule
  ],
  providers:[
    DocumentViewer
  ],
  declarations: [MinutasPage]
})
export class MinutasPageModule {}
