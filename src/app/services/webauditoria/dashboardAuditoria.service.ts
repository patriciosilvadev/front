import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Servidor } from '../servidor';
import { Sessao } from '../sessao';

@Injectable()
export class DashboardAuditoriaService {
    url: string = 'web/auditoria/';
    private servidor;

    constructor(http: Http, router: Router) {
        this.servidor = new Servidor(http, router);
    }

    getDashboard() {
        const url = `${this.url}dashboard/${Sessao.getToken()}`;

        return this.servidor.realizarGet(url);
    }
}