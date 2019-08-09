import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PlacedisplayComponent } from './placedisplay/placedisplay.component';

// import { routing } from './routing';
import { routing } from './app.routing';
import { EditdisplayComponent } from './placedisplay/editdisplay/editdisplay.component';
import { AdddisplayComponent } from './placedisplay/adddisplay/adddisplay.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PlacedisplayComponent,

    EditdisplayComponent,
    AdddisplayComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
