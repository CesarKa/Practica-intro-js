console.log('bugAsync');




function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (id === 1) {
                const usuario = { id: 1, nombre: 'Jon Doe'}
                resolve(usuario)
            } else {
                reject('Usuario no encontrado')    
            }
        } ,  1000);
    });
};

obtenerUsuario(1)
    .then(usuario => console.log(usuario))
    .catch(error => console.log(error));




