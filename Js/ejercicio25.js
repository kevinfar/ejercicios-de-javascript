let num1, num2, num3, Medio, variabletemporal;

alert("Ejercicio 25-Numero intermedio");
num1 = Number(prompt("Ingrese el numero 1"));
num2 = Number(prompt("Ingrese el numero 2"));
num3 = Number(prompt("Ingrese el numero 3"));
if (num1 > num2) {
    Medio = num1;
    variabletemporal = num2;
} else {
    Medio = num2;
    variabletemporal = num1;
}
if (Medio > num3) {
    Medio = num3;
}
if (Medio < variabletemporal) {
    Medio = variabletemporal;
}
document.getElementById("num1").innerHTML = "Primer numero: "+num1;
document.getElementById("num2").innerHTML = "Segundo numero: "+num2;
document.getElementById("num3").innerHTML = "Tercer numero: "+num3;
document.getElementById("medio").innerHTML = "El numero intermedio es: "+Medio;

