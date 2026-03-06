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

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombreUsuario) {
            usuarios[i].saldo = saldoActual;
            guardarMovimientos(nombreUsuario, monto, "Consignación");
            break;
        }
    }

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Consignación exitosa");
    alert("Nuevo saldo: " + saldoActual);
}