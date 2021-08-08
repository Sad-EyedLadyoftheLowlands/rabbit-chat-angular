// ANGULAR
import {Injectable} from '@angular/core';

/*
Data abstraction layer to allow for easily changing the implementation of persistence.
Using LocalStorage for now as it doesn't matter very much, but will eventually move to
either SQLite, a file, or IndexedDB.

TODO: Should implement this as generic methods instead.
 */
@Injectable()
export class DataService {

    constructor() { }

    setObject<T>(key: string, value: T): void { localStorage.setItem(key, JSON.stringify(value)); }

    getObject<T>(key: string): T { return JSON.parse(localStorage.getItem(key) as string); }

    setString(key: string, value: string): void { localStorage.setItem(key, value); }

    getString(key: string): string { return localStorage.getItem(key) as string; }

    setBoolean(key: string, value: boolean): void { localStorage.setItem(key, JSON.stringify(value)); }

    getBoolean(key: string): boolean { return JSON.parse(localStorage.getItem(key) as string); }
}
