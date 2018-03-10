import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './components/home-page/home-page.component';
import { LoginPageComponent} from './components/login-page/login-page.component';
import { RegisterPageComponent} from './components/register-page/register-page.component';
import { PrivatePageComponent} from './components/private-page/private-page.component';
import { NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import { HistoryPageComponent} from './components/history-page/history-page.component';
import { TechnologyPageComponent} from './components/technology-page/technology-page.component';
import { TrainingPageComponent} from './components/training-page/training-page.component';
import { BibliographyPageComponent} from './components/bibliography-page/bibliography-page.component';
import { ElectronicPartsPageComponent} from './components/electronic-parts-page/electronic-parts-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'history', component: HistoryPageComponent},
  {path: 'technology', component: TechnologyPageComponent},
  {path: 'bibliography', component: BibliographyPageComponent},
  {path: 'electronic-parts', component: ElectronicPartsPageComponent},
  {path: 'training', component: TrainingPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'private', component: PrivatePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
