/////Esta no sirve de nada 
export default class Raiz{
    constructor(dato){
        this._dato = dato;
        this._sonRight = null;
        this._sonLeft = null;
    }
    get sonRight(){
        return this._sonRight;
    }
    get sonLeft(){
        return this._sonLeft;
    }
    set sonRight(sonRight){
        this._sonRight = sonRight;
    }
    set sonLeft(sonLeft){
        this._sonLeft = sonLeft;
    }
    toString(){
        return this._dato;
    }
}