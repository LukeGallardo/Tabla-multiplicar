
const fs = require('fs');
const colors = require('colors');

const multiplicar = async(base = 5, listar = false, hasta = 10)=> {
    try {
        let archivo  = '';
        let tabla = '';
    for (let i = 1; i < hasta; i++) {  
       // console.log(`${i} X ${base} = ${base*i}`);
        tabla+= `${i} ${'X'.green} ${base} ${'='.green} ${base*i}\n`;
        archivo+= `${i} X ${base} = ${base*i}\n`;
    }
    if ( listar ) {
        console.log('===================='.red);
        console.log('   Tabla del:'.red, colors.yellow(base)  );
        console.log('===================='.red);

        console.log(tabla);
    }
    fs.writeFileSync(`./archivo/tabla del ${base}.txt`,archivo,/* (err)=> {
            if(err) {
                throw err;
            } else {
                console.log('archivo creado exitosamente');
            }
    } */);
    return `tabla-${ base }.txt`;
    } catch (error) {
        throw error;
    }
    

}

module.exports = {
    multiplicar
}