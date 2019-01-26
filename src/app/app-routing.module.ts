import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponentComponent } from './components/my-component/my-component.component';
import { HomeComponent } from './components/home/home.component';

// update the route array with these
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'myComponent', component: MyComponentComponent},
    {
        path: 'swinfo',
        loadChildren: './modules/swinfo/swinfo.module#SWInfoModule'
    },
];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
