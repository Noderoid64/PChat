export interface GoogleProfile {
    names: {
        familyName: string;
        givenName: string;
        metadata: {
            source: {
                id: string;
            }
        }
    }[];
}
