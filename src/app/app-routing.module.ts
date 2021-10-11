import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SammplepageComponent } from './sammplepage/sammplepage.component';


const routes: Routes = [
  {path: '', redirectTo: '/samplepage', pathMatch: 'full'},
  {path: 'samplepage', component: SammplepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
