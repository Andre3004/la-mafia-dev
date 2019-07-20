import { Inject, Injectable } from '@angular/core';
import { BROKER_CONFIGURATION, BrokerConfiguration, dwrWrapper } from './services-wrapper';
import { Observable } from 'rxjs';
import { Usuario, Ambiente, Page, Estado, Cidade, PageRequest, SortDirection, Pageable, NullHandling, AmbienteImagem, Sort, Cliente, Pais, Produto, Arquivo, PerfilUsuario, Mesa, GrupoProdutoFranquia, CondicaoPagamento, SortOrder, Franquia, Fornecedor, GrupoProduto, CondicaoPagamentoParcela, FormaPagamento } from './entities';


@Injectable()
export class ClienteService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public updateSituacaoCliente(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'clienteService', 'updateSituacaoCliente', arg0, arg1) as Observable<void>;
    }

    public listClientesByFilters(arg0?: string, arg1?: PageRequest): Observable<Page<Cliente>> {
        return dwrWrapper(this.brokerConfiguration, 'clienteService', 'listClientesByFilters', arg0, arg1) as Observable<Page<Cliente>>;
    }

    public insertCliente(arg0?: Cliente): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'clienteService', 'insertCliente', arg0) as Observable<void>;
    }

    public updateCliente(arg0?: Cliente): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'clienteService', 'updateCliente', arg0) as Observable<void>;
    }

    public deleteCliente(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'clienteService', 'deleteCliente', arg0) as Observable<void>;
    }

    public findClienteById(arg0?: number): Observable<Cliente> {
        return dwrWrapper(this.brokerConfiguration, 'clienteService', 'findClienteById', arg0) as Observable<Cliente>;
    }


}




@Injectable()
export class PaisService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public updateSituacaoPais(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'paisService', 'updateSituacaoPais', arg0, arg1) as Observable<void>;
    }

    public listPaisesByFilters(arg0?: string, arg1?: PageRequest): Observable<Page<Pais>> {
        return dwrWrapper(this.brokerConfiguration, 'paisService', 'listPaisesByFilters', arg0, arg1) as Observable<Page<Pais>>;
    }

    public findPaisById(arg0?: number): Observable<Pais> {
        return dwrWrapper(this.brokerConfiguration, 'paisService', 'findPaisById', arg0) as Observable<Pais>;
    }

    public insertPais(arg0?: Pais): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'paisService', 'insertPais', arg0) as Observable<void>;
    }

    public deletePais(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'paisService', 'deletePais', arg0) as Observable<void>;
    }

    public updatePais(arg0?: Pais): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'paisService', 'updatePais', arg0) as Observable<void>;
    }


}




@Injectable()
export class AmbienteService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public findAmbienteImagemByAmbienteId(arg0?: number): Observable<AmbienteImagem[]> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'findAmbienteImagemByAmbienteId', arg0) as Observable<AmbienteImagem[]>;
    }

    public deleteAmbienteImagem(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'deleteAmbienteImagem', arg0) as Observable<void>;
    }

    public updateAmbienteImagem(arg0?: AmbienteImagem): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'updateAmbienteImagem', arg0) as Observable<void>;
    }

    public insertAmbienteImagem(arg0?: AmbienteImagem): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'insertAmbienteImagem', arg0) as Observable<void>;
    }

    public listAmbientesByFilters(arg0?: string, arg1?: number, arg2?: PageRequest): Observable<Page<Ambiente>> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'listAmbientesByFilters', arg0, arg1, arg2) as Observable<Page<Ambiente>>;
    }

    public updateSituacaoAmbiente(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'updateSituacaoAmbiente', arg0, arg1) as Observable<void>;
    }

    public insertArquivo(arg0?: AmbienteImagem): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'insertArquivo', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'removeArquivo', arg0) as Observable<void>;
    }

    public findAmbienteById(arg0?: number): Observable<Ambiente> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'findAmbienteById', arg0) as Observable<Ambiente>;
    }

    public updateAmbiente(arg0?: Ambiente, arg1?: number[]): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'updateAmbiente', arg0, arg1) as Observable<void>;
    }

    public deleteAmbiente(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'deleteAmbiente', arg0) as Observable<void>;
    }

    public insertAmbiente(arg0?: Ambiente): Observable<number> {
        return dwrWrapper(this.brokerConfiguration, 'ambienteService', 'insertAmbiente', arg0) as Observable<number>;
    }


}




