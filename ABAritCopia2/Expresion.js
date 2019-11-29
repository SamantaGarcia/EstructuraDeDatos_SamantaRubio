export default class Expresion{
    constructor(dato){
        this._dato = dato;
    }
    get dato(){
        return this._dato;
    }
    set dato(dato){
        this._dato = dato;
    }
    toStringExpresion(){
        return this._dato;
    }
}