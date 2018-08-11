console.log("Iniciando");
var search = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Resolviendo la promesa");
        console.log("Promesa Resuelta");
        resolve();
        //console.log("Promesa Rechazada");
        //reject();
    }, 1500);
});
console.log("Promesa creada");
search.then(function () {
    console.log("Promesa resuelta satisfactoriamente");
}, function () {
    console.log("La promesa no se puedo cumplir");
});
console.log("Finalizado el proceso... a la espera de la respuesta");
