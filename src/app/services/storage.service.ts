import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() { }
    setItemInLS(key: string, value: any) {
        try {
            return localStorage.setItem(key, JSON.stringify(value));
        } catch {
            return this.setItemInSS(key, JSON.stringify(value));
        }
    }
    getItemFromLS(key: string) {
        try {
            let data = localStorage.getItem(key)|| '{}'
            return JSON.parse(data);
        } catch  {
            return this.getItemFromSS(key);
        }
    }
    removeItemFromLS(key: string) {
        try {
            return localStorage.removeItem(key);
        } catch {
            return this.removeItemFromSS(key);
        }
    }
    setItemInSS(key: string, value: any) {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
    getItemFromSS(key: string) {
        let data = sessionStorage.getItem(key) || '{}'
        return JSON.parse(data);
    }
    removeItemFromSS(key: string) {
        return sessionStorage.removeItem(key);
    }

    setCookie(name: string, value: any, path: string = "/", expiry: number = 30) {
        const d = new Date();
        d.setTime(d.getTime() + (expiry * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + '=' + value + ';path=' + path + ';expires=' + expires + ';';
    }
    getCookie(name: string) {
        const cookieName = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }
    removeCookie(name: string, path: string = "/") {
        document.cookie = name + '=; expires=Wed, 01 Jan 1970 00:00:01 GMT;path=' + path + ';';
    }
}
