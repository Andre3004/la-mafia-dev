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

export let PerfilUsuarioValues: string[] = ['ADMINISTRADOR', 'USUARIO'];
export type PerfilUsuario = 'ADMINISTRADOR' | 'USUARIO';


export interface Arquivo {
    uuid?: string,
    nomeOriginal?: string,
    fileTransfer?: HTMLInputElement,
    rootPath?: string,
    mimeType?: string,
    id?: number,
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
    anexoByte?: number,
    anexo?: HTMLInputElement,
    created?: Date,
    updated?: Date
}



