import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { TechnologyPageComponent } from './components/technology-page/technology-page.component';
import { TrainingPageComponent } from './components/training-page/training-page.component';
import { BibliographyPageComponent } from './components/bibliography-page/bibliography-page.component';
import { ElectronicPartsPageComponent } from './components/electronic-parts-page/electronic-parts-page.component';
import { ChartComponent } from './components/chart/chart.component';
import { CommandsUsedComponent } from './commands-used/commands-used.component';
import { RaspberryFirstComponent } from './raspberry-first/raspberry-first.component';
import { ChartsPageComponent } from './components/charts-page/charts-page.component';
import { AuthGuard } from './guards/auth.guard';
import { CommonModule } from '@angular/common';
import { AddpartComponent } from './functionDbParts/addpart/addpart.component';
import { ShowpartComponent } from './functionDbParts/showpart/showpart.component';
import { EditpartComponent } from './functionDbParts/editpart/editpart.component';
import { SystemInfoPageComponent } from './components/system-info-page/system-info-page.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { TotalSystemPageComponent } from './components/total-system-page/total-system-page.component';
import { Esp8266OneComponent } from './esp8266-one/esp8266-one.component';
import { Esp8266TwoComponent } from './esp8266-two/esp8266-two.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'history', component: HistoryPageComponent, canActivate: [AuthGuard]},
  {path: 'technology', component: TechnologyPageComponent, canActivate: [AuthGuard]},
  {path: 'bibliography', component: BibliographyPageComponent, canActivate: [AuthGuard]},
  {path: 'electronic-parts', component: ElectronicPartsPageComponent, canActivate: [AuthGuard]},
  {path: 'training', component: TrainingPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'chart', component: ChartComponent, canActivate: [AuthGuard]},
  {path: 'private', component: PrivatePageComponent, canActivate: [AuthGuard]},
  {path: 'commands-used', component: CommandsUsedComponent, canActivate: [AuthGuard]},
  {path: 'raspberryfirst', component: RaspberryFirstComponent, canActivate: [AuthGuard]},
  {path: 'charts', component: ChartsPageComponent, canActivate: [AuthGuard]},
  {path: 'addpart', component: AddpartComponent, canActivate: [AuthGuard]},
  {path: 'showpart/:id', component: ShowpartComponent, canActivate: [AuthGuard]},
  {path: 'editpart/:id', component: EditpartComponent, canActivate: [AuthGuard]},
  {path: 'system-info', component: SystemInfoPageComponent, canActivate: [AuthGuard]},
  {path: 'temperature', component: TemperatureComponent, canActivate: [AuthGuard]},
  {path: 'total-system', component: TotalSystemPageComponent, canActivate: [AuthGuard]},
  {path: 'esp8266-one', component: Esp8266OneComponent, canActivate: [AuthGuard]},
  {path: 'esp8266-two', component: Esp8266TwoComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
