export default class Base{
    constructor(base){
        this._id = base.id;
        this._nombre = base.nombre;
        this._minutos = base.minutos;
        this._siguiente = null;
        this._anterior = null;
    }

    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get minutos(){
        return this._minutos;
    }
    get siguiente(){
        return this._siguiente;
    }
    get anterior(){
        return this._anterior;
    }

    set id(id){
        this._id = id;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set minutos(minutos){
        this._minutos = minutos;
    }
    set siguiente(siguiente){
        this._siguiente = siguiente;
    }
    set anterior(anterior){
        this._anterior = anterior;
    }
}