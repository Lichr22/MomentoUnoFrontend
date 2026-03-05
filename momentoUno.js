let intento = 0;
let bloqueo = false;

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
                salir = true;
                break;

            default:
                alert("Opción inválida");
        }
    }
}

function registrarUsuario() {

    let usuario = prompt("Nombre de usuario");
    let contrasena = prompt("Contraseña");
    let saldo = parseFloat(prompt("Saldo inicial"));

    if (!usuario || !contrasena || isNaN(saldo) || saldo < 0) {
        alert("Datos inválidos");
        return;
    }

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contrasena", contrasena);
    localStorage.setItem("saldo", saldo);

    alert("Usuario registrado correctamente");
}

function login() {

    if (bloqueo) {
        alert("Cuenta bloqueada");
        return false;
    }

    let usuarioLogin = prompt("Usuario");
    let contrasenaLogin = prompt("Contraseña");

    if (!usuarioLogin || !contrasenaLogin) {
        alert("Campos vacíos");
        return false;
    }

    let usuarioGuardado = localStorage.getItem("usuario");
    let contrasenaGuardada = localStorage.getItem("contrasena");

    if (usuarioLogin === usuarioGuardado && contrasenaLogin === contrasenaGuardada) {
        alert("Login correcto");
        intento = 0;
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
                depositar();
                break;

            case 2:
                verSaldo();
                break;

            case 3:
                retirar();
                break;

            case 4:
                consultarMovimientos();
                break;

            case 5:
                salir = true;
                break;

            default:
                alert("Opción inválida");
        }
    }
}

function verSaldo() {
    let saldo = parseFloat(localStorage.getItem("saldo"));
    alert("Saldo actual: " + saldo);
}

menuInicial();