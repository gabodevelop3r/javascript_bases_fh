

const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    }, 
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Allan'
    },
]


const salarios = [
    {
        id: 1,
        salario: 100
    }, 
    {
        id: 2,
        salario: 500
    }
]


const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( ( empleado ) => empleado.id == id )?.nombre

    if( empleado )
        callback( null, empleado )
    else
        callback(`Empleado con id ${id} no existe`)

}

const getSalario = ( id, callback ) =>  {
    const salario = salarios.find( ( salario ) => salario.id == id )?.salario

    if( salario )
        callback( null, salario )
    else
        callback(`Salario con id ${id} no existe`)
}

const id  = 3
getEmpleado( id, ( err, empleado ) => {

    if(err){
        return console.error(err);
    }

    getSalario( id, ( err, salario ) => {
        if(err){
            return console.log(err);
        }
    
        console.log('El empleado:', empleado, 'tiene un salario de', salario);
    })
    

});



