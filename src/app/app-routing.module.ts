import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './views/default/default.component';

const routes: Routes = [{
	path: 'home',
	component: DefaultComponent
},
{
	path: '**',
	pathMatch: 'full',
	redirectTo: 'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
