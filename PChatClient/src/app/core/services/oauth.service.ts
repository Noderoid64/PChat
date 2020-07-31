import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import { GoogleProfile } from '../model/google-profile.model';

@Injectable({providedIn: 'root'})
export class OAuthService {

    private baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth?';
    private scope = 'https://www.googleapis.com/auth/userinfo.profile';
    private accessTokenParam = 'access_token';

    constructor(private httpClient: HttpClient) { }

    public init(): void {
        const url = this.baseUrl +
        'client_id=' + environment.clientId +
        '&scope=' + this.scope +
        '&redirect_uri=' + environment.redirectUri +
        '&response_type=token';
        window.open(url);
    }

    public handeAccessToken(): void {
        if (!localStorage.getItem(this.accessTokenParam)) {
            let url = window.location.href;
            const tokenIndex = url.indexOf(this.accessTokenParam);
            if (tokenIndex > -1) {
                url = url.substr(tokenIndex);
                const lastTokenIndex = url.indexOf('&');
                const token = url.substring(this.accessTokenParam.length + 1, lastTokenIndex);
                localStorage.setItem(this.accessTokenParam, token);
            }
        }
    }

    public getInfo(): Observable<GoogleProfile> {
        const token = localStorage.getItem(this.accessTokenParam);
        if (token) {
            return this.httpClient.get<GoogleProfile>('https://people.googleapis.com/v1/people/me?' +
            'personFields=names,nicknames&' +
            this.accessTokenParam + '=' + localStorage.getItem(this.accessTokenParam));
        }
        return of();
    }

}
