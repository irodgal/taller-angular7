import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SwPeopleListComponent } from './components/sw-people-list/sw-people-list.component';
import { SwPeopleDetailComponent } from './components/sw-people-detail/sw-people-detail.component';

const routes: Routes = [
    { path: '', component: SwPeopleListComponent },
    { path: 'people/:id', component: SwPeopleDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SWInfoRoutingModule {}
