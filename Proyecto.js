//Valor del precio base
var precio_base = 2000

//Valor de Recargos
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

var nombre = prompt("Ingrese su nombre completo")
var edad = prompt("Ingrese su edad en números")
//Recargo del asegurado respecto a su edad
var recargo_asegurado = 0
if (edad>17){
if (edad>17 && edad<25){
    recargo_asegurado = precio_base * edad_18
}
if (edad>24 && edad<50){
    recargo_asegurado = precio_base * edad_25
}
if (edad>49){
    recargo_asegurado = precio_base * edad_50
}
}else{
    alert("Es menor de edad, no puede optar por el seguro")
}
//Recargo si esta casado
var edad_conyuge = 0
var recargo_conyuge = 0
var casado = prompt("¿Usted esta casado actualmente? Responda Si o No")
if ("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("Ingrese la edad del conyuge en números")
    if (edad_conyuge>17){
    if (edad_conyuge>17 && edad<25){
        recargo_conyuge = precio_base * edad_18
    }
    if (edad_conyuge>24 && edad<50){
        recargo_conyuge = precio_base * edad_25
    }
    if (edad_conyuge>49){
        recargo_conyuge = precio_base * edad_50
    }
    }else{
        alert("Es menor de edad, no puede optar por el seguro")
    }
}
//Recargo de hijos
var recargo_total_hijos = 0
var recargo_hijos = 0
var cant_hijos = 0
var hijos = prompt("¿Usted tiene hijos o hijas? Responda Si o No")
if ("SI" == hijos.toUpperCase()){
    cant_hijos = prompt("Ingrese cuántos hijos o hijas tiene en números")
    recargo_hijos = cant_hijos * hijos_recargo
    recargo_total_hijos = precio_base * recargo_hijos
}

recargo_total = recargo_asegurado + recargo_conyuge + recargo_total_hijos
alert("Para el asegurado "+nombre.toUpperCase())
precio_final = precio_base + recargo_total
alert("El recargo total es de Q"+recargo_total)
alert("El precio final es de Q"+precio_final)
