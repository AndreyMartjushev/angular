import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import {Routes, RouterModule} from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { OutputImgComponent } from './output-img/output-img.component';
import { GetImgService } from '../services/GetImgService';
import { imgReducer } from './redux/imgReducer';
import { FavoritesComponent } from './favorites/favorites.component';
import { DialogAddToFavorites } from './dialog/dialogAddToFavorites';


const appRoutes: Routes =[
  { path: '', component: SearchFormComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    OutputImgComponent,
    FavoritesComponent,
    DialogAddToFavorites
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({imgPage: imgReducer}), 
    RouterModule.forRoot(appRoutes), 
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [HttpClientModule, HttpClient, GetImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
