// ANGULAR
import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// RABBIT CHAT
import { SubMenuDirective } from 'src/app/directives/sub-menu.directive';
import { SubMenuItem } from 'src/app/models/sub-menu-item';
import { TestComponent } from './test/test.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    @ViewChild(SubMenuDirective, { static: true }) subMenuHost!: SubMenuDirective;

    public subMenuItem: SubMenuItem | undefined;

    constructor(private router: Router,
                private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit(): void { } // this.loadComponent();

    showRoom(): void { console.log('test'); }

    /*
    Each button will send as a parameter the name of the route it should active in the second router outlet.
    This way, all this method needs to do is route to the given string.
     */
    public controlMenu(routeName: string): void {
        console.log(routeName);
        // this.router.navigateByUrl('/room').then();
        this.router.navigate(['/' + routeName]).then();
    }

    public loadComponent(): any {
        if (this.subMenuItem !== undefined) {
            this.subMenuItem = undefined;
            return;
        }


        console.log(this.subMenuHost);
        // const subMenuItem = new SubMenuItem(TestComponent, { data: null });
        this.subMenuItem = new SubMenuItem(TestComponent, { data: null });
        console.log(this.subMenuItem);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.subMenuItem.component);
        const viewContainerRef = this.subMenuHost.viewContainerRef;

        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent<TestComponent>(componentFactory);

    }
}
