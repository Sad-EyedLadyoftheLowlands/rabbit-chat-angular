// ANGULAR
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './components/menu/test/test.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthGuard} from './guards/auth.guard';

// TODO: CRUCIAL - Missing auth guard for redirection
const routes: Routes = [
    { path: '', redirectTo: 'room', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'room', loadChildren: () => import('./components/room/room.module').then((m) => m.RoomModule), canActivate: [AuthGuard] },

    // TESTING SUB MENUS
    { path: 'test', component: TestComponent, outlet: 'secondMenu' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
