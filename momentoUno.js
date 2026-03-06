let intento = 0;
let bloqueo = false;
let nombreUsuario = null;

function menuInicial() {
    let salir = false;

    while (!salir) {

        let opcion = parseInt(prompt(
            "Bienvenido\n" +
            "1. Registrarse\n" +
            "2. Iniciar sesión\n" +
            "3. Salir"
        ));

        switch (opcion) {

            case 1:
                registrarUsuario();
                break;

            case 2:
                if (login()) {
                    menuUsuario();
                }
                break;

            case 3:
                alert("Saliendo del sistema");
                intento = 0;
                bloqueo = false;
                nombreUsuario = null;
                salir = true;
                break;

            default:
                alert("Opción inválida");
        }
    }
}

function registrarUsuario() {

    let nombreUsuario = prompt("Nombre de usuario");
    // Permitir varios usuarios y validando que el nombre de usuario no esté repetido
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombreUsuario) {
            alert("Nombre de usuario ya existe");
            return;
        }
    }

    let contrasena = prompt("Contraseña");
    let saldo = parseFloat(prompt("Saldo inicial"));

    if (!nombreUsuario || !contrasena || isNaN(saldo) || saldo < 0) {
        alert("Datos inválidos");
        return;
    }

    let nuevoUsuario = {
        nombre: nombreUsuario,
        contrasena: contrasena,
        saldo: saldo
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado correctamente");
}

function login() {

    if (bloqueo) {
        alert("Cuenta bloqueada");
        return false;
    }

    let usuarioLogin = prompt("Usuario");

    let usuarioEncontrado = buscarUsuario(usuarioLogin);

    if (usuarioEncontrado === null) {
        alert("Usuario no encontrado");
        return false;
    }

    let contrasenaLogin = prompt("Contraseña");

    if (!usuarioLogin || !contrasenaLogin) {
        alert("Campos vacíos");
        return false;
    }

    if (contrasenaLogin === usuarioEncontrado.contrasena) {
        alert("Login correcto");
        intento = 0;
        nombreUsuario = usuarioEncontrado.nombre;
        return true;
    }

    intento++;
    alert("Credenciales incorrectas. Intentos: " + intento);

    if (intento >= 3) {
        bloqueo = true;
        alert("Cuenta bloqueada");
    }

    return false;
}

function menuUsuario() {

    let salir = false;

    while (!salir) {

        let opcion = parseInt(prompt(
            "1. Consignar\n" +
            "2. Ver saldo\n" +
            "3. Retirar\n" +
            "4. Consultar movimientos\n" +
            "5. Salir"
        ));

        switch (opcion) {

            case 1:
                depositar(nombreUsuario);
                break;

            case 2:
                verSaldo();
                break;

            case 3:
                retirar(nombreUsuario);
                break;

            case 4:
                consultarMovimientos(nombreUsuario);
                break;

            case 5:
                salir = true;
                intento = 0;
                bloqueo = false;
                nombreUsuario = null;
                break;

            default:
                alert("Opción inválida");
        }
    }
}