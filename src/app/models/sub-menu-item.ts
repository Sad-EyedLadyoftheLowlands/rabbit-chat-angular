import { Type } from '@angular/core';

export class SubMenuItem {
    constructor(public component: Type<any>, public data: any) {}
}