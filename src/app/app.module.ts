import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { TechnologyPageComponent } from './components/technology-page/technology-page.component';
import { TrainingPageComponent } from './components/training-page/training-page.component';
import { BibliographyPageComponent } from './components/bibliography-page/bibliography-page.component';
import { ElectronicPartsPageComponent } from './components/electronic-parts-page/electronic-parts-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent,
    HistoryPageComponent,
    TechnologyPageComponent,
    TrainingPageComponent,
    BibliographyPageComponent,
    ElectronicPartsPageComponent,
    FooterComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
