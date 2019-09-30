export default class List{
    constructor(schedule){
        this._schedule = schedule;
        this._myArray = new Array(20);
        this._list = '';
        this._item = 0;
        
    }
    
    addProduct(product){
        if (this._item > 20) {
            return alert('Array lleno');
        }else{
            if (product.code < objProduct[i].code) {
                
            }
        let objProduct = {
            code : product.code,
            name : product.name,
            price : product.price,
            quantity : product.quantity,
            description : product.description
        };
              this._list+= 'code: ' + objProduct.code +
                ' name: ' + objProduct.name + 
                ' price: ' + objProduct.price + 
                ' quantity: ' + objProduct.quantity + 
                ' description: ' + objProduct.description + '\n';
            document.getElementById('div').innerText = this._list;

            this._myArray[this._item] = objProduct;
            this._item = this._item + 1;           

            }
    
        console.log(this._myArray);
    }

    _findProduct(email){
        let foundPos = -1
        this._contacts.forEach((e, index) => {
            if (e.email === email) {
                foundPos = index;
                return;
            }
        });
        return foundPos;
    }
}

