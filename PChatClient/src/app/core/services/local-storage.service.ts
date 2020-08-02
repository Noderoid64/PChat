import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    constructor() { }

    public set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public get(key: string): string | null {
        return localStorage.getItem(key);
    }
}
