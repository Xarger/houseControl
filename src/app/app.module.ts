import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
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
import { CommandsUsedComponent } from './commands-used/commands-used.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RaspberryFirstComponent } from './raspberry-first/raspberry-first.component';


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
    ChartComponent,
    CommandsUsedComponent,
    RaspberryFirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
