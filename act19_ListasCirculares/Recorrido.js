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
        this._list+= 
                ' Id: ' + base.id +
                ' Nombre: ' + base.nombre +
                ' Minutos: ' + base.minutos + '\n';
            document.getElementById('div').innerText = this._list;
    }
    _imprimir2(base){
        this._list+= 
                ' Id: ' + base.id +
                ' Nombre: ' + base.nombre +
                ' Minutos: ' + base.minutos + '\n';
            document.getElementById('div2').innerText = this._list;
    }
    _imprimir3(base){
        this._list+= 
                ' Id: ' + base.id +
                ' Nombre: ' + base.nombre +
                ' Minutos: ' + base.minutos + '\n';
            document.getElementById('div3').innerText = this._list;
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
            this._inicio._anterior = this._ultimo;
        }else{
            this._agregarSiguiente(nuevaB, this._inicio);
        }
        this._agregarObj(nuevaB);
        console.log(this._inicio);
    }

    _agregarSiguiente(nuevaB, siguiente){    
        let helperP = null;
        if (nuevaB.id >= siguiente.id && siguiente._siguiente == null) {
            siguiente._siguiente = nuevaB;
            this._ultimo = siguiente._siguiente;
            nuevaB._anterior = siguiente;
            console.log("Mayor");
            return;
        }         
        else if (nuevaB.id < siguiente.id) {
            helperP = siguiente._anterior;
            siguiente._anterior = nuevaB;
            nuevaB._anterior = helperP;
            nuevaB._siguiente = siguiente;
            nuevaB._anterior._siguiente = nuevaB;
            console.log("Menor");
            return;
        }
        else {
            this._agregarSiguiente(nuevaB, siguiente._siguiente);
            console.log("Recursividad");
        }  
    }

    Search(valor){
        this._temp = this._inicio;

        while(this._temp.id != valor){
            this._temp=this._temp._siguiente;
        }            
            this._list='';
            this._imprimir2(this._temp); 
            return this._temp;          
        
    }
    Delete(value){
        this._temp = this._inicio;

        while(this._temp._siguiente.id != value){
            this._temp=this._temp._siguiente;
            console.log(this._temp)
        }              
        if (this._temp._siguiente.id == value) {
            this._temp._siguiente = this._temp._siguiente._siguiente;
        }
    }

    crearRecorrido(baseInicio, horaInicio, horaFin){
        
        let baseNueva = this.Search(baseInicio);        
        let temp = baseNueva;
        let contadorMinutos = temp._minutos;

        horaInicio = horaInicio.split(":");
        horaFin = horaFin.split(":");

        let minsI = (+horaInicio[0]*60) + (+horaInicio[1]);
        let minsF = (+horaFin[0]*60) + (+horaFin[1]);

        let totalM= minsI - minsF;
        if (totalM < 0) {
            totalM = totalM * -1;
        }

        while (contadorMinutos <= totalM) {
            temp = temp._siguiente;
            contadorMinutos += temp._minutos;
            console.log("contador: "+contadorMinutos);
            this._imprimir3(temp);
            baseNueva = temp;  

        }
        
              
    }
}

