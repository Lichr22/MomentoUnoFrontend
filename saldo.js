function buscarUsuario(nombreUsuario) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombreUsuario) {
            return usuarios[i];
        }
    }
    return null;
}

function verSaldo() {
    let saldo = buscarUsuario(nombreUsuario).saldo || 0;
    alert("Saldo actual: " + saldo);
}