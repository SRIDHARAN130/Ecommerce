import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Authguard } from '../services/authguard';
import { Products } from './products/products';
import { Orders } from './orders/orders';
import { Home } from './home/home';
import { CheckOut } from './check-out/check-out';
import { Cart } from './cart/cart';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { Showproducts } from './showproducts/showproducts';

export const routes: Routes = [

    {path:'',component:Login},

    {path:'login',component:Login},

    {path:'checkout/:id',component:CheckOut},

    {path:'carts',component:Cart},

    {path:'carts/:id',component:Cart},

    {path:'register',component:Register},

    {path:'profile',component:Profile},

    {path:'orders/:id',component:Orders},

    {path:'orders',component:Orders},

    {path:'show/:id',component:Showproducts},

    {path:'products',component:Products},

{path:'dashboard',component:Dashboard,canActivate:[Authguard],
        children:[
            {path:'',component:Home},
            {path:'home',component:Home},
            {path:'products',component:Products},
            {path:'orders',component:Orders}
        ]
    },
    
];


