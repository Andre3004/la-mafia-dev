import { Inject, Injectable } from '@angular/core';
import { BROKER_CONFIGURATION, BrokerConfiguration, dwrWrapper } from './services-wrapper';
import { Observable } from 'rxjs';
import { Arquivo, PageRequest, PerfilUsuario, SortDirection, Pageable, Usuario, Franquia, NullHandling, Sort, SortOrder, Page } from './entities';


@Injectable()
export class FranquiaService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public listFranquiasByFilters(arg0?: string, arg1?: string, arg2?: string, arg3?: PageRequest): Observable<Page<Franquia>> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'listFranquiasByFilters', arg0, arg1, arg2, arg3) as Observable<Page<Franquia>>;
    }

    public updateSituacaoFranquia(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'updateSituacaoFranquia', arg0, arg1) as Observable<void>;
    }

    public findFranquiaById(arg0?: number): Observable<Franquia> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'findFranquiaById', arg0) as Observable<Franquia>;
    }

    public updateFranquia(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'updateFranquia', arg0) as Observable<void>;
    }

    public insertArquivo(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'insertArquivo', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'removeArquivo', arg0) as Observable<void>;
    }

    public insertFranquia(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'insertFranquia', arg0) as Observable<void>;
    }

    public deleteFranquia(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'deleteFranquia', arg0) as Observable<void>;
    }


}




@Injectable()
export class ArquivoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public findArquivoByUuid(arg0?: string): Observable<number> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'findArquivoByUuid', arg0) as Observable<number>;
    }

    public downloadArquivoByUuid(arg0?: string): Observable<string> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'downloadArquivoByUuid', arg0) as Observable<string>;
    }

    public deleteArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'deleteArquivo', arg0) as Observable<void>;
    }

    public insertArquivo(arg0?: HTMLInputElement): Observable<string> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'insertArquivo', arg0) as Observable<string>;
    }


}




@Injectable()
export class UsuarioService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public listUsuariosByFilters(arg0?: string, arg1?: Boolean, arg2?: string, arg3?: PageRequest): Observable<Page<Usuario>> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'listUsuariosByFilters', arg0, arg1, arg2, arg3) as Observable<Page<Usuario>>;
    }

    public updateSituacaoUsuario(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'updateSituacaoUsuario', arg0, arg1) as Observable<void>;
    }

    public findUsuarioById(arg0?: number): Observable<Usuario> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'findUsuarioById', arg0) as Observable<Usuario>;
    }

    public deleteUsuario(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'deleteUsuario', arg0) as Observable<void>;
    }

    public insertArquivo(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'insertArquivo', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'removeArquivo', arg0) as Observable<void>;
    }

    public updateUsuario(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'updateUsuario', arg0) as Observable<void>;
    }

    public insertUsuario(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'insertUsuario', arg0) as Observable<void>;
    }


}



