console.log('01')

const usuario = {
    Nombre: 'César',
    Apellidos: 'Redondo Paulino',
    TemasBootcamp: [
        {Tema: 'Node,js', fechaInicio: '2025-03-10'},
        {Tema: 'Git', fechaInicio: '2025-04-08'},
        {Tema: 'React', fechaInicio: '2025-05-12'},
    ],
    busquedaActiva: true,
};


console.log(usuario.TemasBootcamp[2].fechaInicio);