import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CompletedComponent } from './completed/completed.component';
import { IncompleteComponent } from './incomplete/incomplete.component';

const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'complete', component: CompletedComponent },
  { path: 'incomplete', component: IncompleteComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
