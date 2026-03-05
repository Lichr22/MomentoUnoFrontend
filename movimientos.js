function guardarMovimientos (monto, transaccion) {
    let fecha = new Date().toLocaleString();
    const movimientos = JSON.parse(localStorage.getItem("movimiento"));
    movimientos.push("Fecha: " + fecha + " - " + transaccion + " - Monto: $" + monto );
    localStorage.setItem("movimiento", JSON.stringify(movimientos));
}

function consultarMovimientos() {
    const movimientos = JSON.parse(localStorage.getItem("movimiento"));

    if (movimientos.length === 0) {
        alert("No hay movimientos registrados.");
    } else {
        alert ("Historial de movimientos:\n" + movimientos.join("\n"));
    }
}