import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class OAuthService {

    private baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth?';
    private scope = 'https://www.googleapis.com/auth/cloud-platform';
    constructor(private httpClient: HttpClient) { }

    public init(): void {
        const url = this.baseUrl +
        'client_id=' + environment.clientId +
        '&scope=' + this.scope +
        '&redirect_uri=' + environment.redirectUri +
        '&response_type=token';
        window.open(url);
    }

}
