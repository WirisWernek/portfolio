import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [{
	path: '',
	component: HomeComponent
},
{
	path: '**',
	pathMatch: 'full',
	redirectTo: '/'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
	onSameUrlNavigation: 'reload',
	anchorScrolling: 'enabled',
	enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
