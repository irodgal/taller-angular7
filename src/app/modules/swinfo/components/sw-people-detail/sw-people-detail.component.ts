import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SWInfoService } from '../../swinfo.service';

@Component({
  selector: 'app-sw-people-detail',
  templateUrl: './sw-people-detail.component.html',
  styleUrls: ['./sw-people-detail.component.css']
})
export class SwPeopleDetailComponent implements OnInit {

    public peopleDetailInfo;

    constructor(
        private route: ActivatedRoute,
        private swInfoService: SWInfoService
    ) {
        this.peopleDetailInfo = {};
    }

    public ngOnInit() {
        // id es el nombre del parametro en route
        const peopleId = this.route.snapshot.params.id;
        this.getSWPeopleDetailInfo(peopleId);
    }

    private getSWPeopleDetailInfo(peopleId: number): void {
        this.swInfoService.getSWPeopleDetailInfo(peopleId).subscribe(
            (result) => {
                console.log(result);
                this.peopleDetailInfo = result;
            }
        );
    }
}
