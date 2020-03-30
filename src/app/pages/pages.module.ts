import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

import { PageComponent } from './page.component';
import { DniComponent } from '../components/dni/dni.component';

//ANgular Material
import { MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatButtonToggleModule } from "@angular/material";
import { ValidateDniComponent } from './validate-dni/validate-dni.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { MktComponent } from '../shared/mkt/mkt.component';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { ValidationComponent } from './validation/validation.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    PageComponent,
    DniComponent,
    ValidateDniComponent,
    AttemptsComponent,
    DniComponent,
    MktComponent,
    CongratulationComponent,
    ValidationComponent,
    InformationComponent
  ],
  exports: [
    ValidateDniComponent,
    AttemptsComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule
  ]
})
export class PagesModule { }
