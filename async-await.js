

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


const getEmpleado = ( id ) => {
 
    const empleado = empleados.find( ( empleado ) => empleado.id == id )?.nombre
    return new Promise( (resolve, reject) => {
        
        ( empleado ) ? resolve(empleado) : reject(`No existe el empleado con el id ${ id }`)

    })

}



const getSalario = ( id  ) =>  {
    
    const salario = salarios.find( ( salario ) => salario.id == id )?.salario
    return new Promise((resolve, reject) => {
        ( salario ) ? resolve(  salario ) : reject(`Salario con id ${id} no existe`)
    }) 
   
}

const getInfoUsuario = async ( id ) => {
    
    try {

        const empleado = await getEmpleado( id )
        const salario = await getSalario( id )
        return `El salario del empleado: ${ empleado } es de ${salario}` 
    }catch(err){
        throw err
    }

}

const id = 3

getInfoUsuario( id )
        .then( (msg) => {
            console.log('TODO BIEN');
            console.log(msg)
        })
        .catch(err=>{
            console.log('TODO MAL');
            console.log(err)
        })


