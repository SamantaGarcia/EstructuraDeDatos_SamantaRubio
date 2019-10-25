import Recorrido from "./Recorrido.js"
import Base from "./Base.js"

class Main{
    constructor(){
        let recorrido = new Recorrido(document.querySelector("#div"));    

    document.querySelector("#btnAdd").addEventListener("click", () =>{
        let form = document.querySelector("#form");

        if (form.checkValidity() === true) {
            let id = document.querySelector("#id").value;
            let nombre = document.querySelector("#nombre").value;
            let minutos = document.querySelector("#minutos").value;
            let objBase = {
                id : id,
                nombre : nombre,
                minutos : minutos
            };

            let base = new Base(objBase);
            recorrido.agregar(base);
        } form.classList.add("was-validated");
    });

    document.querySelector("#btnSearch").addEventListener("click", () =>{
        let searchName = document.querySelector("#searchName").value;
        recorrido.Search(searchName);
    });

    document.querySelector("#btnDelete").addEventListener("click", () =>{
        let deleteName = document.querySelector("#searchName").value;
        recorrido.Delete(deleteName);
    });

    document.querySelector("#btnCrear").addEventListener("click", () =>{
        let baseInicio = document.querySelector("#baseInicio").value;
        let horaInicio = document.querySelector("#horaInicio").value;
        let horaFin = document.querySelector("#horaFin").value;
        recorrido.crearRecorrido(baseInicio, horaInicio, horaFin);
    });
};
}
let m = new Main();