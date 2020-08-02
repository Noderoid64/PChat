import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UrlBuilderService {
    constructor() { }

    private SLASH = '/';

    private segments = new Array<string>();
    private queryParams = new Array<[string, string]>();

    public addSegment(segment: string): UrlBuilderService {
        segment = this.prepareSegment(segment);
        this.segments.push(segment);
        return this;
    }

    public removeSegment(segment: string): UrlBuilderService {
        segment = this.prepareSegment(segment);
        const index: number = this.segments.indexOf(segment);
        if (index !== -1) {
            this.segments = this.segments.splice(index, 1);
        }
        return this;
    }

    public addQueryParam(key: string, value: string): UrlBuilderService {
        this.queryParams.push([key, value]);
        return this;
    }

    public removeQueryPram(key: string): UrlBuilderService {
        const index = this.queryParams.findIndex(val => val[0] === key);
        if (index !== -1) {
            this.queryParams = this.queryParams.splice(index, 1);
        }
        return this;
    }

    public build(baseUrl?: string): string {
        let result = baseUrl ?? '';
        result += this.segments.join(this.SLASH);
        if (this.queryParams.length > 0) {
            result += '?';
            this.queryParams.forEach(param => {
                result += param[0] + '=' + param[1] + '&';
            });
            result = result.substring(result.length - 1, 0);
        }
        this.queryParams = new Array<[string, string]>();
        this.segments = new Array<string>();
        return result;
    }

    private prepareSegment(value: string): string {
        value = value.replace(this.SLASH + this.SLASH, this.SLASH);
        if (value[0] === this.SLASH) {
            value = value.substr(1, value.length - 1);
        }
        if (value[value.length] === this.SLASH) {
            value = value.substring(value.length - 1, 0);
        }
        return value;
    }
}
