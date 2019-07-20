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


export interface Estado {
    idEstado?: number,
    estado?: string,
    uf?: string,
    pais?: Pais,
    situacao?: Boolean,
    idPais?: number,
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
    grupoProdutoFranquia?: GrupoProdutoFranquia[],
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


export let PerfilUsuarioValues: string[] = ['ADMINISTRADOR', 'USUARIO'];
export type PerfilUsuario = 'ADMINISTRADOR' | 'USUARIO';


export interface Fornecedor {
    idFornecedor?: number,
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
    condicaoPagamentoId?: number,
    created?: Date,
    updated?: Date
}


export interface CondicaoPagamento {
    codigo?: number,
    juros?: number,
    multa?: number,
    desconto?: number,
    situacao?: Boolean,
    prazo?: Boolean,
    parcelas?: CondicaoPagamentoParcela[],
    created?: Date,
    updated?: Date
}


export interface Mesa {
    numeroMesa?: number,
    ambiente?: Ambiente,
    quantidadeLugaresMesa?: number,
    situacao?: Boolean,
    ambienteId?: number,
    created?: Date,
    updated?: Date
}


export interface FormaPagamento {
    codigo?: number,
    situacao?: Boolean,
    formaPagamento?: string,
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


export interface Cliente {
    idCliente?: number,
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
    cidadeId?: number,
    estadoId?: number,
    paisId?: number,
    created?: Date,
    updated?: Date
}


export interface Cidade {
    idCidade?: number,
    cidade?: string,
    ddd?: string,
    estado?: Estado,
    situacao?: Boolean,
    idEstado?: number,
    created?: Date,
    updated?: Date
}


export interface CondicaoPagamentoParcela {
    codigo?: number,
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


export interface GrupoProdutoFranquia {
    grupoProduto?: GrupoProduto,
    franquia?: Franquia,
    franquiaId?: number,
    grupoProdutoId?: number,
    created?: Date,
    updated?: Date
}


export interface Pais {
    idPais?: number,
    pais?: string,
    sigla?: string,
    ddi?: string,
    situacao?: Boolean,
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
    precoCusto?: number,
    precoVenda?: number,
    unidadeComercial?: string,
    codigoBarras?: string,
    fornecedor?: Fornecedor,
    dataUltimaCompra?: Date,
    anexo?: HTMLInputElement,
    grupoProdutoId?: number,
    fornecedorId?: number,
    created?: Date,
    updated?: Date
}



