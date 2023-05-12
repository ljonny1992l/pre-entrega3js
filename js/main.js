class Resultado {
    constructor(r) {
        this.r = r;
    }
}

let resultados = [];


document.querySelector("#btnTerreno").addEventListener("click", () => {

    const l = parseFloat(document.querySelector("#lados").value);


    if (l != parseFloat(document.querySelector("#lados").value)) {
        const mensaje = "Ingrese un nro. que represente los metros de uno de los lados del cuadrado";
        document.querySelector("#pantallaTerreno").innerHTML = mensaje;
    } else {
        const r = Math.pow(l, 2);
        document.querySelector("#pantallaTerreno").innerHTML = r.toFixed(2);

        //Agrupo todos los resultados en un único array

        const unResultado = new Resultado(parseFloat(r.toFixed(2)));
        resultados.push(unResultado);
        

        //guardo el resultado en el localSorage
        localStorage.setItem("resultados", JSON.stringify(resultados));

        //recupero lo guardado en el localStorage
        
        const recuperado = localStorage.getItem("resultados");
        const convertido = JSON.parse(recuperado);
        
        console.log("Cálculos realizados----> ", {convertido});
        document.querySelector("#segundaPantallaT").innerHTML = convertido.map((element) => new Resultado(element.r));
      
    }
})

document.querySelector("#borrarTerreno").addEventListener("click", () => {
    const r = 0;
    const reset = "";
    document.querySelector("#pantallaTerreno").innerHTML = r;
    document.querySelector("#lados").value = reset;
});
