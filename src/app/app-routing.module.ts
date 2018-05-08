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
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
