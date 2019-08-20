var botonPrimos = document.querySelector("#botonPrimos");
botonPrimos.addEventListener("click", calcularPrimos);
var numero = document.querySelector("#numero");


function calcularPrimos(){
    let num = Number(numero.value);
    let reciduo;
    
    for (let i = 2; i < num; i++) {
            let p = 0;
            console.log("i: " + i);
            for (let j = 2; j < i; j++) {
                reciduo= i%j;
                console.log(i + "%" + j + " reciduo: "+ reciduo);
                if (reciduo ===0) {
                    p=p+1;
                    console.log("p: " + p);
                }
        }
            if (p <1) {
                var r = document.createElement("DIV");
                r.innerHTML = i;
                document.body.appendChild(r); 
                        }
    }
}