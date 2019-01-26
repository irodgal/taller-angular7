import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SwPeopleListComponent } from './components/sw-people-list/sw-people-list.component';
import { SWInfoRoutingModule } from './swinfo.routing';
import { SWInfoService } from './swinfo.service';
import { SwPeopleDetailComponent } from './components/sw-people-detail/sw-people-detail.component';

@NgModule({
    declarations: [
        SwPeopleListComponent,
        SwPeopleDetailComponent
    ],
    imports: [
        SWInfoRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        SWInfoService
    ]
})
export class SWInfoModule { }
