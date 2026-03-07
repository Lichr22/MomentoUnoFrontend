function guardarMovimientos(nombreUsuario, monto, transaccion) {
    const movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    let fecha = new Date().toLocaleString();

    let nuevoMovimiento = {
        nombreUsuario: nombreUsuario,
        monto: monto,
        transaccion: transaccion,
        fecha: fecha
    }

    movimientos.push(nuevoMovimiento);

    localStorage.setItem("movimientos", JSON.stringify(movimientos));
}

function consultarMovimientos(nombreUsuario) {
    const movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    const movimientosUsuario = []

    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i].nombreUsuario === nombreUsuario) {
            movimientosUsuario.push(movimientos[i]);
        }
    }

    if (movimientosUsuario.length === 0) {
        alert("No hay movimientos registrados para este usuario .");
    } else {
        alert("Historial de movimientos:\n" + movimientosUsuario.map(m => `Fecha: ${m.fecha} - ${m.transaccion} - Monto: $${m.monto}`).join("\n"));
    }
}