export interface AddContact {
    ContactId: number;
    FirstName: string;
    LastName: string;
    Gender: number;
    DateOfBirth: Date;
    ContactDetails: any[];
}

export interface RootObject {
    HasError: boolean;
    ErrorType: string;
    Data: AddContact[];
    ErrorCode: number;
    ErrorDescription?: any;
}