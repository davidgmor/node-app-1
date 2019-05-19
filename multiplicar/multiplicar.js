const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`*******table de ${base}********`.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`)
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            console.log(base)
            reject('El valor introducido, no es un número');
            return;
        }

        if (!Number(limite)) {
            console.log(limite)
            reject('El valor introducido, no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }

        let fileName = `tabla-${base}-${limite}.txt`

        fs.writeFile(`tablas/${fileName}`, data, (err) => {

            if (err) {
                reject(err)
            } else {
                // console.log('The file has been saved!');
                resolve(fileName);
            }
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}