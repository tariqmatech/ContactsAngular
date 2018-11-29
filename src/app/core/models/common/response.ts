export interface Response<T>  {
    HasError: boolean;
    ErrorType: string;
    Data: T;
    ErrorCode: number;
    ErrorDescription?: any;
}