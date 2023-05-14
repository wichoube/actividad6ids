function calcularMadurez() {
    var modulos = document.getElementById('modulos').value;
    var nivelMadurez = modulos / 100;
    document.getElementById('madurez-result').textContent = "El nivel de madurez es: " + nivelMadurez;
}

function calcularHalstead() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var N1 = document.getElementById('N1').value;
    var N2 = document.getElementById('N2').value;

    var V = (N1 + N2) * Math.log(n1 + n2);
    var D = (n1 / 2) * (N2 / n2);
    var E = V * D;

    document.getElementById('halstead-result').textContent = "El esfuerzo de Halstead es: " + E;
}

function convertirHTML() {
    var texto = document.getElementById('texto').value;

    var map = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
        '&': '&amp;',
        'á': '&aacute;',
        'é': '&eacute;',
        'í': '&iacute;',
        'ó': '&oacute;',
        'ú': '&uacute;'
    };

    var textoHTML = texto.replace(/[<>"'&áéíóú]/g, function(m) { return map[m]; });

    document.getElementById('html-result').textContent = "Texto convertido: " + textoHTML;
}

var lista = [];

function agregarALista() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;

    lista.push({nombre: nombre, edad: Number(edad)});

    document.getElementById('nombre').value = "";
    document.getElementById('edad').value = "";

    actualizarLista();
}

function actualizarLista() {
    var tbody = document.getElementById('lista-tbody');
    tbody.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {
        var tr = document.createElement('tr');
        var tdNombre = document.createElement('td');
        var tdEdad = document.createElement('td');

        tdNombre.textContent = lista[i].nombre;
        tdEdad.textContent = lista[i].edad;

        tr.appendChild(tdNombre);
        tr.appendChild(tdEdad);
        tbody.appendChild(tr);
    }
}

function buscarEliminar() {
    var numeros = document.getElementById('numeros').value.split(", ").map(Number);

    var nombresSeleccionados = [];

    for (var i = 0; i < lista.length; i++) {
        for (var j = 0; j < numeros.length; j++) {
            if (lista[i].edad % numeros[j] === 0) {
                nombresSeleccionados.push(lista[i].nombre);
                break;
            }
        }
    }

    document.getElementById('buscar-eliminar-result').textContent = "Nombres seleccionados: " + nombresSeleccionados.join(", ");
}


