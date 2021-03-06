import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { OutputSectionComponent } from './directives/output-section.component';
import { ApiHeaderComponent } from './directives/api-details-header.component';
import  * as ng2Bootstrap from 'ng2-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { PersonalAssistantsComponent } from './personal-assistants/personal-assistants.component';
import { DataService } from "app/services/data.service";
import { AppIdPipe } from './app-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApiHeaderComponent,
    OutputSectionComponent,
    PersonalAssistantsComponent,
    AppIdPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ng2Bootstrap.Ng2BootstrapModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ng2Bootstrap.ComponentLoaderFactory,
              ng2Bootstrap.PositioningService,
              DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
