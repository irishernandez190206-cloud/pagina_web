// ==================================================
// FUNCIONAMIENTO DEL TEST DE ESTÉTICA Y BELLEZA
// ==================================================

document.addEventListener("DOMContentLoaded", function () {

    // ELEMENTOS HTML
    const inicio = document.getElementById("inicio");
    const modo = document.getElementById("modo");
    const empezar = document.getElementById("empezar");
    const zonaTest = document.getElementById("zona-test");

    const contador = document.getElementById("contador");
    const aciertos = document.getElementById("aciertos");
    const progreso = document.getElementById("progreso");

    const categoria = document.getElementById("categoria");
    const preguntaElemento = document.getElementById("pregunta");
    const respuestas = document.getElementById("respuestas");
    const explicacion = document.getElementById("explicacion");

    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguiente");
    const reiniciar = document.getElementById("reiniciar");

    const resultado = document.getElementById("resultado");
    const nota = document.getElementById("nota");
    const resumen = document.getElementById("resumen");
    const revision = document.getElementById("revision");
    const volver = document.getElementById("volver");

    // VARIABLES
    let preguntasTest = [];
    let preguntaActual = 0;
    let respuestasUsuario = [];
    let opcionesPorPregunta = [];

    // COMPROBAR QUE EXISTE EL BANCO DE PREGUNTAS
    if (!Array.isArray(preguntas) || preguntas.length === 0) {
        console.error("No se ha encontrado el banco de preguntas.");
        return;
    }

    // MEZCLAR ELEMENTOS SIN MODIFICAR EL ARRAY ORIGINAL
    function mezclar(array) {
        const copia = [...array];

        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }

        return copia;
    }

    // MOSTRAR Y OCULTAR ELEMENTOS
    function mostrar(elemento) {
        if (elemento) {
            elemento.hidden = false;
        }
    }

    function ocultar(elemento) {
        if (elemento) {
            elemento.hidden = true;
        }
    }

    // CALCULAR ACIERTOS
    function contarAciertos() {
        return respuestasUsuario.reduce((total, respuesta, indice) => {
            if (
                respuesta !== null &&
                respuesta === preguntasTest[indice].correcta
            ) {
                return total + 1;
            }

            return total;
        }, 0);
    }

    // ACTUALIZAR EL CONTADOR
    function actualizarContador() {
        if (contador) {
            contador.textContent =
                `Pregunta ${preguntaActual + 1} de ${preguntasTest.length}`;
        }

        if (aciertos) {
            aciertos.textContent = `Aciertos: ${contarAciertos()}`;
        }

        if (progreso) {
            const porcentaje =
                ((preguntaActual + 1) / preguntasTest.length) * 100;

            progreso.style.width = `${porcentaje}%`;
            progreso.setAttribute("aria-valuenow", porcentaje);
        }

        if (anterior) {
            anterior.disabled = preguntaActual === 0;
        }

        if (siguiente) {
            siguiente.textContent =
                preguntaActual === preguntasTest.length - 1
                    ? "Finalizar test"
                    : "Siguiente";
        }
    }

    // MOSTRAR UNA PREGUNTA
    function mostrarPregunta() {
        const pregunta = preguntasTest[preguntaActual];

        if (!pregunta) {
            return;
        }

        actualizarContador();

        if (categoria) {
            categoria.textContent =
                `${pregunta.categoria || "General"} · ${pregunta.nivel || ""}`;
        }

        if (preguntaElemento) {
            preguntaElemento.textContent = pregunta.pregunta;
        }

        if (respuestas) {
            respuestas.replaceChildren();

            opcionesPorPregunta[preguntaActual].forEach((opcion, indice) => {
                const boton = document.createElement("button");

                boton.type = "button";
                boton.textContent = opcion.texto;
                boton.className = "respuesta";

                boton.setAttribute(
                    "aria-pressed",
                    respuestasUsuario[preguntaActual] === opcion.indice
                        ? "true"
                        : "false"
                );

                if (respuestasUsuario[preguntaActual] === opcion.indice) {
                    boton.classList.add("seleccionada");
                }

                boton.addEventListener("click", function () {
                    respuestasUsuario[preguntaActual] = opcion.indice;
                    mostrarPregunta();
                });

                respuestas.appendChild(boton);
            });
        }

        // La explicación aparece después de responder.
        if (explicacion) {
            if (respuestasUsuario[preguntaActual] !== null) {
                const correcta = respuestasUsuario[preguntaActual] ===
                    pregunta.correcta;

                explicacion.textContent =
                    (correcta ? "¡Correcto! " : "Respuesta incorrecta. ") +
                    (pregunta.explicacion || "");

                mostrar(explicacion);
            } else {
                explicacion.textContent = "";
                ocultar(explicacion);
            }
        }

        actualizarContador();
    }

    // INICIAR EL TEST
    function iniciarTest() {
        const nivelSeleccionado = modo ? modo.value : "todos";

        preguntasTest = preguntas.filter(function (pregunta) {
            return (
                nivelSeleccionado === "todos" ||
                nivelSeleccionado === "normal" ||
                pregunta.nivel === nivelSeleccionado
            );
        });

        if (preguntasTest.length === 0) {
            alert("No hay preguntas disponibles para esta selección.");
            return;
        }

        // El modo aleatorio mezcla el orden de las preguntas.
        if (nivelSeleccionado === "aleatorio") {
            preguntasTest = mezclar(preguntasTest);
        }

        // Mezclar las respuestas conservando cuál es la correcta.
        opcionesPorPregunta = preguntasTest.map(function (pregunta) {
            return mezclar(
                pregunta.opciones.map(function (texto, indice) {
                    return {
                        texto: texto,
                        indice: indice
                    };
                })
            );
        });

        preguntaActual = 0;
        respuestasUsuario = new Array(preguntasTest.length).fill(null);

        ocultar(inicio);
        ocultar(resultado);
        mostrar(zonaTest);

        mostrarPregunta();
    }

    // MOSTRAR RESULTADO FINAL
    function finalizarTest() {
        ocultar(zonaTest);
        mostrar(resultado);

        const total = preguntasTest.length;
        const correctas = contarAciertos();
        const incorrectas = respuestasUsuario.filter(
            (respuesta, indice) =>
                respuesta !== null &&
                respuesta !== preguntasTest[indice].correcta
        ).length;

        const enBlanco = respuestasUsuario.filter(
            respuesta => respuesta === null
        ).length;

        const calificacion = total > 0
            ? (correctas / total) * 10
            : 0;

        if (nota) {
            nota.textContent = `${calificacion.toFixed(2)} / 10`;
        }

        if (resumen) {
            resumen.textContent =
                `Total: ${total} preguntas. ` +
                `Aciertos: ${correctas}. ` +
                `Fallos: ${incorrectas}. ` +
                `Sin responder: ${enBlanco}.`;
        }

        if (revision) {
            revision.replaceChildren();

            preguntasTest.forEach(function (pregunta, indice) {
                const bloque = document.createElement("div");
                const titulo = document.createElement("h3");
                const respuestaUsuario = document.createElement("p");
                const respuestaCorrecta = document.createElement("p");
                const detalle = document.createElement("p");

                titulo.textContent = `${indice + 1}. ${pregunta.pregunta}`;

                if (respuestasUsuario
