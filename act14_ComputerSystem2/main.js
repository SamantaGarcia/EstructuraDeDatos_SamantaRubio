import Product from "./Product.js"
import List from "./List.js"

class Main{
    constructor(){
        let schedule = new List(document.querySelector("#div"));
    

    document.querySelector("#btnAdd").addEventListener("click", () =>{
        let form = document.querySelector("#form");

        if (form.checkValidity() === true) {
            let code = document.querySelector("#Code").value;
            let name = document.querySelector("#Name").value;
            let price = document.querySelector("#Price").value;
            let quantity = document.querySelector("#Quantity").value;
            let description = document.querySelector("#Description").value;
            let objProduct = {
                code : code,
                name : name,
                price : price,
                quantity : quantity,
                description : description
            };

            let product = new Product(objProduct);
            schedule.addProduct(product);
        } form.classList.add("was-validated");
    });
    document.querySelector("#btnSearch").addEventListener("click", () =>{
        let searchName = document.querySelector("#searchName").value;
        schedule.binarySearch(searchName);
    });

};
}
let m = new Main();