import { Injectable } from '@angular/core';
import { GoogleWebService } from './web/google-web.service';
import { OAuthService } from './oauth.service';
import { LocalStorageService } from './local-storage.service';
import { GoogleProfile } from '../model/google-profile.model';

@Injectable({providedIn: 'root'})
export class GoogleFacadeService {

    private accessTokenParam = 'access_token';

    constructor(
        private googleWebService: GoogleWebService,
        private oauthService: OAuthService,
        private localStorage: LocalStorageService
    ) { }

    public openGoogleAuthPage(): void {
        this.googleWebService.openGoogleAuthPage();
    }

    public getGoogleProfileAsync(): Promise<GoogleProfile> {
        const token = this.getToken();
        return this.googleWebService.getGoogleProfileByToken(token, this.accessTokenParam).toPromise();
    }

    private getToken(): string | null {
        let token = this.oauthService.getAccessTokenFromUrl(window.location.href, this.accessTokenParam);
        console.log(window.location.href);
        console.log(this.accessTokenParam);
        if (token) {
            this.localStorage.set(this.accessTokenParam, token);
        } else {
            token = this.localStorage.get(this.accessTokenParam);
        }
        return token;
    }
}
