//requireds
//const fs = require('fs');
const argv = require('./config/yargs').argv;



const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

let argv2 = process.argv;


//let parametro = argv[2];
//let base = parametro.split('=')[1];

//crearArchivo(base).then(Archivo => console.log(`Archivo Creado : ${Archivo}`))
//    .catch(e => console.log(e));
//
//let tabla = '';
//for (let i = 1; i <= 10; i++) {
//    tabla += (`${base} * ${i} Resultado = ${base*i}\n`);
//}
//
//const data = new Uint8Array(Buffer.from(tabla));
//fs.writeFile('Tablas/tabla.txt', data, (err) => {
//    if (err) throw err;
//    console.log('El archivo se a creado');
//});