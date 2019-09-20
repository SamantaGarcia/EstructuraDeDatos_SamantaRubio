import Article from "./Article.js";

export default class Schedule{
    constructor(scheduleTable){
        this._scheduleTable = scheduleTable;
        this._articles = [];
        this._initTables();
    }

    _initTables() {
        let lsArticles = JSON.parse(localStorage.getItem("articles"));

        if (lsArticles === null) {
            return;
          }
    
        for (var a of lsArticles.keys()){ //guarda cada valor del array uno por uno en e
            
            this.addToTable(new Article(a));
        }
        
      }

      toString(){
        return "(" + this._articles + ")";
    }

    addToTable(article){

        let row = this._scheduleTable.insertRow(-1);

        let cellCode = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellPrice = row.insertCell(2);
        let cellQuantity = row.insertCell(3);
        let cellDescription = row.insertCell(4);
        let cellDelete = row.insertCell(5);

        cellCode.innerHTML = article.code;
        cellName.innerHTML = article.name;
        cellPrice.innerHTML = article.price;
        cellQuantity.innerHTML = article.quantity;
        cellDescription.innerHTML = article.description;
        this._delete(row, article);

        let objArticle = {
            code: article.code,
            name: article.name,
            price: article.price,
            quantity: article.quantity,
            description: article.description
        };
        
        
        this._articles.push(objArticle);
        localStorage.setItem("articles", JSON.stringify(this._articles));
        console.log(this._articles);
    }
    _search(code){
      
        let foundAt = -1; //solo lo encuentra desde el 0 en adelante. Por eso se inicializa como -1
        this._articles.forEach((e, index) => {
          if (e.code === code) {
            foundAt = index;
            return;
          }
        });
        return foundAt;
      }

        
    

    _delete(row, article){     
        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = "Delete";
        btnDelete.className = "btn btn-danger";
        btnDelete.addEventListener("click", () => { 
            this._deleteRow(row, article); //llamando al metodo de delete
          }); 
        row.cells[5].appendChild(btnDelete);
      }

      _deleteRow(row, article){
        let found = this._search(article.code);

        if (found >= 0) {            
            for(let i=found;i<this._articles.length;i++)
                    {
                        this._articles[i]=this._articles[i+1];
                    }
                        this._articles[this._articles.length -= 1];
                        localStorage.setItem("articles", JSON.stringify(this._articles));
                        console.log("objeto borrado: ");
                        console.log(this._articles);
        }
    }

    _searchRow(row, article){
      let found = this._search(article.code);

      if (found >= 0) {            
          for(let i=found;i<this._articles.length;i++)
                  {
                      this._articles[i]=this._articles[i-1];
                  }
                      localStorage.setItem("articles", JSON.stringify(this._articles));
                      console.log("objeto buscado: ");
                      console.log(this._articles);
      }
  }
}