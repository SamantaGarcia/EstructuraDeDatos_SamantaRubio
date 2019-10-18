export default class List{
    constructor(schedule){
        this._schedule = schedule;
        this._list = '';
        this._init = null;
        this._last = null;
        this._temp = null;
    }

    get init(){
        return this._init;
    }
    set init(init){
        this._init = init;
    }
    get temp(){
        return this._temp;
    }
    set temp(temp){
        this._temp = temp;
    }

    _addObject(product){
        let objProduct = {
            code : product.code,
            name : product.name,
            price : product.price,
            quantity : product.quantity,
            description : product.description
        };
        this._show(objProduct); 
    }

    add(newP){
        if (this._init == null) {
            this._init = newP;
        }else{
            this._addNext(newP, this._init);
        }
        this._addObject(newP);
        console.log(this._init);
    }

    _addNext(newP, last){    
        let helperP = null;   
        if (newP.code >= last.code && last._next == null) {
            last._next = newP;
            console.log("Mayor");
            return;
        }         
        else if (newP.code < last.code) {
            helperP = last._previous;
            last._previous = newP;
            newP._previous = helperP;
            console.log("Menor");
            return;
        }
         else {
            this._addNext(newP, last._next);
              console.log("Recursividad");
        }  
    }

    _show(newP){
        this._list+= 'code: ' + newP.code +
                ' name: ' + newP.name + 
                ' price: ' + newP.price + 
                ' quantity: ' + newP.quantity + 
                ' description: ' + newP.description + '\n';
            document.getElementById('div').innerText = this._list;
    }

    Search(value){
        this._temp = this._init;

        while(this._temp.code != value){
            this._temp=this._temp._next;
        }              
            //console.log(this._temp);
            this._list='';
            this._show(this._temp);
            
        
    }
    Delete(value){
        this._temp = this._init;

        while(this._temp._next.code != value){
            this._temp=this._temp._next;
            console.log(this._temp)
        }              
        if (this._temp._next.code == value) {
            this._temp._next = this._temp._next._next;
            
        }
    }

}
