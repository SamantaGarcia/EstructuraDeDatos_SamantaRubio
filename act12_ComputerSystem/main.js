import ComputerSystem from "./ComputerSystem.js";
import Article from "./Article.js";

class Main{
    constructor(){
        let schedule = new ComputerSystem(document.querySelector("#schedule"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let code = document.querySelector("#code").value;
            let name = document.querySelector("#name").value;
            let price = document.querySelector("#price").value;
            let quantity = document.querySelector("#quantity").value;
            let description = document.querySelector("#description").value;

            let objArticle = {
                code: code,
                name: name,
                price: price,
                quantity: quantity,
                description: description
            };

            let article = new Article(objArticle);
            schedule.addToTable(article);

        });

        document.querySelector("#search").addEventListener("click", () => {
            let inputCode = document.querySelector("#inputCode").value;
            schedule.searchRow(inputCode);
        });
    }
}

let m = new Main();