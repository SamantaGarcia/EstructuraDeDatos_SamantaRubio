import ArbolBinario from "./arbol.js"
import Product from "./List.js"

class Main{
    constructor(){
        let valor = new ArbolBinario(document.querySelector("#div"));
    

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
            valor.Agregar(product);
        } form.classList.add("was-validated");
    });

    // document.querySelector("#btnSearch").addEventListener("click", () =>{
    //     let searchName = document.querySelector("#searchName").value;
    //     valor.Search(searchName);
    // });
};
}
let m = new Main();