const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, l = false, h = 10) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.blue(base)} ${'x'.italic.red} ${i} ${'='.blue} ${colors.brightYellow(base * i)}\n`;

        }

        if (l) {
            console.log('***************************************'.magenta);
            console.log(`              Tabla del ${base}             `.rainbow);
            console.log('***************************************'.magenta);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/multiplicacion-${base}.txt`, salida)
        return `Archivo de la ` + `tabla ${base}`.dim.bgMagenta;

    } catch (error) {
        throw (error)
    }
}

module.exports = {
    crearArchivo
};