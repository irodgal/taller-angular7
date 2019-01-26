import { Component, OnInit } from '@angular/core';
import { SWInfoService } from '../../swinfo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sw-people-list',
    templateUrl: './sw-people-list.component.html',
    styleUrls: ['./sw-people-list.component.css']
})
export class SwPeopleListComponent implements OnInit {

    public swPeopleCount;
    public swPeopleList;
    public swPeopleListNext;

    constructor(
        private swInfoService: SWInfoService,
        private router: Router
    ) {
        this.swPeopleCount = null;
        this.swPeopleList = [];
        this.swPeopleListNext = null;
    }

    public ngOnInit() {
        this.getSWPeopleInfo();
    }

    private getSWPeopleInfo(): void {
        this.swInfoService.getSWPeopleInfo().subscribe(
            (result) => {
                console.log(result);
                this.swPeopleCount = result.count;
                this.swPeopleList = result.results;
                this.swPeopleListNext = result.next;
            }
        );
    }

    public onClickNext(): void {
        this.swInfoService.getSWPeopleInfoPaginated(this.swPeopleListNext).subscribe(
            (result) => {
                console.log(result);
                this.swPeopleList = result.results;
                this.swPeopleListNext = result.next;
            }
        );
    }

    public onClickCard(urlPeople: string): void {
        console.log(urlPeople);
        // nos quedamos con el id:
        const tmp = urlPeople.split('/');
        const peopleId = tmp[tmp.length - 2];
        console.log(peopleId);

        const url = 'swinfo/people/' + peopleId;
        console.log(url);

        this.router.navigate([url]);
    }

    private async getSWPeopleInfo2() {
        console.log('CON AWAIT');
        const result = <any>await this.swInfoService.getSWPeopleInfo().toPromise();
        console.log(result);
        this.swPeopleList = result.results;
                this.swPeopleListNext = result.next;
    }
}
