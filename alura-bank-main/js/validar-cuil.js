export default function esUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g, "");
    
    if(tieneNumerosRepetidos(cuil)){
        console.log("Valores repetidos");
        campo.setCustomValidity("Valores repetidos")
    }else{
        if(validarPrimerosDigitos(cuil) && validarDigitoVerificador(cuil)){
            console.log("Cuil válido");
        }else{
            console.log("Cuil no existe");
            campo.setCustomValidity("Cuil no existe");
        }
    }
}

function tieneNumerosRepetidos(cuil){
    const numerosRepetidos=[
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];

    return numerosRepetidos.includes(cuil);

}

function validarPrimerosDigitos(cuil){
    let primerosDigitos = cuil.substr(0,2);
    let digitosValidos = ['20', '23', '24', '27', '30', '33', '34'];
    return digitosValidos.includes(primerosDigitos)
}

// Ejemplo: 23-8060722-8-1. Aquí tenemos un pequeño cuil de ejemplo, donde es separado en una en una pequeña tabla cada uno de los números y el último es el dígito verificador. Entonces cada uno de los de los números de nuestro de nuestro cuil va a ser multiplicado por el array de factores, entonces ese array de factores contiene el 5, el 4, el 3, el 2, el 7, el 6 y así sucesivamente hasta llegar hasta el 2 nuevamente. Entonces aquí es donde tenemos los factores y el acumulado. ¿Qué hicimos en el bucle for? Aquí pusimos que el acumulado, o sea el acumulado que valía 0, fuera recorriendo el cuil y lo fuera sumando al acumulado la multiplicación entre los factores, o sea el 5 por el 2, el 4 por el 3, el 3 por el 8, el 2 por el 0 y así sucesivamente se van guardando en acumulado. En este ejemplo, el resultado es 153. Ahora el algoritmo nos dice que vamos a declarar un dígito verificador o un validador teórico si aquí dice verificador teórico donde tenemos la resta entre 11 menos el módulo de el acumulado sobre 11, sobre las 11 posiciones que tenemos aquí. Entonces una vez que obtenemos ese valor preguntamos y decimos verificador teórico igual a 11, vamos a asignarle el valor de 0 a este verificador teórico. Si no volvemos a preguntar y decimos si es igual a 10, vamos a asignarle el valor de 9. En este ejemplo que tenemos aquí, 11 menos 153 módulo de 11 da 1, quiere decir que no da ninguno de estes casos que tenemos aquí es un caso distinto y entonces al final de todo lo que hacemos es capturar el último carácter, o sea el último dígito que vendría a ser el 1. En este en lo convertimos a un valor numérico y preguntamos y eso es lo que devuelve nuestra función si el dígito verificador este que acabamos de capturar aquí en esta línea es igual al verificador teórico o al validador teórico que declaramos nosotros, entonces como si son iguales esto devuelve true, por lo tanto, es verdadero y el dígito verificador coincide con este este número de cuil. Si no, si fuera distinto va a devolver false, como veíamos en los ejemplos.
function validarDigitoVerificador(cuil){
    let acumulado = 0;
    const factores = [5,4,3,2,7,6,5,4,3,2]

    for(let i=0; i<10;i++){
        acumulado += parseInt(cuil[i],10) * factores[i];
 
    }
let validadorTeorico = 11 - (acumulado % 11);

if(validadorTeorico == 11){
    validadorTeorico = 0
}else if(validadorTeorico==10){
    validadorTeorico=9
}

const digitoVerificador = parseInt(cuil[10],10)

return digitoVerificador === validadorTeorico;

}
