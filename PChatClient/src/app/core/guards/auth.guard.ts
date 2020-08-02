import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GoogleFacadeService } from '../services/google-facade.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private googleFacade: GoogleFacadeService, private router: Router) { }

    public canActivate(): boolean | undefined {
        if (this.googleFacade.getToken() != null) {
            return true;
        } else {
            this.router.navigateByUrl('/auth');
            return false;
        }
    }
}
