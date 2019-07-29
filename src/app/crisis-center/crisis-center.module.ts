import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisesRoutingModule } from './crises-routing.module';

@NgModule({
  declarations: [
    CrisisCenterHomeComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent
  ],
  imports: [
    CommonModule,
    CrisesRoutingModule
  ]
})
export class CrisisCenterModule { }
