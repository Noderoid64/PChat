import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlBuilderService } from '../url-builder.service';
import { environment } from '../../../../environments/environment';
import { GoogleProfile } from '../../model/google-profile.model';
import { GoogleProfileDto } from '../../model/google-profile-dto.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GoogleWebService {

    private oauthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    private googlePeopleServiceUrl = 'https://people.googleapis.com/v1/people/me';
    private scope = 'https://www.googleapis.com/auth/userinfo.profile';

    constructor(
        private httpClient: HttpClient,
        private urlBuilder: UrlBuilderService
    ) { }

    public openGoogleAuthPage(): void {
        const url = this.urlBuilder
            .addSegment(this.oauthUrl)
            .addQueryParam('client_id', environment.clientId)
            .addQueryParam('scope', this.scope)
            .addQueryParam('redirect_uri', environment.redirectUri)
            .addQueryParam('response_type', 'token')
            .build();
        console.log(url);
        window.open(url);
    }

    public getGoogleProfileByToken(token: string, accessTokenParam: string): Observable<GoogleProfile> {
        if (token) {
            const url = this.urlBuilder
            .addSegment(this.googlePeopleServiceUrl)
            .addQueryParam('personFields', 'names,nicknames')
            .addQueryParam(accessTokenParam, token)
            .build();
            // TODO map logic should be in separate service
            console.log(url);
            return this.httpClient.get<GoogleProfileDto>(url).pipe(
                map((val: GoogleProfileDto) => {
                    return {
                        id: val.names[0].metadata.source.id,
                        firstName: val.names[0].givenName,
                        lastName: val.names[0].familyName
                    } as GoogleProfile;
                })
            );
        }
        return of();
    }
}
