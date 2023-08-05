const deadpool = {

    nombre : 'Wade',
    apellido : 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre (){
        return `${this.nombre} ${this.apellido}`
    }

}

function imprimeHeroe( { nombre, apellido, poder, edad = 13 } ){
    
    console.log( nombre, apellido, poder, edad )

}

// imprimeHeroe(deadpool)

const heroes = [ 'deadpool', 'Superman', 'Batman']

// const h1 = heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]

const [ , , h3 ] = heroes

console.log( h3 );

// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder= deadpool.poder

// const { nombre, apellido, poder, edad = 13 } = deadpool

// console.log( nombre, apellido, poder, edad )