var botonSueldo = document.querySelector("#botonSueldo");
botonSueldo.addEventListener("click", calcularSueldo);

var sueldo = document.querySelector("#sueldo");
var resultado = document.querySelector("#resultado");

function calcularSueldo(){
    let s = Number(sueldo.value);
    let porciento = 0;
    let res = resultado;
    let r = 0;
    if (s >0 && s <=1000) {
        porciento= s * 0.15;
        r = s + porciento;
        res.innerHTML= "Tu nuevo sueldo es: "+ r + " con un aumento del 15%";
        
    }
    if (s >1000 && s <=1200) {
        porciento= s * 0.12;
        r = s + porciento;
        res.innerHTML= "Tu nuevo sueldo es: "+ r + " con un aumento del 12%";
        
    }
    if (s >1200 && s <=1400) {
        porciento= s * 0.10;
        r = s + porciento;
        res.innerHTML= "Tu nuevo sueldo es: "+ r + " con un aumento del 10%"
        
    }
    if (s >1400 && s <=1500) {
        porciento= s * 0.8;
        r = s + porciento;
        res.innerHTML= "Tu nuevo sueldo es: "+ r + " con un aumento del 8%"
        
    }
    if (s >1500) {
        porciento= s * 0.5;
        r = s + porciento;
        res.innerHTML= "Tu nuevo sueldo es: "+ r + " con un aumento del 5%"
        
    }
    
}