@Injectable()
export class CidadeService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public listCidadesByFilters(arg0?: string, arg1?: PageRequest): Observable<Page<Cidade>> {
        return dwrWrapper(this.brokerConfiguration, 'cidadeService', 'listCidadesByFilters', arg0, arg1) as Observable<Page<Cidade>>;
    }

    public updateSituacaoCidade(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'cidadeService', 'updateSituacaoCidade', arg0, arg1) as Observable<void>;
    }

    public updateCidade(arg0?: Cidade): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'cidadeService', 'updateCidade', arg0) as Observable<void>;
    }

    public insertCidade(arg0?: Cidade): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'cidadeService', 'insertCidade', arg0) as Observable<void>;
    }

    public deleteCidade(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'cidadeService', 'deleteCidade', arg0) as Observable<void>;
    }

    public findCidadeById(arg0?: number): Observable<Cidade> {
        return dwrWrapper(this.brokerConfiguration, 'cidadeService', 'findCidadeById', arg0) as Observable<Cidade>;
    }


}




@Injectable()
export class ArquivoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public downloadArquivoByUuid(arg0?: string): Observable<string> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'downloadArquivoByUuid', arg0) as Observable<string>;
    }

    public findArquivoByUuid(arg0?: string): Observable<number> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'findArquivoByUuid', arg0) as Observable<number>;
    }

    public insertArquivo(arg0?: HTMLInputElement): Observable<string> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'insertArquivo', arg0) as Observable<string>;
    }

    public deleteArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'arquivoService', 'deleteArquivo', arg0) as Observable<void>;
    }


}




@Injectable()
export class ProdutoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public listProdutosByFilters(arg0?: string, arg1?: PageRequest): Observable<Page<Produto>> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'listProdutosByFilters', arg0, arg1) as Observable<Page<Produto>>;
    }

    public updateSituacaoProduto(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'updateSituacaoProduto', arg0, arg1) as Observable<void>;
    }

    public findProdutoById(arg0?: number): Observable<Produto> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'findProdutoById', arg0) as Observable<Produto>;
    }

    public insertProduto(arg0?: Produto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'insertProduto', arg0) as Observable<void>;
    }

    public insertArquivo(arg0?: Produto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'insertArquivo', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'removeArquivo', arg0) as Observable<void>;
    }

    public updateProduto(arg0?: Produto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'updateProduto', arg0) as Observable<void>;
    }

    public deleteProduto(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'produtoService', 'deleteProduto', arg0) as Observable<void>;
    }


}




@Injectable()
export class MesaService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public findMesaByAmbienteId(arg0?: number): Observable<Mesa[]> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'findMesaByAmbienteId', arg0) as Observable<Mesa[]>;
    }

    public listMesasByFilters(arg0?: number, arg1?: number, arg2?: PageRequest): Observable<Page<Mesa>> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'listMesasByFilters', arg0, arg1, arg2) as Observable<Page<Mesa>>;
    }

    public updateSituacaoMesa(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'updateSituacaoMesa', arg0, arg1) as Observable<void>;
    }

    public findMesaByNumeroMesa(arg0?: number): Observable<Mesa> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'findMesaByNumeroMesa', arg0) as Observable<Mesa>;
    }

    public updateMesa(arg0?: Mesa): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'updateMesa', arg0) as Observable<void>;
    }

    public insertMesa(arg0?: Mesa): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'insertMesa', arg0) as Observable<void>;
    }

    public deleteMesa(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'mesaService', 'deleteMesa', arg0) as Observable<void>;
    }


}




@Injectable()
export class FormaPagamentoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public listFormaPagamentoByFilters(arg0?: string, arg1?: PageRequest): Observable<Page<FormaPagamento>> {
        return dwrWrapper(this.brokerConfiguration, 'formaPagamentoService', 'listFormaPagamentoByFilters', arg0, arg1) as Observable<Page<FormaPagamento>>;
    }

    public deleteFormaPagamento(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'formaPagamentoService', 'deleteFormaPagamento', arg0) as Observable<void>;
    }

    public updateSituacaoFormaPagamento(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'formaPagamentoService', 'updateSituacaoFormaPagamento', arg0, arg1) as Observable<void>;
    }

    public insertFormaPagamento(arg0?: FormaPagamento): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'formaPagamentoService', 'insertFormaPagamento', arg0) as Observable<void>;
    }

    public updateFormaPagamento(arg0?: FormaPagamento): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'formaPagamentoService', 'updateFormaPagamento', arg0) as Observable<void>;
    }

    public findFormaPagamentoById(arg0?: number): Observable<FormaPagamento> {
        return dwrWrapper(this.brokerConfiguration, 'formaPagamentoService', 'findFormaPagamentoById', arg0) as Observable<FormaPagamento>;
    }


}




@Injectable()
export class FornecedorService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public findFornecedorById(arg0?: number): Observable<Fornecedor> {
        return dwrWrapper(this.brokerConfiguration, 'fornecedorService', 'findFornecedorById', arg0) as Observable<Fornecedor>;
    }

    public listFornecedorsByFilters(arg0?: string, arg1?: PageRequest): Observable<Page<Fornecedor>> {
        return dwrWrapper(this.brokerConfiguration, 'fornecedorService', 'listFornecedorsByFilters', arg0, arg1) as Observable<Page<Fornecedor>>;
    }

    public updateSituacaoFornecedor(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'fornecedorService', 'updateSituacaoFornecedor', arg0, arg1) as Observable<void>;
    }

    public insertFornecedor(arg0?: Fornecedor): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'fornecedorService', 'insertFornecedor', arg0) as Observable<void>;
    }

    public updateFornecedor(arg0?: Fornecedor): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'fornecedorService', 'updateFornecedor', arg0) as Observable<void>;
    }

    public deleteFornecedor(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'fornecedorService', 'deleteFornecedor', arg0) as Observable<void>;
    }


}




@Injectable()
export class GrupoProdutoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public insertGrupoProdutoFranquia(arg0?: GrupoProdutoFranquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'insertGrupoProdutoFranquia', arg0) as Observable<void>;
    }

    public insertGrupoProduto(arg0?: GrupoProduto): Observable<number> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'insertGrupoProduto', arg0) as Observable<number>;
    }

    public updateGrupoProduto(arg0?: GrupoProduto, arg1?: number[]): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'updateGrupoProduto', arg0, arg1) as Observable<void>;
    }

    public updateSituacaoGrupoProduto(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'updateSituacaoGrupoProduto', arg0, arg1) as Observable<void>;
    }

    public listGrupoProdutosByFilters(arg0?: string, arg1?: number, arg2?: PageRequest): Observable<Page<GrupoProduto>> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'listGrupoProdutosByFilters', arg0, arg1, arg2) as Observable<Page<GrupoProduto>>;
    }

    public findGrupoProdutoById(arg0?: number): Observable<GrupoProduto> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'findGrupoProdutoById', arg0) as Observable<GrupoProduto>;
    }

    public deleteGrupoProduto(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'deleteGrupoProduto', arg0) as Observable<void>;
    }

    public insertArquivo(arg0?: GrupoProduto): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'insertArquivo', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'grupoProdutoService', 'removeArquivo', arg0) as Observable<void>;
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

    public insertArquivo(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'insertArquivo', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'removeArquivo', arg0) as Observable<void>;
    }

    public findUsuarioById(arg0?: number): Observable<Usuario> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'findUsuarioById', arg0) as Observable<Usuario>;
    }

    public insertUsuario(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'insertUsuario', arg0) as Observable<void>;
    }

    public deleteUsuario(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'deleteUsuario', arg0) as Observable<void>;
    }

    public updateUsuario(arg0?: Usuario): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'usuarioService', 'updateUsuario', arg0) as Observable<void>;
    }


}




