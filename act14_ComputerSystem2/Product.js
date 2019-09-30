export default class Product{
    constructor(product){
        this._code = product.code;
        this._name = product.name;
        this._price = product.price;
        this._quantity = product.quantity;
        this._description = product.description;
    }
    get code(){
        return this._code;
    }
    get name(){
        return this._name;
    }
    get price(){
        return this._price;
    }
    get quantity(){
        return this._quantity;
    }
    get description(){
        return this._description;
    }

    set code(code){
        this._code = code;
    }
    set name(name){
        this._name = name;
    }
    set price(price){
        this._price = price;
    }
    set quantity(quantity){
        this._quantity = quantity;
    }
    set description(description){
        this._description = description;
    }
}