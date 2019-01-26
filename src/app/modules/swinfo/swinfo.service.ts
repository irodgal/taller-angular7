import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SWInfoService {

    private host = 'https://swapi.co/api';

    constructor(
        private httpClient: HttpClient
    ) { }


    public getSWPeopleInfo(): Observable<any> {
        const url = this.host + '/people';

        return this.httpClient.get(url).pipe(
            map((response) => {
                return response;
            })
        );
    }

    public getSWPeopleInfoPaginated(url: string): Observable<any> {
         return this.httpClient.get(url).pipe(
            map((response) => {
                return response;
            })
        );
    }

    public getSWPeopleDetailInfo(peopleId: number): Observable<any> {
        const url = this.host + '/people/' + peopleId;

        return this.httpClient.get(url).pipe(
            map((response) => {
                return response;
            })
        );
    }
}
