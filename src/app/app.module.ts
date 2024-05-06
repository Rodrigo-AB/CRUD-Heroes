import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroePageComponent } from './heroes/pages/heroe-page/heroe-page.component';
import { LayoutPageComponent } from './heroes/pages/layout-page/layout-page.component';
import { ListPageComponent } from './heroes/pages/list-page/list-page.component';
import { NewPageComponent } from './heroes/pages/new-page/new-page.component';
import { SearchPageComponent } from './heroes/pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroePageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, ///Este es el unico de los modulos que pondremos aqui debido a que vamos a compartir elementos entre el resto de los componentes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
