import { HttpInterceptorFn } from "@angular/common/http";
import { Authservice } from "./authservice";
import { inject } from "@angular/core";





export const tokenInterceptor:HttpInterceptorFn = (req,next)=> {

    const auth = inject(Authservice)

    const token = auth.getToken()

    if (req.url.includes('/login') || req.url.includes('/register')) {
        return next(req);
      }


    const tokens =token ? req.clone({setHeaders:{Authorization :`Bearer ${token}`}}):req

    return  next(tokens)

}