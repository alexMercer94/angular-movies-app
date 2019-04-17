import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CardHomeComponent } from '../components/card-home/card-home.component';
import { CardComponent } from '../components/card/card.component';
import { HomeComponent } from '../components/home/home.component';
import { MovieComponent } from '../components/movie/movie.component';
import { SearchComponent } from '../components/search/search.component';
import { LoadingComponent } from '../components/shared/loading/loading.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { UrlimagePipe } from '../pipes/urlimage.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// * AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    NavbarComponent,
    CardHomeComponent,
    CardComponent,
    UrlimagePipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
