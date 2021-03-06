import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Servidor } from '../servidor';
import { Sessao } from '../sessao';
import 'rxjs/add/operator/map';

@Injectable()
export class PacientePrescricaoService {
    url: string = 'web/pep/';
    private servidor;

    constructor(http: Http, router: Router) {
        this.servidor = new Servidor(http, router);
    }

    get(objParams) {
        const url = `${this.url}prescricaoPaciente/${Sessao.getToken()}`;

        return this.servidor.realizarGetParam(url, objParams);
    }

    postPrescricaoPacienteFiltro(requestBODY, requestURL){
        const url = `${this.url}prescricaoPacienteFiltro/${Sessao.getToken()}?pagina=${requestURL.pagina}&quantidade=${requestURL.quantidade}&validaEspecialidade=${requestURL.validaEspecialidade}`;
        
        return this.servidor.realizarPost(url, requestBODY);
    }

    salvar(objTipo) {
        const url = `${this.url}prescricaoPaciente/${Sessao.getToken()}`;
        
        return this.servidor.realizarPost(url, objTipo);
    }

    atualizar(id, objTipo) {
        const url = `${this.url}prescricaoPaciente/${Sessao.getToken()}/${id}`;

        return this.servidor.realizarPut(url, objTipo);
    }

    excluir(id) {
        const url = `${this.url}prescricaoPaciente/${Sessao.getToken()}/${id}`;

        return this.servidor.realizarDelete(url);
    }

}
