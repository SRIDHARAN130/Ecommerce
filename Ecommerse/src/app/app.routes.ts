import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Authguard } from '../services/authguard';
import { Products } from './products/products';
import { Orders } from './orders/orders';
import { Home } from './home/home';

export const routes: Routes = [

    {path:'',component:Login},

    {path:'login',component:Login},


{path:'dashboard',component:Dashboard,canActivate:[Authguard],
        children:[
            {path:'',component:Home},
            {path:'home',component:Home},
            {path:'products',component:Products},
            {path:'orders',component:Orders}
        ]
    },
    
];


