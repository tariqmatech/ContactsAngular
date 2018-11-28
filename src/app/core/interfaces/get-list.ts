export interface GetList {
    ContactTypeId: number;
    ContactTypeName: string;
}

export interface RootObject {
    HasError: boolean;
    ErrorType: string;
    Data: GetList[];
    ErrorCode: number;
    ErrorDescription?: any;
}
