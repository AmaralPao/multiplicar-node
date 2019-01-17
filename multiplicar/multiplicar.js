const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite)=>{
    
        console.log('======================='.green);
        console.log(` tabla de ${base} `);
        console.log('=======================');

        if(!Number(base)){
            console.log('El parametro base no es un numero');
        }
        if(!Number(limite)){
            console.log('El parametro base no es un numero');
        }

        for(let i=0;i<=limite;i++){
             console.log(`${base} * ${i} = ${base*i} \n`);
        }
}
let crearArchivo =(base,limite)=>{
    let cad='';
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject('El parametro base no es un numero');
        }
        if(!Number(limite)){
            reject('El parametro base no es un numero');
        }

        for(let i=0;i<=limite;i++){
             cad+=`${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`,cad,(err)=>{
            if (err) return err;
            else{
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};
module.exports ={
    crearArchivo,
    listarTabla
}