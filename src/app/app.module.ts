import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { OutputImgComponent } from './output-img/output-img.component';
import { GetImgService } from '../services/GetImgService';
import { imgReducer } from './redux/imgReducer';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    OutputImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({imgPage: imgReducer})
  ],
  providers: [HttpClientModule, HttpClient, GetImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
