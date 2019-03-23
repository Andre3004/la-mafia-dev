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

export interface Lancamento {
    valor?: number,
    id?: number,
    created?: Date,
    updated?: Date
}


export interface Usuario {
    nome?: string,
    id?: number,
    created?: Date,
    updated?: Date
}



