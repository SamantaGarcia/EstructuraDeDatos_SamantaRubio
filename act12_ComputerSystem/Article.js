export default class Article{
    constructor(article){
        this._code = article.code;
        this._name = article.name;
        this._price = article.price;
        this._quantity = article.quantity;
        this._description = article.description;
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
}