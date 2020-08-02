import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OAuthService {

    public getAccessTokenFromUrl(url: string, accessTokenParam: string): string {
        const tokenIndex = url.indexOf(accessTokenParam);
        let accessToken;
        if (tokenIndex > -1) {
            url = url.substr(tokenIndex);
            const lastTokenIndex = url.indexOf('&');
            accessToken = url.substring(accessTokenParam.length + 1, lastTokenIndex);
        }
        return accessToken;
    }

}
