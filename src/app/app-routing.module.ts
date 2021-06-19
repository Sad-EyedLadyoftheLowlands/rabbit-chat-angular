// ANGULAR
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './components/menu/test/test.component';

const routes: Routes = [
    { path: 'room', loadChildren: () => import('./components/room/room.module').then((m) => m.RoomModule) },

    // TESTING SUB MENUS
    { path: 'test', component: TestComponent, outlet: 'secondMenu' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }