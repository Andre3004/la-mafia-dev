export interface Sort {
    orders: SortOrder[]
}

export interface SortOrder {
    direction: SortDirection,
    property: string,
    nullHandlingHint?: NullHandling
}

export type SortDirection = 'ASC' | 'DESC';
export type NullHandling = 'NATIVE' | 'NULLS_FIRST' | 'NULLS_LAST';

export interface Pageable {
    page: number,
    size: number,
    sort?: Sort
}

export interface PageRequest extends Pageable {}

export interface Page<T> {
    content: T[],
    totalElements: number,
    numberOfElements: number,
    totalPages: number,
    pageable?: PageRequest
}

export interface IntlString {
    value: string;
    values: {
        [key: string]: string;
    };
}

export interface Franquia {
    codigo?: number,
    franquia?: string,
    cnpj?: string,
    anexoUuid?: string,
    nomeArquivo?: string,
    situacao?: Boolean,
    endereco?: string,
    numero?: number,
    complemento?: string,
    bairro?: string,
    cep?: string,
    cidade?: Cidade,
    estado?: Estado,
    pais?: Pais,
    telefone?: string,
    anexo?: HTMLInputElement,
    cidadeId?: number,
    estadoId?: number,
    paisId?: number,
    created?: Date,
    updated?: Date
}


export interface FormaPagamento {
    codigo?: number,
    situacao?: Boolean,
    formaPagamento?: string,
    franquiaId?: number,
    franquia?: Franquia,
    created?: Date,
    updated?: Date
}


export interface Cliente {
    codigo?: number,
    cliente?: string,
    apelido?: string,
    cpf?: string,
    sexo?: string,
    telefone?: string,
    celular?: string,
    email?: string,
    endereco?: string,
    situacao?: Boolean,
    cidade?: Cidade,
    estado?: Estado,
    pais?: Pais,
    franquiaId?: number,
    franquia?: Franquia,
    cidadeId?: number,
    estadoId?: number,
    paisId?: number,
    created?: Date,
    updated?: Date
}


export interface Venda {
    modelo?: string,
    serie?: string,
    numeroNota?: string,
    clienteId?: number,
    franquiaId?: number,
    dataEmissao?: Date,
    usuarioId?: number,
    condicaoPagamentoId?: number,
    situacao?: Boolean,
    cliente?: Cliente,
    franquia?: Franquia,
    usuario?: Usuario,
    condicaoPagamento?: CondicaoPagamento,
    itensVenda?: ItemVenda[],
    contasAReceber?: ContasAReceber[],
    created?: Date,
    updated?: Date
}


export interface GrupoProduto {
    codigo?: number,
    grupoProduto?: string,
    exigeAno?: Boolean,
    situacao?: Boolean,
    anexoUuid?: string,
    nomeArquivo?: string,
    anexo?: HTMLInputElement,
    created?: Date,
    updated?: Date
}


export interface Fornecedor {
    codigo?: number,
    razaoSocial?: string,
    cnpj?: string,
    telefone?: string,
    celular?: string,
    endereco?: string,
    numero?: string,
    bairro?: string,
    email?: string,
    inscricaoEstadual?: string,
    cep?: string,
    situacao?: Boolean,
    cidade?: Cidade,
    estado?: Estado,
    pais?: Pais,
    condicaoPagamento?: CondicaoPagamento,
    cidadeId?: number,
    estadoId?: number,
    paisId?: number,
    created?: Date,
    updated?: Date
}


export interface CondicaoPagamento {
    codigo?: number,
    condicaoPagamento?: string,
    juros?: number,
    multa?: number,
    desconto?: number,
    situacao?: Boolean,
    prazo?: Boolean,
    franquiaId?: number,
    franquia?: Franquia,
    parcelas?: CondicaoPagamentoParcela[],
    created?: Date,
    updated?: Date
}


export interface AmbienteImagem {
    codigo?: number,
    ambiente?: Ambiente,
    anexoUuid?: string,
    nomeArquivo?: string,
    anexo?: HTMLInputElement,
    ambienteId?: number,
    created?: Date,
    updated?: Date
}


export interface Cidade {
    codigo?: number,
    cidade?: string,
    ddd?: string,
    estado?: Estado,
    situacao?: Boolean,
    estadoId?: number,
    created?: Date,
    updated?: Date
}


export interface Arquivo {
    id?: number,
    uuid?: string,
    nomeOriginal?: string,
    fileTransfer?: HTMLInputElement,
    rootPath?: string,
    mimeType?: string,
    created?: Date,
    updated?: Date
}


export interface Mesa {
    numeroMesa?: number,
    ambiente?: Ambiente,
    quantidadeLugares?: number,
    situacao?: Boolean,
    ambienteId?: number,
    created?: Date,
    updated?: Date
}


export interface Usuario {
    codigo?: number,
    usuario?: string,
    email?: string,
    senha?: string,
    telefone?: string,
    cpf?: string,
    perfilUsuario?: PerfilUsuario,
    situacao?: Boolean,
    anexoUuid?: string,
    nomeArquivo?: string,
    franquia?: Franquia,
    anexo?: HTMLInputElement,
    franquiaId?: number,
    created?: Date,
    updated?: Date
}


export interface ContasAPagar {
    modelo?: string,
    serie?: string,
    numeroNota?: string,
    numeroParcela?: number,
    fornecedorId?: number,
    franquiaId?: number,
    dataEmissao?: Date,
    situacaoLiquidez?: Boolean,
    desconto?: number,
    juros?: number,
    multa?: number,
    valorPago?: number,
    dataPagamento?: Date,
    formaPagamentoId?: number,
    dataVencimento?: Date,
    valorParcela?: number,
    situacao?: Boolean,
    isAvulso?: Boolean,
    created?: Date,
    updated?: Date,
    fornecedor?: Fornecedor,
    franquia?: Franquia,
    formaPagamento?: FormaPagamento
}


export interface CondicaoPagamentoParcela {
    dias?: number,
    porcentagem?: number,
    parcela?: number,
    condicaoPagamento?: CondicaoPagamento,
    formaPagamento?: FormaPagamento,
    condicaoPagamentoId?: number,
    formaPagamentoId?: number,
    created?: Date,
    updated?: Date
}


export interface CondicaoPagamentoFornecedor {
    fornecedor?: Fornecedor,
    franquia?: Franquia,
    CondicaoPagamento?: CondicaoPagamento,
    fornecedorId?: number,
    franquiaId?: number,
    condicaoPagamentoId?: number,
    created?: Date,
    updated?: Date
}


export interface Ambiente {
    codigo?: number,
    franquia?: Franquia,
    ambiente?: string,
    descricao?: string,
    capacidadeMesas?: number,
    situacao?: Boolean,
    franquiaId?: number,
    ambienteImagems?: AmbienteImagem[],
    mesas?: Mesa[],
    quantidadeMesas?: number,
    created?: Date,
    updated?: Date
}


export interface ItemCompra extends Produto {
    modelo?: string,
    serie?: string,
    numeroNota?: string,
    fornecedorId?: number,
    produtoId?: number,
    franquiaId?: number,
    quantidade?: number,
    valorUnitario?: number,
    fornecedor?: Fornecedor,
    custoUnitario?: number,
    franquia?: Franquia
}


export let TipoFreteValues: string[] = ['PAGO_PELO_DESTINATARIO', 'PAGO_PELO_FORNECEDOR'];
export type TipoFrete = 'PAGO_PELO_DESTINATARIO' | 'PAGO_PELO_FORNECEDOR';


export interface Estado {
    codigo?: number,
    estado?: string,
    uf?: string,
    pais?: Pais,
    situacao?: Boolean,
    paisId?: number,
    created?: Date,
    updated?: Date
}


export interface Compra {
    modelo?: string,
    serie?: string,
    numeroNota?: string,
    fornecedorId?: number,
    franquiaId?: number,
    usuarioId?: number,
    condicaoPagamentoId?: number,
    dataChegada?: Date,
    tipoFrete?: TipoFrete,
    frete?: number,
    seguro?: number,
    despesa?: number,
    situacao?: Boolean,
    dataEmissao?: Date,
    fornecedor?: Fornecedor,
    franquia?: Franquia,
    usuario?: Usuario,
    condicaoPagamento?: CondicaoPagamento,
    itensCompra?: ItemCompra[],
    contasAPagar?: ContasAPagar[],
    created?: Date,
    updated?: Date
}


export interface ItemVenda extends Produto {
    modelo?: string,
    serie?: string,
    numeroNota?: string,
    produtoId?: number,
    clienteId?: number,
    franquiaId?: number,
    quantidade?: number,
    valorVenda?: number,
    cliente?: Cliente,
    franquia?: Franquia
}


export interface Estoque {
    franquia?: Franquia,
    produto?: Produto,
    precoCusto?: number,
    precoVenda?: number,
    saldo?: number,
    fornecedor?: Fornecedor,
    dataUltimaCompra?: Date,
    franquiaId?: number,
    produtoId?: number,
    fornecedorId?: number,
    created?: Date,
    updated?: Date
}


export interface Produto {
    codigo?: number,
    produto?: string,
    descricao?: string,
    ano?: number,
    situacao?: Boolean,
    anexoUuid?: string,
    nomeArquivo?: string,
    grupoProduto?: GrupoProduto,
    unidadeComercial?: string,
    codigoBarras?: string,
    anexo?: HTMLInputElement,
    grupoProdutoId?: number,
    estoques?: Estoque[],
    currentEstoque?: Estoque,
    created?: Date,
    updated?: Date
}


export interface Pais {
    codigo?: number,
    pais?: string,
    sigla?: string,
    ddi?: string,
    situacao?: Boolean,
    created?: Date,
    updated?: Date
}


export let PerfilUsuarioValues: string[] = ['FRANQUIADOR', 'FRANQUIADO'];
export type PerfilUsuario = 'FRANQUIADOR' | 'FRANQUIADO';


export interface ContasAReceber {
    modelo?: string,
    serie?: string,
    numeroNota?: string,
    numeroParcela?: number,
    clienteId?: number,
    franquiaId?: number,
    dataEmissao?: Date,
    situacaoLiquidez?: Boolean,
    desconto?: number,
    juros?: number,
    multa?: number,
    valorRecebido?: number,
    dataRecebimento?: Date,
    formaPagamentoId?: number,
    dataVencimento?: Date,
    valorParcela?: number,
    situacao?: Boolean,
    isAvulso?: Boolean,
    cliente?: Cliente,
    franquia?: Franquia,
    formaPagamento?: FormaPagamento,
    created?: Date,
    updated?: Date
}



