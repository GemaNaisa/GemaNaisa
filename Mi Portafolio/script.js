/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Gema Naisa Valente Heredia')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora desde los 15 años')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<stron>Estudiante univercitaria</stron')
    .pauseFor(1500)
    .deleteAll()
    .typeString('amante de la programacion y diseño web')
    .pauseFor(1500)
    
    .start();