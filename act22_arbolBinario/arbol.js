export default class ArbolBinario{
    constructor(valor){
        this._valor = valor;
        this._list = '';
        this._nodoRaiz = null;
        this._temp = null;
    }

    get nodoRaiz(){
        return this._nodoRaiz
    }
    set nodoRaiz(nodoRaiz){
        this._nodoRaiz = nodoRaiz;
    }

    Agregar(){
        if (this._nodoRaiz == null) {
            this._nodoRaiz=this._valor;    
            console.log("Raíz: "+ this._nodoRaiz);        
        }
        else{
            console.log("No es el único");
        }
    }
}