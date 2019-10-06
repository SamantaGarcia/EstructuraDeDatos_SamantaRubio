export default class List{
    constructor(schedule){
        this._schedule = schedule;
        this._myArray = new Array(20);
        this._list = '';
        this._item = 0;
    }
    
    addProduct(product){
        
        if (this._item > 20) {
            return alert('El array está lleno');
        }else{
        let objProduct = {
            code : product.code,
            name : product.name,
            price : product.price,
            quantity : product.quantity,
            description : product.description
        };

        if (this._item == 0) {
            this.pushInArray(objProduct);
            console.log(this._myArray);
        }else{     
            this.order(objProduct.code, objProduct);
        }
     }
}

    pushInArray(objProduct){
        this._list+= 'code: ' + objProduct.code +
                ' name: ' + objProduct.name + 
                ' price: ' + objProduct.price + 
                ' quantity: ' + objProduct.quantity + 
                ' description: ' + objProduct.description + '\n';
            document.getElementById('div').innerText = this._list;

            this._myArray[this._item] = objProduct;
            this._item ++;   
               
    }

    binarySearch(value) {
        let first = 0;   
        let last = this._item -1;
        let position = -1;
        let found = false;
        let middle;
        //console.log("cuantos: "+ this._item);
        while (found === false && first <= last) {
            middle = Math.floor((first + last)/2);
            //console.log(middle + " .. "+this._myArray[middle].code)
            if (this._myArray[middle].code == value) {
                found = true;
                position = middle;
            } else if (this._myArray[middle].code > value) {  
                last = middle - 1;
            } else {  
                first = middle + 1;
            }
        }
        document.getElementById('div').innerText = 
        'code: ' + this._myArray[middle].code +
        ' name: ' + this._myArray[middle].name + 
        ' price: ' + this._myArray[middle].price + 
        ' quantity: ' + this._myArray[middle].quantity + 
        ' description: ' + this._myArray[middle].description + '\n';;
        //console.log(position);
        return position;
    }

    // order(code, object){
    //     let before = this._item -1;
    //     console.log("before "+ this._myArray[before].code);
    //     if (code < this._myArray[before].code) {
    //         while (code < this._myArray[before].code) {
    //            newP= this._myArray[before]-1;
    //         }
    //         object = this._myArray[before];
    //         this.pushInArray(objProduct);
    //         console.log(this._myArray);
    //         console.log("Es menor");  
    //     } else{
    //         console.log("Es mayor");  
    //     }
    // }


}

