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
    id?: number,
    codigo?: string,
    nome?: string,
    cnpj?: string,
    endereco?: string,
    cidade?: string,
    anexoUuid?: string,
    nomeArquivo?: string,
    situacao?: Boolean,
    anexo?: HTMLInputElement,
    created?: Date,
    updated?: Date
}


export interface Ambiente {
    id?: number,
    franquia?: Franquia,
    nome?: string,
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


export interface AmbienteImagem {
    id?: number,
    ambiente?: Ambiente,
    anexoUuid?: string,
    nomeArquivo?: string,
    anexo?: HTMLInputElement,
    ambienteId?: number,
    created?: Date,
    updated?: Date
}


export let PerfilUsuarioValues: string[] = ['ADMINISTRADOR', 'USUARIO'];
export type PerfilUsuario = 'ADMINISTRADOR' | 'USUARIO';


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


export interface GrupoProduto {
    id?: number,
    nome?: string,
    franquia?: Franquia,
    exigeAno?: Boolean,
    codigo?: string,
    situacao?: Boolean,
    anexoUuid?: string,
    nomeArquivo?: string,
    franquiaId?: number,
    anexo?: HTMLInputElement,
    created?: Date,
    updated?: Date
}


export interface Produto {
    id?: number,
    nome?: string,
    descricao?: string,
    codigo?: string,
    ano?: number,
    situacao?: Boolean,
    anexoUuid?: string,
    nomeArquivo?: string,
    grupoProduto?: GrupoProduto,
    estoque?: number,
    precoCusto?: number,
    precoVenda?: number,
    anexo?: HTMLInputElement,
    grupoProdutoId?: number,
    created?: Date,
    updated?: Date
}


export interface Usuario {
    id?: number,
    nome?: string,
    email?: string,
    senha?: string,
    telefone?: string,
    cpf?: string,
    perfilUsuario?: PerfilUsuario,
    situacao?: Boolean,
    anexoUuid?: string,
    nomeArquivo?: string,
    anexo?: HTMLInputElement,
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



