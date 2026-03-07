function depositar(nombreUsuario) {
    let saldoActual = buscarUsuario(nombreUsuario).saldo || 0;

    if (isNaN(saldoActual)) {
        alert("No hay saldo registrado");
        return;
    }

    let monto = parseFloat(prompt("Ingrese el monto a consignar"));

    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido");
        return;
    }

    saldoActual += monto;
    // Traemos los usuarios para del local storage y los pasamos aun arreglo de objetos con el Json.Parse
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    // Recorremos el arreglo y buscamos el usuario que tenga el mismo nombre de usuario
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombreUsuario) {
            // Si lo encontramos, actualizamos su saldo y guardamos el movimiento
            usuarios[i].saldo = saldoActual;
            guardarMovimientos(nombreUsuario, monto, "Consignación");
            break;
        }
    }
    // Guardamos el arreglo actualizado en el local storage con el Json.Stringify para convertirlo a una cadena de texto
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Consignación exitosa");
    alert("Nuevo saldo: " + saldoActual);
}