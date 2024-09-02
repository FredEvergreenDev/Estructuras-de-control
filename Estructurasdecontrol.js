// Ejercicio 1: Múltiplos de 5
function ejercicio1() {
    // Borrar los resultados anteriores
    document.getElementById("resultado").innerText = "";

    // Pedir un número al usuario
    const numero = parseInt(prompt("Introduce un número:"));

    // Generar y mostrar los múltiplos de 5
    let resultado = "Múltiplos de 5: ";
    for (let i = 1; i <= numero; i++) {
        if (i % 5 === 0) {
            resultado += i + " ";
        }
    }
    document.getElementById("resultado").innerText = resultado;
}

// Ejercicio 2: Lotería
function ejercicio2() {
    const num1 = parseInt(prompt("Introduce el primer número entre 1 y 50:"));
    const num2 = parseInt(prompt("Introduce el segundo número entre 1 y 50:"));
    let resultado = "";
    for (let i = 1; i <= 50; i++) {
        if (i === num1 || i === num2) {
            resultado += i + " ¡Lotería!\n";
        } else {
            resultado += i + "\n";
        }
    }
    console.log(resultado);
    document.getElementById("resultado2").innerText = "Revisa la consola para ver los resultados.";
}

// Ejercicio 3: Capturar números
function ejercicio3() {
    let numeros = [];
    let numero;
    do {
        numero = parseInt(prompt("Introduce un número (0 para terminar):"));
        if (numero !== 0) {
            numeros.push(numero);
        }
    } while (numero !== 0);
    console.log("Números capturados:", numeros);
    document.getElementById("resultado3").innerText = "Revisa la consola para ver los números capturados.";
}

// Ejercicio 4: Concatenación de palabras
function ejercicio4() {
    let palabras = [];
    let palabra;
    do {
        palabra = prompt("Introduce una palabra (deja vacío para terminar):");
        if (palabra) {
            palabras.push(palabra);
        }
    } while (palabra);
    const resultado = palabras.join(" ");
    document.getElementById("resultado4").innerText = "Palabras concatenadas: " + resultado;
}

// Ejercicio 5: Días de la semana
function ejercicio5() {
    let dia;
    do {
        dia = prompt("Introduce un día de la semana (Escribe 'miércoles' y 'sábado' con acento):");
        switch (dia.toLowerCase()) {
            case "lunes":
                alert("Empieza la semana con energía!");
                break;
            case "martes":
                alert("Segundo día, ¡sigue adelante!");
                break;
            case "miércoles":
                alert("¡Mitad de semana, ánimo!");
                break;
            case "jueves":
                alert("¡Casi es viernes!");
                break;
            case "viernes":
                alert("¡El fin de semana está cerca!");
                break;
            case "sábado":
                alert("¡Disfruta tu sábado!");
                break;
            case "domingo":
                alert("Ve a descansar");
                break;
            default:
                alert("Día no válido. Intenta de nuevo.");
                break;
        }
    } while (dia.toLowerCase() !== "domingo");
}
