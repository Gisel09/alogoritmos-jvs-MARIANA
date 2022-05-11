// document.body.onload=function(){

//     alert("hola mundo")
// }

function suma() {
    var A = 0;
    var B = 0;
    var suma = 0;

    alert ("vamos a sumar dos valores!");

    A = parseInt(prompt("Primer valor: "));
    B = parseInt(prompt("Segundo valor: "));

    suma = A + B;

    alert( "El resultado es"+ suma)
} 

function OPER() {
    var NUM1 = 0
    var NUM2 = 0
    var suma = 0
    var rest = 0
    var mult = 0
    var divi = 0
    
    alert("elija dos valores para: ´sumarlos restarlos multiplicarlos y dividirlos´")

    NUM1 = parseInt(prompt("espacio para el primer valor que quiere usar:"));
    NUM2 = parseInt(prompt("Segundo valor que quiere usar en las operaciones:"));

         suma = NUM1 + NUM2
         rest = NUM1 - NUM2
         mult = NUM1 * NUM2
         divi = NUM1 / NUM2

    alert ("El valor "+NUM1+" y el valor "+NUM2+"\nSumados dan: "+suma+"\nRestados: "+rest+"\nMultiplicados: "+mult+"\nDivididos: "+divi);

      
}

function MAYORD2N(){
var A = 0
var B = 0

alert(" Vamos a hallar el mayor entre dos números")

A = parseInt(prompt("Por favor dijite el primero: "))
B = parseInt(prompt("Por Favor digite el segundo:"))

if (A>B) {alert("EL NUMERO MAYOR ES:"+A);
} else if (A<B) {alert("EL NUMERO MAYOR ES: "+B);
} else if (A=B) {alert("LOS NUMEROS SON IGUALES ");  
}
}

function MENORD3N(){
    var A=0
    var B=0
    var C=0


    alert("Ahora vamos a determinar el valor menor entre tres que usted elija.")

    A = parseInt(prompt("Por favor dijite el primero: "))
    B = parseInt(prompt("Por Favor digite el segundo:"))
    C = parseInt(prompt("Por favor dijite el tercero: "))

    if ((A>B) && (B>C)) {alert("EL NUMERO MENOR ENTRE LOS INGRESADOS ES: "+C);
    } else if ((A>B) && (C>B)) {alert("EL NUMERO MENOR ES: "+B);
    } else if ((A<B) && (A<C)) {alert("EL NUMERO MENOR ES: "+A);
    } else if ((A==B)&&(B==C)) {alert("LOS NUMEROS SON IGUALES");

}
}

function PAROIMP(){
    var NUM = 0

    alert("Ahora, para determinar si un número es par o impar:")

    NUM = parseInt(prompt("Por favor dijite un numero: "))

    if (NUM %2 ==0 ) {alert("Su numero es PAR");
    } else {alert("Su numero es IMPAR");
}
}

        function NUMER2(){
            var NUM = 0
            var RESPU = 0
            alert("Vamos a elevar al cuadrado el número que usted elija")

            NUM = parseFloat(prompt("Por favor dijite  el numero que eligió: "));
            RESPU=NUM **2
    
    alert("Su resultado es: "+RESPU)
}

function AREDT(){
    var BASE = 0
    var ALTU = 0
    var AREA = 0

    alert("Para hallar el area de un triángulo")

    BASE = parseInt(prompt("Base del triangulo"))
    ALTU = parseInt(prompt("Altura del triangulo"))

    AREA = (BASE*ALTU) /2

    alert("EL AREA ES; "+AREA)
}

function METRA(){
    var METRO = 0
    var CENT = 0
    var PULG = 0
    var KILO = 0

    alert("Cantidad en metros que desee convertir a centimetros, pulgadas y kilometros.")

    METRO =parseFloat(prompt("Digite el valor en metros:"));

    CENT = METRO *100
    PULG = METRO *39.0
    KILO = METRO /1000

    alert ("los "+METRO+" Metros a:\nCentimetros es: "+CENT+" centimetros\nEn pulgadas es: "+PULG+" Pulgadas\nEn kilometros es: "+KILO+" kilometros");
}

function NACIO(){
    var EDAD  = 0
    var NACI = 0

    alert("Probemos cómo hallar tu año de nacimiendo")

    alert("Que edad tienes en el año presente.")

    EDAD = parseInt(prompt("\n\n ¿Usted que edad tiene?"));
    NACI = 2022-EDAD
    alert("Tu año de nacimiento fue el: "+NACI)
}

function INVER(){
    var INVER     = 0
    var ANUALINV  = 0
    var GANAMES   = 0
    var GANATOTAL = 0
    var MESES     = 0

    alert("Vamos a predecir cuánto puedes ganar por tus inversiones en el banco\n\n  Tenga en cuenta que el banco pagará el 2% sobre su inversión")

    INVER    = parseInt(prompt("¿Cuánto invertirá?: "));
    ANUALINV = parseInt(prompt("¿Durante cuánto tiempo piensa dejar su dinero en el banco?: "));

    MESES = ANUALINV *12
    GANAMES = (INVER*2)/100
    GANATOTAL = GANAMES*MESES
    alert("Al mes recinirá en total: "+GANAMES+"\n Sus ganancias totales serán: "+GANATOTAL)

}

function PROM(){
    var NOTA1 = 0
    var NOTA2 = 0
    var NOTA3 = 0 
    var NOTA4 = 0
    var NOTA5 = 0
    var PROME = 0

    alert("Encontremos el promedio entre cinco calificaciones ")

    NOTA1 = parseFloat(prompt("Ingrese la primera nota: "));
    NOTA2 = parseFloat(prompt("Ingrese la segunda: "));
    NOTA3 = parseFloat(prompt("Ingrese la tercera: "));
    NOTA4 = parseFloat(prompt("Ingrese la cuarta: "));
    NOTA5 = parseFloat(prompt("Ingrese la ultima calificación: "));

    PROME = (NOTA1+NOTA2+NOTA3+NOTA4+NOTA5)/5

    if (PROME<3) {alert("Su promedio es: "+PROME+"\n por lo cual Reprobó.");
        
    } else {alert("Su promedio es: "+PROME+"\n  por lo cual Aprobó.");    
        
    }



}

function KILO(){
    var CANT  = 0
    var DESC1 = 0
    var DESC2 = 0
    var DESC3 = 0
    var TOTAL = 0

    alert("Vamos a veriguar cuánto tiene que pagar un cliente según los kilos de manzanas que compra si el kilo es a 4500. ")

    CANT = parseFloat(prompt("De 1 a 2 kilos NO tiene descuento.\n De 3 a 5 kilos tiene un 10% de descuento.\n De 6 a 10 kilos tiene un 15% de descuento.\n 10 o mas kilos tiene un 20% de descuento.\n\n ¿Cuántos kilos desea llevar?"));

    TOTAL = CANT*4500 
    DESC1 = TOTAL-((TOTAL*10)/100)
    DESC2 = TOTAL-((TOTAL*15)/100)
    DESC3 = TOTAL-((TOTAL*20)/100)

    if (CANT<3) {alert("Su total a pagar es: "+TOTAL);
        
    } else if (CANT <=5) {alert("Tiene un 10% de descuento en su compra, Su total a pagar es: "+DESC1);
    } else if (CANT <=10) {alert("Tiene un 15% de descuento en su compra, Su total a pagar es: "+DESC2);
    } else if (CANT >10) {alert("Tiene un 20% de descuento en su compra, Su total a pagar es: "+DESC3);
    }

}