@Injectable()
export class EstadoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public listEstadosByFilters(arg0?: string, arg1?: PageRequest): Observable<Page<Estado>> {
        return dwrWrapper(this.brokerConfiguration, 'estadoService', 'listEstadosByFilters', arg0, arg1) as Observable<Page<Estado>>;
    }

    public updateSituacaoEstado(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'estadoService', 'updateSituacaoEstado', arg0, arg1) as Observable<void>;
    }

    public findEstadoById(arg0?: number): Observable<Estado> {
        return dwrWrapper(this.brokerConfiguration, 'estadoService', 'findEstadoById', arg0) as Observable<Estado>;
    }

    public insertEstado(arg0?: Estado): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'estadoService', 'insertEstado', arg0) as Observable<void>;
    }

    public updateEstado(arg0?: Estado): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'estadoService', 'updateEstado', arg0) as Observable<void>;
    }

    public deleteEstado(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'estadoService', 'deleteEstado', arg0) as Observable<void>;
    }


}




@Injectable()
export class CondicaoPagamentoService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public updateCondicaoPagamento(arg0?: CondicaoPagamento, arg1?: number[]): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'condicaoPagamentoService', 'updateCondicaoPagamento', arg0, arg1) as Observable<void>;
    }

    public updateSituacaoCondicaoPagamento(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'condicaoPagamentoService', 'updateSituacaoCondicaoPagamento', arg0, arg1) as Observable<void>;
    }

    public insertCondicaoPagamento(arg0?: CondicaoPagamento): Observable<number> {
        return dwrWrapper(this.brokerConfiguration, 'condicaoPagamentoService', 'insertCondicaoPagamento', arg0) as Observable<number>;
    }

    public findCondicaoPagamentoById(arg0?: number): Observable<CondicaoPagamento> {
        return dwrWrapper(this.brokerConfiguration, 'condicaoPagamentoService', 'findCondicaoPagamentoById', arg0) as Observable<CondicaoPagamento>;
    }

    public deleteCondicaoPagamento(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'condicaoPagamentoService', 'deleteCondicaoPagamento', arg0) as Observable<void>;
    }

    public listCondicaoPagamentosByFilters(arg0?: number, arg1?: PageRequest): Observable<Page<CondicaoPagamento>> {
        return dwrWrapper(this.brokerConfiguration, 'condicaoPagamentoService', 'listCondicaoPagamentosByFilters', arg0, arg1) as Observable<Page<CondicaoPagamento>>;
    }


}




@Injectable()
export class FranquiaService {
    constructor(@Inject(BROKER_CONFIGURATION) private brokerConfiguration: BrokerConfiguration) { }

        public listFranquiasByFilters(arg0?: string, arg1?: string, arg2?: PageRequest): Observable<Page<Franquia>> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'listFranquiasByFilters', arg0, arg1, arg2) as Observable<Page<Franquia>>;
    }

    public updateSituacaoFranquia(arg0?: number, arg1?: boolean): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'updateSituacaoFranquia', arg0, arg1) as Observable<void>;
    }

    public insertFranquia(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'insertFranquia', arg0) as Observable<void>;
    }

    public insertArquivo(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'insertArquivo', arg0) as Observable<void>;
    }

    public findFranquiaById(arg0?: number): Observable<Franquia> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'findFranquiaById', arg0) as Observable<Franquia>;
    }

    public deleteFranquia(arg0?: number): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'deleteFranquia', arg0) as Observable<void>;
    }

    public removeArquivo(arg0?: string): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'removeArquivo', arg0) as Observable<void>;
    }

    public updateFranquia(arg0?: Franquia): Observable<void> {
        return dwrWrapper(this.brokerConfiguration, 'franquiaService', 'updateFranquia', arg0) as Observable<void>;
    }


}



