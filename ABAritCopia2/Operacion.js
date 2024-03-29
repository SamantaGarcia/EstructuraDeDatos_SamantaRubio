export default class Operacion{
    constructor(){
        this._start = null;
        this._raiz = null;
        this._tail = null;
        this._textPre = "";
        this._textPost = "";
        this._textIn = "";
    }
    //Get and set del inicio
    get start(){
        return this._start;
    }
    set start(start){
        this._start = start;
    }
    //get de los orden 
    get textIn(){
        return this._textIn;
    }
    get textPre(){
        return this._textPre;
    }
    get textPost(){
        return this._textPost;
    }
    //Get and set de la cola
    get tail(){
        return this._tail;
    }
    set tail(tail){
        this._tail = tail;
    }
    //Get and set de raiz
    get raiz(){
        return this._raiz;
    }
    set raiz(raiz){
        this._raiz = raiz;
    }
    //Se raliza la lista doble 
    addObjeto(data){
        if(this._start == null){
            this._start = data;
        }else{
            let tail = this._nextStart(data,this._start);
            this._tail = tail;
        }            
    } 
    _nextStart(data, start){
        if(start.next == null){
            start.next = data;
            data.previous = start;
        }else{
            this._nextStart(data,start.next);
        }
        return data;
    }
    
    armarArbol(){
        while (this._start.next != null ) {
            if (this._start.next == "*" || this._start.next == "/") {
                this._raiz = this._start.next;
                this._raiz.sonLeft = this._raiz.previous;
                this._raiz.sonRight = this._raiz.next;
                this._raiz.next = this._raiz.next.next;
                this._raiz.previous = this._raiz.previous.previous;
               
                console.log(this._raiz);
                
                this._start.next = this._raiz;
                // this.armarArbol();
            }
            // if (this._start != Number && (this._start.next == "*" || this._start.next == "/")) {
            //     this._raiz.sonLeft = this._raiz.previous.previous;
            //     this._raiz.sonRight = this._raiz.next;
            //     this._raiz.next = this._raiz.next.next;
            //     this._raiz.previous = this._raiz.previous.previous;
            //     console.log(this._raiz);
            //     this._start.next = this._raiz.next;
            //     this.armarArbol();
            // }
            else if (this._start.next == "+" || this._start.next == "-"){
               // console.log(this._raiz);
                this._start.next = this._start.next.next;
                this.armarArbol();
            }
            else {
                //console.log(this._raiz);
                this._start.next = this._start.next.next;
                this.armarArbol();
            }
        }
    }
   

    //Recorrido InOrder
    recordInventoryIn(){
        /// Izq, Raiz, Derecha
        this._orderInText();
    }
    _orderInText(){
        this._textIn = "";
        if(this._raiz == null){
            this._textIn = "No hay nada";
        }else{
            this._textIn += this._orderIn(this._raiz);
        }
    }
    _orderIn(start){
        let temp = "";
        if(start.sonLeft !=null){            
            temp += this._orderIn(start.sonLeft);
        }
        temp += start.toString() + "<br>";
        if(start.sonRight !=null){
            temp += this._orderIn(start.sonRight);
        }
        return temp;
    }
    //Recorrido PreOrder
    recordInventoryPre(){
        /// Raiz, Izq, Dere
        this._orderPreText();
    }
    _orderPreText(){
        this._textPre = "";
        if(this._raiz == null){
            this._textPre = "No hay nada";
        }else{
            this._textPre += this._orderPre(this._raiz);
        }
    }
    _orderPre(start){
        let temp = "";
        temp += start.toString() + "<br>";
        if(start.sonLeft !=null){            
            temp += this._orderPre(start.sonLeft);
        }
        if(start.sonRight !=null){
            temp += this._orderPre(start.sonRight);
        }
        return temp;
    }
    //Recorrido PostOrder
    recordInventoryPost(){
        /// Izq, Dere, Raiz
        this._orderPostText();
    }
    _orderPostText(){
        this._textPost = "";
        if(this._raiz == null){
            this._textPost = "No hay nada";
        }else{
            this._textPost += this._orderPost(this._raiz);
        }
    }
    _orderPost(start){
        let temp = "";
        if(start.sonLeft !=null){            
            temp += this._orderPost(start.sonLeft);
        }
        if(start.sonRight !=null){
            temp += this._orderPost(start.sonRight);
        }
        temp += start.toString() + "<br>";
        return temp;
    }

    quitFromInventory(data) {
        //console.log(data);
        if (data == null){
            return console.log("No existe ese producto con ese codigo");
        }else{
            if (data == this._start.dato) {
                this._start = this._start.next;
                if (this._start != null) {
                    this._start.previous = null;
                }
                if (this._start == this._tail) {
                    this._tail = null;
                }
            } else {
                this._find(data);
            }
        }
    }
    _find(code){
        let objeto = this._nextData(code,this._start);
        //console.log(objeto);
        if(objeto == null){
            return "Error";
        }else if(objeto === this._tail){
            //console.log(objeto);
            if(objeto.previous == this._start){
                this._tail = objeto.previous;
                this._start.next = null;
            }else{
                this._tail = objeto.previous;
                objeto.previous.next = null;
            }
        }else{
            objeto.next.previous = objeto.previous;
            objeto.previous.next = objeto.next;
            objeto = null;
        }
    }
    _nextData(code, start) {
        while (start != null){
            if (start.dato == code){
                return start;
            }
            start = start.next;
        }
        return null;
    }
}