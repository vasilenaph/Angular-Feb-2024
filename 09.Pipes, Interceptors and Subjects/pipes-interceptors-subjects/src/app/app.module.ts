import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReducePipe } from './reduce.pipe';
import { HttpClientModule } from '@angular/common/http';
import { appHttpInteceptorProvider } from './app-http.interceptor';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReducePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [appHttpInteceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
