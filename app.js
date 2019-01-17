//requireds
//const cosnt dsds=require('fs')//los de node nativos
//const cosnt dsds=require('express')//no nativo de node
//const cosnt dsds=require('./fs')//nosotros escribimos en algun lado de nuestro proyecto


const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const {argv} = require('./config/yargs');
const colors = require('colors');
//let base='6';
//console.log(argv.limite);
//console.log(process.argv);

let comando= argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite);
    break;
    case 'crear':
    crearArchivo(argv.base,argv.limite).then(archivo=>console.log(`Archivo creado: ${archivo}`))
    .catch(e=>console.log(e));
    break;
    default:
        console.log('comando no reconocido');
    

}




// let argv=process.argv;
// let parametro = argv[2];
// let base=parametro.split('=')[1];
//console.log(base);

