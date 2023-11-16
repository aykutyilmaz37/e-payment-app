export type GetPaymentType = {
    content:string;
}


export type PostPaymentType = {
    packageIds: string[];
    cardHolderName: string;
    cardNumber:string;
    expireDate:string;
    cvv:string;
    totalAmount:number;
}