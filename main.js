//alert("hola");

//Este es el código para la animación 
let app= document.getElementById('typewriter');
let typewriter=new Typewriter(app, {
    loop:true,
    delay: 75,

});

typewriter
.pauseFor(2500)
.typeString('Estudio la Carrera de Administración en el TESCHI, curso el 1er semestre de este,práctico programación ya que me llama mucho la atención')
.pauseFor(200)
.deleteChars(10)
.start();

