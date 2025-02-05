console.log('04');

/*
const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            {id: 1, nombre: 'Proyecto 1'},
            {id: 2, nombre: 'Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            {id: 3, nombre: 'Proyecto 3'},
            {id: 4, nombre: 'Proyecto 4'}
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            {id: 5, nombre: 'Proyecto 5'},
            {id: 6, nombre: 'Proyecto 6'}
        ]
    },
];

*/

const desarrolladoresJavascrip = (datos, id) => {
    return datos.filter(usuario => usuario.id === id)[0];
};

//console.log(desarrolladoresJavascrip(datos, 1))


const nombresProyectos = (datos) => {
    return datos.map(usuario => usuario.proyectos.map(proyecto => proyecto.nombre)).flat();
};

//console.log(nombresProyectos(datos))