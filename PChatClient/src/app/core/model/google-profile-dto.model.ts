export interface GoogleProfileDto {
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
