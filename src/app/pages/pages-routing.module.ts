import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { ValidateDniComponent } from './validate-dni/validate-dni.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { ValidationComponent } from './validation/validation.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  {
    path:'',
    component: PageComponent,
    children: [
      {path: 'dni', component: ValidateDniComponent},
      {path: 'limite', component: AttemptsComponent},
      {path: 'felicitaciones', component: CongratulationComponent},
      {path: 'validacion', component: ValidationComponent},
      {path: 'info', component: InformationComponent},
      {path: '',redirectTo: '/dni', pathMatch: 'full'}
    ]
  }];

  @NgModule({
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
