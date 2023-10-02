document.getElementById('registroFormPatient').addEventListener('submit', async function(event) {
    event.preventDefault();

    var nombre = document.getElementsByName('nombre')[0].value;
    var correo = document.getElementsByName('correo')[2].value;
    var contraseña = document.getElementsByName('contraseña')[2].value;

    const response = await fetch('/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, correo, contraseña, rol: 'paciente' })
    });

    const data = await response.json();

    if (data.success) {
        document.getElementById('registroSuccess').style.display = 'block';
        document.getElementById('registroError').style.display = 'none';
        document.getElementById('registroForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('pacienteOptions').style.display = 'block';
    } else {
        document.getElementById('registroSuccess').style.display = 'none';
        document.getElementById('registroError').style.display = 'block';
    }
});

document.getElementById('registroFormDoctor').addEventListener('submit', async function(event) {
    event.preventDefault();

    var nombre = document.getElementsByName('nombre')[1].value;
    var correo = document.getElementsByName('correo')[3].value;
    var contraseña = document.getElementsByName('contraseña')[3].value;

    const response = await fetch('/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, correo, contraseña, rol: 'doctor' })
    });

    const data = await response.json();

    if (data.success) {
        document.getElementById('registroSuccess').style.display = 'block';
        document.getElementById('registroError').style.display = 'none';
        document.getElementById('registroForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('doctorOptions').style.display = 'block';
    } else {
        document.getElementById('registroSuccess').style.display = 'none';
        document.getElementById('registroError').style.display = 'block';
    }
});

function consultarCita() {

}

function registrarCita() {

}

function consultarCitaDoctor() {

}

function eliminarCitaDoctor() {

}