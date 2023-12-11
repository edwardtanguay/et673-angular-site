import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { PageEmployeesComponent } from './page-employees/page-employees.component';

export const routes: Routes = [
	{ path: 'home', component: PageHomeComponent},
	{ path: 'info', component: PageInfoComponent},
	{ path: 'employees', component: PageEmployeesComponent}
];
