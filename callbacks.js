// setTimeout( ( ) => {
//     console.log('hola mundo');
// }, 2000)

const getUsuarioById = ( id , callback ) => {

    const usuario = {
        id,
        nombre: 'Gabo'
    }

    setTimeout( ( ) => {
        callback( usuario );
    }, 2000 )

}

getUsuarioById( 10, ( { id, nombre } ) => {

    console.log( { id , nombre:nombre.toUpperCase( ) } );

} )