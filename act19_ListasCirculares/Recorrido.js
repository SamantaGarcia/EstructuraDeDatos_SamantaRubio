export default class Recorrido{
    constructor(recorrido){
        this._recorrido = recorrido;
        this._inicio = null;
        this._ultimo = null;
        this._temp = null;
    }

    get inicio(){
        return this._inicio;
    }
    set inicio(inicio){
        this._inicio = inicio;
    }
    get ultimo(){
        return this._ultimo;
    }
    set ultimo(ultimo){
        this._ultimo = ultimo;
    }
    get temp(){
        return this._temp;
    }
    set temp(temp){
        this._temp = temp;
    }

    _imprimir(base){
        this._list+= 'Nombre: ' + base.code +
                ' Minutos: ' + base.description + '\n';
            document.getElementById('div').innerText = this._list;
    }

    _agregarObj(base){
        let objBase = {
            id : base.id,
            nombre : base.nombre,
            minutos : base.minutos
        };
        this._imprimir(objBase); 
    }

    agregar(nuevaB){
        if (this._inicio == null) {
            this._inicio = nuevaB;
        }else{
            this._agregarSiguiente(nuevaB, this._inicio);
        }
        this._addObject(nuevaB);
        console.log(this._inicio);
    }

    _agregarSiguiente(nuevaB, siguiente){    
        let helperP = null;
        if (nuevaB.id >= siguiente.id && siguiente._next == null) {
            siguiente._next = nuevaB;
            this._ultimo = siguiente._next;
            //
            nuevaB._previous = siguiente;
            console.log("Mayor");
            return;
        }         
        else if (nuevaB.id < siguiente.id) {
            helperP = siguiente._previous;
            siguiente._previous = nuevaB;
            nuevaB._previous = helperP;
            nuevaB._next = siguiente;
            nuevaB._previous._next = nuevaB;
            console.log("Menor");
            return;
        }
         else {
            this._agregarSiguiente(nuevaB, siguiente._next);
              console.log("Recursividad");
        }  
    }
}

