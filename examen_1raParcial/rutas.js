class Transporte{
    constructor(nombreCamion, tiempoDuracion){
        this._nombreCamion = nombreCamion;
        this._tiempoDuracion = tiempoDuracion;
        this._secuenciaBases = [];
    }

    get nombreCamion(){
        return this._nombreCamion;
    }
    set nombreCamion(nombreCamion){
        this._nombreCamion = nombreCamion;
    }
    get tiempoDuracion(){
        return this._tiempoDuracion;
    }
    set tiempoDuracion(tiempoDuracion){
        this._tiempoDuracion = tiempoDuracion;
    }
    get secuenciaBases(){
        return this._secuenciaBases;
    }
    set secuenciaBases(secuenciaBases){
        this._secuenciaBases = secuenciaBases;
    }
}

class Base{
    constructor(baseNombre, referencia, latitud, longitud, numSecuencia){
        this._baseNombre = baseNombre;
        this._referencia = referencia;
        this._latitud = latitud;
        this._longitud = longitud;
        this._numSecuencia = numSecuencia;
        
    }
    get baseNombre(){
        return this._baseNombre;
    }
    set baseNombre(baseNombre){
        this._baseNombre = baseNombre;
    }
    get referencia(){
        return this._referencia;
    }
    set referencia(referencia){
        this._referencia = referencia;
    }
    get latitud(){
        return this._latitud;
    }
    set latitud(latitud){
        this._latitud = latitud;
    }
    get longitud(){
        return this._longitud;
    }
    set longitud(longitud){
        this._longitud = longitud;
    }
    get numSecuencia(){
        return this._numSecuencia;
    }
    set numSecuencia(numSecuencia){
        this._numSecuencia = numSecuencia;
    }
    
}

class Salidas extends Base{
    constructor(nombreCamion, horaInicio, horaFin){
        super(nombreCamion)
        this.base_inicio = super.baseNombre;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
    }

    get horaInicio(){
        return this._horaInicio;
    }
    set horaInicio(horaInicio){
        this._horaInicio = horaInicio;
    }
    get horaFin(){
        return this._horaFin;
    }
    set horaFin(horaFin){
        this._horaFin = horaFin;
    }

}