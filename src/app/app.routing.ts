
import { EditdisplayComponent } from './placedisplay/editdisplay/editdisplay.component';
import { Routes, RouterModule } from "@angular/router";

import { PlacedisplayComponent } from './placedisplay/placedisplay.component';
import { AdddisplayComponent } from './placedisplay/adddisplay/adddisplay.component';


const arr: Routes = [

  { path: "", component: PlacedisplayComponent },

  {path: 'editdisplay', component: EditdisplayComponent},
  {path: 'adddisplay', component: AdddisplayComponent}
];

export const routing = RouterModule.forRoot(arr);
