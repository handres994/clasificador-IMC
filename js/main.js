let imc = prompt("ingrese si indice de masa corporal (IMC)")

if (imc < 0) {
    alert("Error, el IMC no puede ser negativo")
} else {
    if (imc < 18.5) {
        alert("Bajo Peso")
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso Normal")
    } else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso")
    } else if (imc >= 30 && imc <= 34.9) {
        alert("Obesidad grado 1")
    } else if (imc >= 35 && imc <= 39.9) {
        alert("Obesidad grado 2")
    } else {
        alert("Obesidad grado 3")
    }
}