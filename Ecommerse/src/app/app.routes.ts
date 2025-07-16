import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Authguard } from '../services/authguard';

export const routes: Routes = [

    {path:'',component:Login},

    {path:'dashboard',component:Dashboard,canActivate:[Authguard]},
    
];
