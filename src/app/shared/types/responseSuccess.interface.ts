export interface ResponseSuccessInterface<T> {
  errorMessage: any[]
  code: any
  payload: T
  success: boolean
  successMessage: string
  pageable: Pageable
}
export interface Pageable {
  currentPage: number
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export interface ResponseSuccessInterfaceDcor<T> {
  errorMessage: any[]
  code: any
  payload: T
  success: boolean
  successMessage: string
  pageable: PageableDcor
}

export interface PageableDcor {
  page_number: number
  page_size: number
  total_elements: number
  total_pages: number
}