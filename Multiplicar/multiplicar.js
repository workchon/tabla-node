//requireds
const fs = require('fs');

let crearArchivo = (base, limite = 10) => { //module.exports.crearArchivo forma de hacerlo tambien
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un Numero`);
            return;
        }
        let tabla = '';
        for (let i = 1; i <= limite; i++) {
            tabla += (`${base} * ${i} Resultado = ${base*i}\n`);
        }

        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(`Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}-al-${limite}.txt`)
        });

    });
}

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} Resultado = ${base*i}\n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}