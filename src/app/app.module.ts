import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ShowDataComponent } from './show-data/show-data.component';
import { CardsComponent } from './cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import { EditDataComponent } from './edit-data/edit-data.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginDialaogComponent } from './login-dialaog/login-dialaog.component';
import { DataAddedComponent } from './data-added/data-added.component';
import { UpdatedComponent } from './updated/updated.component';
import { DeletedDataComponent } from './deleted-data/deleted-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    ToolBarComponent,
    ShowDataComponent,
    CardsComponent,
    EditDataComponent,
    LoginDialaogComponent,
    DataAddedComponent,
    UpdatedComponent,
    DeletedDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
