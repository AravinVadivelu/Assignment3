import { NgModule, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { input, output } from '@angular/core';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full'},
  { path: 'input', component: InputComponent},
  { path: 'output', component: OutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
