export interface GetAllContacts {
    ContactDetailId: number;
    ContactTypeId: number;
    ContactInfo: string;
}

export interface Data {
    ContactId: number;
    FirstName: string;
    LastName: string;
    Gender: number;
    DateOfBirth: Date;
    ContactDetails: GetAllContacts[];
}

export interface RootObject {
    HasError: boolean;
    ErrorType: string;
    Data: Data;
    ErrorCode: number;
    ErrorDescription?: any;
}
