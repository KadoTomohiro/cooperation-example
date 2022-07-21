import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AgreementComponent} from "./agreement/agreement.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'agreement', component: AgreementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
