export class Orders {
    constructor(
        public orderNumber: number,
        public orderDate: string,
        public requiredDate: string,
        public shippedDate: string,
        public status: string,
        public comments: string,
        public customerNumber: number,
        public productCode: string,
        public quantityOrdered: number,
        public priceEach: number,
        public orderLineNumber: number,
    ){

    }
}
