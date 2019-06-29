import { Inject, Injectable } from '@angular/core';
import { BROKER_CONFIGURATION, BrokerConfiguration, dwrWrapper } from './services-wrapper';
import { Observable } from 'rxjs';
import { Arquivo, PerfilUsuario, Mesa, Usuario, Ambiente, SortOrder, Page, PageRequest, SortDirection, Pageable, Franquia, NullHandling, GrupoProduto, AmbienteImagem, Sort, Produto } from './entities';


@Injectable()
export class MesaService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public deleteMesa(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'deleteMesa', arg0) as Observable<void>;
    }

    public insertMesa(arg0?: Mesa): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'insertMesa', arg0) as Observable<void>;
    }

    public updateMesa(arg0?: Mesa): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'updateMesa', arg0) as Observable<void>;
    }

    public listMesasByFilters(arg0?: number, arg1?: number, arg2?: PageRequest): Observable<Page<Mesa>> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'listMesasByFilters', arg0, arg1, arg2) as Observable<Page<Mesa>>;
    }

    public findMesaByNumeroMesa(arg0?: number): Observable<Mesa> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'findMesaByNumeroMesa', arg0) as Observable<Mesa>;
    }

    public findMesaByAmbienteId(arg0?: number): Observable<Mesa[]> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'findMesaByAmbienteId', arg0) as Observable<Mesa[]>;
    }

    public updateSituacaoMesa(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'updateSituacaoMesa', arg0, arg1) as Observable<void>;
    }


}




@Injectable()
export class ProdutoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public insertArquivo(arg0?: Produto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'insertArquivo', arg0) as Observable<void>;
    }

    public updateProduto(arg0?: Produto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'updateProduto', arg0) as Observable<void>;
    }

    public deleteProduto(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'deleteProduto', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'removeArquivo', arg0) as Observable<void>;
    }

    public findProdutoById(arg0?: number): Observable<Produto> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'findProdutoById', arg0) as Observable<Produto>;
    }

    public insertProduto(arg0?: Produto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'insertProduto', arg0) as Observable<void>;
    }

    public listProdutosByFilters(arg0?: string, arg1?: string, arg2?: PageRequest): Observable<Page<Produto>> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'listProdutosByFilters', arg0, arg1, arg2) as Observable<Page<Produto>>;
    }

    public updateSituacaoProduto(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'updateSituacaoProduto', arg0, arg1) as Observable<void>;
    }


}




@Injectable()
export class GrupoProdutoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public insertArquivo(arg0?: GrupoProduto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'insertArquivo', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'removeArquivo', arg0) as Observable<void>;
    }

    public listGrupoProdutosByFilters(arg0?: string, arg1?: number, arg2?: PageRequest): Observable<Page<GrupoProduto>> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'listGrupoProdutosByFilters', arg0, arg1, arg2) as Observable<Page<GrupoProduto>>;
    }

    public findGrupoProdutoById(arg0?: number): Observable<GrupoProduto> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'findGrupoProdutoById', arg0) as Observable<GrupoProduto>;
    }

    public insertGrupoProduto(arg0?: GrupoProduto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'insertGrupoProduto', arg0) as Observable<void>;
    }

    public updateGrupoProduto(arg0?: GrupoProduto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'updateGrupoProduto', arg0) as Observable<void>;
    }

    public deleteGrupoProduto(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'deleteGrupoProduto', arg0) as Observable<void>;
    }

    public updateSituacaoGrupoProduto(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'updateSituacaoGrupoProduto', arg0, arg1) as Observable<void>;
    }


}




@Injectable()
export class UsuarioService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public deleteUsuario(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'deleteUsuario', arg0) as Observable<void>;
    }

    public insertArquivo(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'insertArquivo', arg0) as Observable<void>;
    }

    public findUsuarioById(arg0?: number): Observable<Usuario> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'findUsuarioById', arg0) as Observable<Usuario>;
    }

    public insertUsuario(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'insertUsuario', arg0) as Observable<void>;
    }

    public updateUsuario(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'updateUsuario', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'removeArquivo', arg0) as Observable<void>;
    }

    public updateSituacaoUsuario(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'updateSituacaoUsuario', arg0, arg1) as Observable<void>;
    }

    public listUsuariosByFilters(arg0?: string, arg1?: Boolean, arg2?: string, arg3?: PageRequest): Observable<Page<Usuario>> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'listUsuariosByFilters', arg0, arg1, arg2, arg3) as Observable<Page<Usuario>>;
    }


}




@Injectable()
export class ArquivoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public insertArquivo(arg0?: HTMLInputElement): Observable<string> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'insertArquivo', arg0) as Observable<string>;
    }

    public deleteArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'deleteArquivo', arg0) as Observable<void>;
    }

    public downloadArquivoByUuid(arg0?: string): Observable<string> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'downloadArquivoByUuid', arg0) as Observable<string>;
    }

    public findArquivoByUuid(arg0?: string): Observable<number> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'findArquivoByUuid', arg0) as Observable<number>;
    }


}




@Injectable()
export class AmbienteService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public updateAmbiente(arg0?: Ambiente, arg1?: number[]): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'updateAmbiente', arg0, arg1) as Observable<void>;
    }

    public insertAmbiente(arg0?: Ambiente): Observable<number> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'insertAmbiente', arg0) as Observable<number>;
    }

    public findAmbienteById(arg0?: number): Observable<Ambiente> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'findAmbienteById', arg0) as Observable<Ambiente>;
    }

    public deleteAmbiente(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'deleteAmbiente', arg0) as Observable<void>;
    }

    public updateAmbienteImagem(arg0?: AmbienteImagem): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'updateAmbienteImagem', arg0) as Observable<void>;
    }

    public deleteAmbienteImagem(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'deleteAmbienteImagem', arg0) as Observable<void>;
    }

    public insertAmbienteImagem(arg0?: AmbienteImagem): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'insertAmbienteImagem', arg0) as Observable<void>;
    }

    public findAmbienteImagemByAmbienteId(arg0?: number): Observable<AmbienteImagem[]> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'findAmbienteImagemByAmbienteId', arg0) as Observable<AmbienteImagem[]>;
    }

    public updateSituacaoAmbiente(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'updateSituacaoAmbiente', arg0, arg1) as Observable<void>;
    }

    public listAmbientesByFilters(arg0?: string, arg1?: number, arg2?: PageRequest): Observable<Page<Ambiente>> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'listAmbientesByFilters', arg0, arg1, arg2) as Observable<Page<Ambiente>>;
    }


}




@Injectable()
export class FranquiaService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public insertFranquia(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'insertFranquia', arg0) as Observable<void>;
    }

    public findFranquiaById(arg0?: number): Observable<Franquia> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'findFranquiaById', arg0) as Observable<Franquia>;
    }

    public updateFranquia(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'updateFranquia', arg0) as Observable<void>;
    }

    public deleteFranquia(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'deleteFranquia', arg0) as Observable<void>;
    }

    public insertArquivo(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'insertArquivo', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'removeArquivo', arg0) as Observable<void>;
    }

    public updateSituacaoFranquia(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'updateSituacaoFranquia', arg0, arg1) as Observable<void>;
    }

    public listFranquiasByFilters(arg0?: string, arg1?: string, arg2?: string, arg3?: PageRequest): Observable<Page<Franquia>> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'listFranquiasByFilters', arg0, arg1, arg2, arg3) as Observable<Page<Franquia>>;
    }


}



