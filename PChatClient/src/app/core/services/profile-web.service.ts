import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';
import { GoogleProfile } from '../model/google-profile.model';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProfileWebService {

    private profileUrl = 'profiles/';

    constructor(private httpClient: HttpClient) { }

    public getProfileById(id: number): Observable<Profile> {
        return this.httpClient.get<Profile>(environment.baseUrl + this.profileUrl + id);
    }

    public getProfileByGoogleId(id: string): Observable<Profile> {
        return this.httpClient.get<Profile>(environment.baseUrl + this.profileUrl + 'google?id=' + id);
    }

    public createProfileByGoogle(profile: GoogleProfile): Observable<Profile> {
        return this.httpClient.put<Profile>(environment.baseUrl + this.profileUrl + 'google', {
            id: profile.names[0].metadata.source.id,
            FirstName: profile.names[0].givenName
        });
    }
}
