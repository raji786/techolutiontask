import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmitionFormComponent } from './admitionform/admitionform.component';
import { AplicationformComponent } from './aplicationform/aplicationform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdmitionFormComponent,
    AplicationformComponent,
    PagenotfoundComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
