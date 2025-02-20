export type ID = undefined | null | number | string
export type INum = number

export type ParamsState = {
    page: number,
    size: number
}

export const initialParamsState: ParamsState = {
    page: 1,
    size: 10,
}

export type PaginationState = {
    page: number
    size: number
    totals: number
    totalPage: number,
}

export const initPaginationState: PaginationState = {
    page: 1,
    size: 10,
    totals: 0,
    totalPage: 0,
}

export type ArrayResponse<T> = {
    data: T[],
    param: any,
    paging: PaginationState
}
export type MapResponse<T> = {
    data: T,
    param: any,
}