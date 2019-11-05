class ColasFifo {
    constructor(proceso, tareas){
        this._proceso = proceso
        this._tareas = tareas;
        this._siguiente = null;
        this._contadorProcesos = 0;
        this._temp = null;
    }

    get proceso(){
        return this._proceso;
    }

    set proceso(proceso){
        this._proceso = proceso;
    }

    get tareas(){
        return this._tareas;
    }

    set tareas(tareas){
        this._tareas = tareas;
    }
    get siguiente(){
        return this._siguiente;
    }

    set siguiente(siguiente){
        this._siguiente = siguiente;
    }

    nuevoProceso(){
        let nuevo = Math.trunc(Math.random() * (100 - 1) + 1);
        if (nuevo < 40) {
            this._proceso = "Proceso"+this._contadorProcesos;
            this._contadorProcesos++;
            this._tareas = Math.trunc(Math.random() * (15 - 4) + 4);
            console.log(this._proceso, ' , ', this._tareas);
            if (this._temp == null) {
                this._temp = this._objeto(this._proceso, this._tareas, this._siguiente);
                this._atenderProceso(this._temp);
             } else{
                 this._temp.siguiente = this._objeto(this._proceso, this._tareas, this._siguiente);
                 this._atenderProcesos(this._temp, this._temp.siguiente);
                 this._temp = this._temp.siguiente;
                
            }
        } else {
            console.log("Nada entra");
        }
    }

    _objeto(pso, tar, sig){
        let objProceso = {
            proceso : pso,
            tareas : tar,
            siguiente : sig
        };
        //console.log(objProceso);
        return objProceso; 
    }

    _atenderProceso(objetico){
        objetico.tareas = objetico.tareas -1;
        //console.log(objetico);
    }
    _atenderProcesos(objetico, siguiente){
        objetico.tareas = objetico.tareas -1;
        siguiente.tareas = siguiente.tareas -1;
        console.log(objetico);
    }


}
let n = new ColasFifo();
for (let i = 0; i < 301; i++) {    
    n.nuevoProceso();

}
