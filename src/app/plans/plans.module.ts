import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PricingHomeComponent } from './pricing-home.component';
import { PlansComponent } from './plans.component';
import { PlanService } from '../common/services/plan.service';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PricingHomeComponent,
    PlansComponent
  ],
  exports: [
      PricingHomeComponent,
      PlansComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class PlansModule {
}