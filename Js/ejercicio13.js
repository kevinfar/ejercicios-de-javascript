let num1, num2, num3;
alert("Ejercio13-Numero mayor de 3 numeros");
num1 = Number(prompt("Ingrse el primer numero"));
num2 = Number(prompt("Ingrse el segundo numero"));
num3 = Number(prompt("Ingrse el tercer numero")); 
if (num1 > num2 && num1 > num3) {
    document.getElementById("numero1").innerHTML = "El numero mayor es:"+num1;
} else if (num2 > num1 && num1 > num3) {
    document.getElementById("numero2").innerHTML = "El numero mayor es:"+num2;
} else {
    document.getElementById("numero3").innerHTML = "El numero mayor es:"+num3;
} {
    
}