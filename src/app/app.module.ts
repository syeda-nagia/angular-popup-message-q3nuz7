import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';

import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ResultComponent } from './result/result.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';
import {DialogService} from './dialog/dialog.service';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
                  BrowserAnimationsModule,
                  MatInputModule, MatDialogModule, MatButtonModule,
                  AppRoutingModule,HttpClientModule,
                  NgbModule.forRoot()
                ],
  declarations: [ AppComponent,TableComponent, 
                  HelloComponent, ResultComponent,
                  DialogComponent, DialogTemplateComponent
                ],
  providers: [ DialogService ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ DialogTemplateComponent ],
})
export class AppModule { }
