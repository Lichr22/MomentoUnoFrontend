function depositar() {
    let saldoActual = parseFloat(localStorage.getItem("saldo"));

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

    localStorage.setItem("saldo", saldoActual);
    guardarMovimientos(monto, "Consignación");

    alert("Consignación exitosa");
    alert("Nuevo saldo: " + saldoActual);
}

