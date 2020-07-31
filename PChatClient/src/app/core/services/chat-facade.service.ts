import { Injectable } from '@angular/core';
import { OAuthService } from './oauth.service';
import { ProfileWebService } from './profile-web.service';
import { GoogleProfile } from '../model/google-profile.model';
import { Profile } from '../model/profile.model';

@Injectable({providedIn: 'root'})
export class ChatFacadeService {

    constructor(private oauthService: OAuthService, private profileWebService: ProfileWebService) {}

    public async getProfile(): Promise<Profile> {
        this.oauthService.handeAccessToken();
        const googleProfile: GoogleProfile = await this.oauthService.getInfo().toPromise();
        const profile = await this.profileWebService.getProfileByGoogleId(googleProfile.names[0].metadata.source.id).toPromise();
        return profile ?? await this.profileWebService.createProfileByGoogle(googleProfile).toPromise();
    }
}
