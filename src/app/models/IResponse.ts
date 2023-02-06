export interface IResponse<T> {
    errorMessage: any[]
    code: any
    payload: T
    success: boolean
    successMessage: string
}