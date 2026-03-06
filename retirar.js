function retirar(nombreUsuario) {

    // Pedimos el monto

    let monto = parseFloat(prompt("¿Cuánto dinero quieres retirar?"));


    // Traemos el saldo guardado

    let saldo = buscarUsuario(nombreUsuario).saldo || 0;


    // Si no hay saldo guardado, empezamos en 0

    if (saldo == null) {
        saldo = 0;
    }


    // Validamos que el monto sea mayor que 0

    if (monto > 0) {


        // Verificamos que tenga dinero suficiente

        if (monto <= saldo) {

            saldo -= monto;                  // Restamos

            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].nombre === nombreUsuario) {
                    usuarios[i].saldo = saldo; // Actualizamos el saldo del usuario
                    guardarMovimientos(nombreUsuario, monto, "Retiro"); // Guardamos el movimiento
                    break;
                }
            }

            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            alert("Retiro exitoso. Saldo actual: $" + saldo);

        } else {
            alert("No tienes suficiente dinero.");

        }

    } else {
        alert("Ingresa un número válido.");
    }

}