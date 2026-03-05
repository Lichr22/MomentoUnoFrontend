function retirar() {

    // Pedimos el monto

    let monto = parseFloat(prompt("¿Cuánto dinero quieres retirar?"));


    // Traemos el saldo guardado

    let saldo = parseFloat(localStorage.getItem("saldo"));


    // Si no hay saldo guardado, empezamos en 0

    if (saldo == null) {
        saldo = 0;
    }


    // Validamos que el monto sea mayor que 0

    if (monto > 0) {


        // Verificamos que tenga dinero suficiente

        if (monto <= saldo) {

            saldo = saldo - monto;                  // Restamos
            localStorage.setItem("saldo", saldo);  // Guardamos
            guardarMovimientos(monto, "Retiro"); // Guardamos el movimiento
            alert("Retiro exitoso. Saldo actual: $" + saldo);

        } else {
            alert("No tienes suficiente dinero.");

        }

    } else {
        alert("Ingresa un número válido.");
    }

}