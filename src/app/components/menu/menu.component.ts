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

    /*
    This method governs the creation of sub menu item components. Must implement a manner
    for this method to know which button was clicked in order to load the correct component.
    For now, they will simply all create TestComponent.
     */
    public loadComponent(): any {
        if (this.subMenuItem !== undefined) { return this.subMenuItem = undefined; }

        this.subMenuItem = new SubMenuItem(TestComponent, { data: null });
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.subMenuItem.component);
        const viewContainerRef = this.subMenuHost.viewContainerRef;

        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent<TestComponent>(componentFactory);
    }
}
