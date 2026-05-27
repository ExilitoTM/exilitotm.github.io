// sistema de clicks

var numeroclick = 0;

var añadirclicks = 1;

var clickautomatico = 0;

// precios

var preciocursor = 15;
var precioabuela = 100;
var preciogranja = 1000;
var preciomina = 12000;

// guardar y cargar

function guardarJuego() {
    var estado = {
        numeroclick: numeroclick,
        clickautomatico: clickautomatico,
        preciocursor: preciocursor,
        precioabuela: precioabuela,
        preciogranja: preciogranja,
        preciomina: preciomina
    };
    localStorage.setItem("cukiClicker", JSON.stringify(estado));
    console.log("Se ha guardado la partida.")
}

function cargarJuego() {
    var guardado = localStorage.getItem("cukiClicker");
    if (guardado) {
        var estado = JSON.parse(guardado);
        numeroclick = estado.numeroclick;
        clickautomatico = estado.clickautomatico;
        preciocursor = estado.preciocursor;
        precioabuela = estado.precioabuela;
        preciogranja = estado.preciogranja;
        preciomina = estado.preciomina;
        
        document.getElementById("NumeroClicks").innerHTML = parseInt(numeroclick);
        document.getElementById("preciocursor").innerHTML = parseInt(preciocursor);
        document.getElementById("precioabuela").innerHTML = parseInt(precioabuela);
        document.getElementById("preciogranja").innerHTML = parseInt(preciogranja);
        document.getElementById("preciomina").innerHTML = parseInt(preciomina);
        document.getElementById("clickporsegundo").innerHTML = clickautomatico.toFixed(1);
    }
}


var miIntervalo = setInterval(
    function() {
    numeroclick += clickautomatico;
    document.getElementById("NumeroClicks").innerHTML = parseInt(numeroclick);
}, 1000);

setInterval(function() {
    guardarJuego();
}, 30000);

function clica() {
    numeroclick += añadirclicks;
    document.getElementById("NumeroClicks").innerHTML = parseInt(numeroclick);
}

function agregarcursor() {
    if (numeroclick >= preciocursor) {
        clickautomatico += 0.1;
        numeroclick -= parseInt(preciocursor)
        preciocursor *= 1.2;
        document.getElementById("NumeroClicks").innerHTML = parseInt(numeroclick);
        document.getElementById("preciocursor").innerHTML = parseInt(preciocursor);
        document.getElementById("clickporsegundo").innerHTML = clickautomatico.toFixed(1);
    }
    else {
        alert("Faltan galletas")
    }
}

function agregarabuela() {
    if (numeroclick >= precioabuela) {
        clickautomatico += 1;
        numeroclick -= parseInt(precioabuela)
        precioabuela *= 1.155;
        document.getElementById("NumeroClicks").innerHTML = parseInt(numeroclick);
        document.getElementById("precioabuela").innerHTML = parseInt(precioabuela);
        document.getElementById("clickporsegundo").innerHTML = clickautomatico.toFixed(1);
    }
    else {
        alert("Faltan galletas")
    }
}

function agregargranja() {
    if (numeroclick >= preciogranja) {
        clickautomatico += 8;
        numeroclick -= parseInt(preciogranja)
        preciogranja *= 1.265;
        document.getElementById("NumeroClicks").innerHTML = parseInt(numeroclick);
        document.getElementById("preciogranja").innerHTML = parseInt(preciogranja);
        document.getElementById("clickporsegundo").innerHTML = clickautomatico.toFixed(1);
    }
    else {
        alert("Faltan galletas")
    }
}

function agregarmina() {
    if (numeroclick >= preciomina) {
        clickautomatico += 47;
        numeroclick -= parseInt(preciomina)
        preciomina *= 1.265;
        document.getElementById("NumeroClicks").innerHTML = parseInt(numeroclick);
        document.getElementById("preciomina").innerHTML = parseInt(preciomina);
        document.getElementById("clickporsegundo").innerHTML = clickautomatico.toFixed(1);
    }
    else {
        alert("Faltan galletas")
    }
}

cargarJuego();
