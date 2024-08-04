import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./views/home/home.component').then((c) => c.HomeComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '/',
	},
];
