var boton = document.querySelector("#boton");
boton.addEventListener("click", review);

var contador = 0;
function review(){
    var a;
    var b;
   

        do {
            a = Math.trunc(Math.random() * (2999 - 1) + 1);
        b = Math.trunc(Math.random() * (2999 - 1) + 1);
        if (a != b && a<3000 && b<3000) {
            var resultado = numsAmigos(a,b);
        }
        } while (contador <3);
    
        
        
        
    
   
    
        
        
        //document.getElementById("#res").innerHTML += resultado;
    
    
}

function numsAmigos(a,b){
    let dividir_a =0;
    let dividir_b =0;
    for (let j = 1; j < a; j++) {
        dividir_a += Math.trunc(a/j);
        
    }
    console.log("dividir_a: "+dividir_a);
    for (let h = 1; h < b; h++) {
        dividir_b += Math.trunc(b/h);
        
    }
    console.log("dividir_b: "+dividir_b);

    if (dividir_a === b || dividir_b === a) {
        console.log("NUMEROS AMIGOS: "+a + "y" + b);
        contador +=1;
    }
}