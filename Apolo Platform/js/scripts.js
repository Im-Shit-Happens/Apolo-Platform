// LOGICA DE LA APLICACIÓN

window.onload = function() {

  document.querySelector("#body-background").style.background = "url(img/Fondo-Login1.jpg) no-repeat center top";
  document.querySelector("#body-background").style.backgroundSize = "cover";
  document.querySelector("#opcion").style.display = "none";
  document.querySelector("#registro-Alumnos").style.display = "none";
  document.querySelector("#registro-Profesores").style.display = "none";
  document.querySelector("#landing-Alumnos").style.display = "none";
  document.querySelector("#landing-Profesores").style.display = "none";
  document.querySelector("#login").style.display = "block";


}



// ---------FUNCIÓN RECOMENDACIONES---------

// Array de recomendaciones

let Recomendaciones = ["No dejes para mañana lo que puedes hacer hoy. ", "Si no puedes con un ejercicio avanza al siguiente. ", "Intenta no atrasarte con tus tareas. ", "Pide ayuda siempre que la necesites. ", "No importa la nota, lo importante es intentarlo. ", "Cada ejercicio es importante para mejorar, da lo mejor. "];

// Función de Aleatoriedad al cargar página

function aleatorio() {

  let recomendacion1 = Math.floor(Math.random() * 5) + 1;
  let recomendacion2 = Math.floor(Math.random() * 5) + 1;

  while (recomendacion1 === recomendacion2) {
    recomendacion2 = Math.floor(Math.random() * 5) + 1;;
  }

  document.querySelector("#recomendacion1").innerHTML = Recomendaciones[recomendacion1];
  document.querySelector("#recomendacion2").innerHTML = Recomendaciones[recomendacion2];
}

// ---------TERMINA FUNCIÓN DE RECOMENDACIONES---------



// ---------FUNCION OBTENER USUARIO---------
let usuarioLogeado = "";

function Obtenerusuario(usu, contra) {

  for (let i = 0; i < Usuarios.length; i++) {

    const unElemento = Usuarios[i];

    if (unElemento.Nombreusuario === usu && unElemento.Contraseña === contra) {

      usuarioLogeado = Usuarios[i];

    }
  }
  return usuarioLogeado;
}

// ---------TERMINA FUNCIÓN OBTENER USUARIO---------



// ---------FUNCIÓN LOGIN---------

class Usuario {

  constructor(Nombre, Nombreusuario, Contraseña, Tipodeusuario, Nivelusuario, Profesoralumno, Cantidadentregada) {

    this.Nombre         = Nombre;
    this.Nombreusuario  = Nombreusuario;
    this.Contraseña     = Contraseña;
    this.Tipodeusuario  = Tipodeusuario;
    this.Nivelusuario   = Nivelusuario;
    this.Profesoralumno = Profesoralumno;
    this.Cantidadentregada = Cantidadentregada;

  }
}

// Array de Usuarios
let Usuarios = [];

// Dato de prueba
nuevoUsuario = new Usuario("Lucas Gonzáles", "LucaSs123", "LucaSs1234", "Profesor");
nuevoUsuario2 = new Usuario("Josema Ranero", "Josema321", "Josema4321", "Profesor");
nuevoUsuario3 = new Usuario("Diego Latour", "Diego123", "Nose1234", "Alumno", "Inicial", "LucaSs123", 0);
nuevoUsuario4 = new Usuario("Juan Perez", "Juan123", "Nose1234", "Alumno", "Inicial", "Josema321", 2);
nuevoUsuario5 = new Usuario("Maria Antonia", "Maria123", "Maria1234", "Alumno", "Inicial", "Josema321", 0);
nuevoUsuario6 = new Usuario("Enzo Perez", "Enzo123", "Enzo1234", "Alumno", "Intermedio", "Josema321", 0);
nuevoUsuario7 = new Usuario("Luis Suarez", "LuisitoEl9", "LuisitoEl9", "Alumno", "Avanzado", "Josema321", 0);
nuevoUsuario8 = new Usuario("Ignacio Zapata", "Nacho123", "Nose1234", "Alumno", "Inicial", "LucaSs123", 0);


// Inserción de datos de prueba
Usuarios.push(nuevoUsuario);
Usuarios.push(nuevoUsuario2);
Usuarios.push(nuevoUsuario3);
Usuarios.push(nuevoUsuario4);
Usuarios.push(nuevoUsuario5);
Usuarios.push(nuevoUsuario6);
Usuarios.push(nuevoUsuario7);
Usuarios.push(nuevoUsuario8);

document.querySelector("#btnIngresar").addEventListener("click", logeousuario);

const validation = new JustValidate('#form');

validation
  .addField('#txtUsuario', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#txtContraseña', [
    {
      rule: 'required',
      errorMessage: 'Ingrese Contraseña',
    },
  ]);


function logeousuario() {

  let nombreUsuarioLog = document.querySelector("#txtUsuario").value;
  let contraseñaUsuarioLog = document.querySelector("#txtContraseña").value;

  usuarioLogeado = Obtenerusuario(nombreUsuarioLog, contraseñaUsuarioLog);

  if (usuarioLogeado === "") {

    document.querySelector("#error-login").innerHTML = "Verifique sus datos e intente nuevamente.";

  } else if (usuarioLogeado.Tipodeusuario === "Profesor") {

    document.querySelector("#body-background").style.background = "none";
    document.querySelector("#opcion").style.display = "none";
    document.querySelector("#login").style.display = "none";
    document.querySelector("#registro-Alumnos").style.display = "none";
    document.querySelector("#registro-Profesores").style.display = "none";
    document.querySelector("#landing-Alumnos").style.display = "none";
    document.querySelector("#landing-Profesores").style.display = "block";
    document.querySelector("#login").style.display = "none";

    cargarAlumnos();
    cargaDevoluciones();
    cargaEstadisticas();
    Cantidadtotalentregada();

  } else if (usuarioLogeado.Tipodeusuario === "Alumno") {

    document.querySelector("#body-background").style.background = "none";
    document.querySelector("#opcion").style.display = "none";
    document.querySelector("#login").style.display = "none";
    document.querySelector("#registro-Alumnos").style.display = "none";
    document.querySelector("#registro-Profesores").style.display = "none";
    document.querySelector("#landing-Alumnos").style.display = "block";
    document.querySelector("#landing-Profesores").style.display = "none";
    document.querySelector("#login").style.display = "none";

    aleatorio();
    tareasThumbnail();
    mostrarTareas();
    cargaEjerciciosDevueltos();
    estadisticasAlumnos();
  }
}

// ---------TERMINA FUNCIÓN LOGIN---------



// ---------FUNCIÓN PRE REGISTRO---------

document.querySelector("#btnRegistrarme").addEventListener("click", logeousuario);

function preRegistro() {

  document.querySelector("#opcion").style.display = "block";
  document.querySelector("#registro-Alumnos").style.display = "none";
  document.querySelector("#registro-Profesores").style.display = "none";
  document.querySelector("#landing-Alumnos").style.display = "none";
  document.querySelector("#login").style.display = "none";

}

// ---------TERMINA FUNCIÓN PRE REGISTRO---------



// ---------FUNCIONES DE REGISTRO---------
// Función verificación Nombre de Usuario

function Busquedanombreusuario(nombreUsuario) {

  let nombre;

  for (let i = 0; i < Usuarios.length; i++) {

    usuario = Usuarios[i];

    if (usuario.Nombreusuario === nombreUsuario) {

      nombre = usuario.Nombreusuario;

    }
  }

  return nombre;

}

// Termina Función Verificación Nombre de Usuario

// Muestra Registro de Alumnos

document.querySelector("#btnAlumno").addEventListener("click", registroAlumno);

function registroAlumno() {

  document.querySelector("#opcion").style.display = "none";
  document.querySelector("#registro-Alumnos").style.display = "block";
  document.querySelector("#registro-Profesores").style.display = "none";
  document.querySelector("#landing-Alumnos").style.display = "none";
  document.querySelector("#login").style.display = "none";

}

// Termina Función

// Carga de Profesores

cargaProfesor();

function cargaProfesor() {

  for (let i = 0; i < Usuarios.length; i++) {

    let usuariosProfesores = Usuarios[i];

    let tipoUsuario = usuariosProfesores["Tipodeusuario"];

    let nombreProfesor = usuariosProfesores["Nombreusuario"]

    if (tipoUsuario === "Profesor") {

      document.querySelector("#profesores").innerHTML += `

      <option value="${nombreProfesor}"> ${nombreProfesor} </option>`;

    }
  }
}

// Termina Función de carga de Profesores

// Registro de Alumnos

document.querySelector("#btnRegistrarAlumno").addEventListener("click", registrarAlumno);

function registrarAlumno() {

  let nombreCampo = document.querySelector("#txtNombreAlumno").value;
  let nombreUsuarioCampo = document.querySelector("#txtUsuarioAlumno").value;
  let contraseñaCampo = document.querySelector("#txtContraseñaAlumno").value;
  let confirmarCampo = document.querySelector("#txtConfirmarAlumno").value;
  let tipoUsuario = "Alumno";
  let nivelUsuario = "Inicial";
  let profesorAsignado = document.querySelector("#profesores").value;

  if (nombreCampo.length < 4) {

    document.querySelector("#error-RegistroAlumno").innerHTML = "Verifique que haya ingresado bien sus datos, e intente de nuevo.";

  } else if (nombreUsuarioCampo.length < 4) {

    document.querySelector("#error-RegistroAlumno").innerHTML = "Su nombre de usuario no supera los 4 carácteres, intente de nuevo.";

  } else if (nombreUsuarioCampo === Busquedanombreusuario(nombreUsuarioCampo)) {

    document.querySelector("#error-RegistroAlumno").innerHTML = "El nombre de usuario ya ha sido elegido, por favor intente nuevamente con uno distinto.";

  } else if (contraseñaCampo.length < 4) {

    document.querySelector("#error-RegistroAlumno").innerHTML = "Por favor, ingrese una contraseña mayor a 8 carácteres.";

  } else if (contraseñaCampo !== confirmarCampo ) {

    document.querySelector("#error-RegistroAlumno").innerHTML = "La verificación de contraseña fallo, verifique que los datos ingresados sean iguales.";

  } else if (profesorAsignado === "ninguno") {

    document.querySelector("#error-RegistroAlumno").innerHTML = "Por favor, elija un profesor.";

  } else {

    let contadorMay = 0;
    let contadorMin = 0;
    let contadorNum = 0;

    for (let i = 0; i < contraseñaCampo.length; i++) {
      let codigoLetra = contraseñaCampo.charCodeAt(i);
      if(codigoLetra >= 65 && codigoLetra <= 90 || codigoLetra >= 192 && codigoLetra <= 220) {
        contadorMay = contadorMay + 1;
      } else if (codigoLetra >= 97 && codigoLetra <= 122 || codigoLetra >= 224 && codigoLetra <= 252) {
        contadorMin = contadorMin + 1;
      } else if (codigoLetra >= 48 && codigoLetra <= 57) {
        contadorNum = contadorNum + 1;
      }
    }

    if (contadorMay >= 1 && contadorMin >= 1 && contadorNum >= 1) {

      let nuevoUsuario = new Usuario(

        nombreCampo,
        nombreUsuarioCampo,
        contraseñaCampo,
        tipoUsuario,
        nivelUsuario,
        profesorAsignado,

      );

      Usuarios.push(nuevoUsuario);

      document.querySelector("#login").style.display = "block";
      document.querySelector("#opcion").style.display = "none";
      document.querySelector("#registro-Alumnos").style.display = "none";
      document.querySelector("#registro-Profesores").style.display = "none";
      document.querySelector("#landing-Alumnos").style.display = "none";

      alert("Se creo correctamente su usuario.")

    } else {

      document.querySelector("#error-RegistroAlumno").innerHTML = "Verifique que su contraseña contenga al menos una minúscula, una mayúscula y un número.";

    }
  }
}

// Termina Registro de Alumnos

// Muestra Registro de Profesores

document.querySelector("#btnProfesor").addEventListener("click", registroProfesor);

function registroProfesor() {

  document.querySelector("#opcion").style.display = "none";
  document.querySelector("#registro-Alumnos").style.display = "none";
  document.querySelector("#registro-Profesores").style.display = "block";
  document.querySelector("#landing-Alumnos").style.display = "none";
  document.querySelector("#login").style.display = "none";

}

// Termina Función

// Registro de Profesores

document.querySelector("#btnRegistrarProfesor").addEventListener("click", registrarProfesor);

function registrarProfesor() {

  let nombreCampo = document.querySelector("#txtNombreProfesor").value;
  let nombreUsuarioCampo = document.querySelector("#txtUsuarioProfesor").value;
  let contraseñaCampo = document.querySelector("#txtContraseñaProfesor").value;
  let confirmarCampo = document.querySelector("#txtConfirmarProfesor").value;
  let tipoUsuario = "Profesor";
  let nivelUsuario = "";
  let profesorAsignado = "";

  if (nombreCampo.length < 4) {

    document.querySelector("#error-RegistroProfesor").innerHTML = "Verifique que haya ingresado bien sus datos, e intente de nuevo.";

  } else if (nombreUsuarioCampo.length < 4) {

    document.querySelector("#error-RegistroProfesor").innerHTML = "Su nombre de usuario no supera los 4 carácteres, intente de nuevo.";

  } else if (nombreUsuarioCampo === Busquedanombreusuario(nombreUsuarioCampo)) {

    document.querySelector("#error-RegistroProfesor").innerHTML = "El nombre de usuario ya ha sido elegido, por favor intente nuevamente con uno distinto.";

  } else if (contraseñaCampo.length < 4) {

    document.querySelector("#error-RegistroProfesor").innerHTML = "Por favor, ingrese una contraseña mayor a 8 carácteres.";

  } else if (contraseñaCampo !== confirmarCampo ) {

    document.querySelector("#error-RegistroProfesor").innerHTML = "La verificación de contraseña fallo, verifique que los datos ingresados sean iguales.";

  } else {

    let contadorMay = 0;
    let contadorMin = 0;
    let contadorNum = 0;

    for (let i = 0; i < contraseñaCampo.length; i++) {
      let codigoLetra = contraseñaCampo.charCodeAt(i);
      if(codigoLetra >= 65 && codigoLetra <= 90 || codigoLetra >= 192 && codigoLetra <= 220) {
        contadorMay = contadorMay + 1;
      } else if (codigoLetra >= 97 && codigoLetra <= 122 || codigoLetra >= 224 && codigoLetra <= 252) {
        contadorMin = contadorMin + 1;
      } else if (codigoLetra >= 48 && codigoLetra <= 57) {
        contadorNum = contadorNum + 1;
      }
    }

    if (contadorMay >= 1 && contadorMin >= 1 && contadorNum >= 1) {

      let nuevoUsuario = new Usuario(

        nombreCampo,
        nombreUsuarioCampo,
        contraseñaCampo,
        tipoUsuario,
        nivelUsuario,
        profesorAsignado,

      );

      Usuarios.push(nuevoUsuario);

      document.querySelector("#login").style.display = "block";
      document.querySelector("#opcion").style.display = "none";
      document.querySelector("#registro-Alumnos").style.display = "none";
      document.querySelector("#registro-Profesores").style.display = "none";
      document.querySelector("#landing-Alumnos").style.display = "none";

      alert("Se creo correctamente su usuario.")

    } else {

      document.querySelector("#error-RegistroProfesor").innerHTML = "Verifique que su contraseña contenga al menos una minúscula, una mayúscula y un número.";

    }
  }
}

// Termina Registro de Profesores

// ---------TERMINA LAS FUNCIONES DE REGISTRO---------



// ---------FUNCIÓN CAMBIO DE NIVEL---------

// Función Carga de Alumnos

function cargarAlumnos() {

  for (let i = 0; i < Usuarios.length; i++) {

    usuario = Usuarios[i];

    usuariosNivel = usuario.Nivelusuario;

    tipoUsuario = usuario.Tipodeusuario;

    nombreUsuario = usuario.Nombreusuario;

    if (tipoUsuario === "Alumno" && usuarioLogeado.Nombreusuario === usuario.Profesoralumno) {

      document.querySelector("#alumnos").innerHTML += `

      <option value="${nombreUsuario}"> ${nombreUsuario} </option>`;

    }
  }
}

// Termina Función Carga de Alumnos

document.querySelector("#btnCambioNivel").addEventListener("click", cambiarNivel);

function cambiarNivel() {

  nivelElegir = document.querySelector("#niveles").value;
  alumnoCambiar = document.querySelector("#alumnos").value;

  let nombreAlumno;
  let nivelUsuario;
  let tipoUsuario;
  let existe = 0;

  for (let i = 0; i < Usuarios.length; i++) {

    usuario = Usuarios[i];

    nombreAlumno = usuario.Nombreusuario;
    nivelUsuario = usuario.Nivelusuario;
    tipoUsuario = usuario.Tipodeusuario;

    if (tipoUsuario === "Alumno") {

      if (nivelUsuario === "Inicial" && (nivelElegir === "Intermedio" || nivelElegir === "Avanzado") && usuarioLogeado.Nombreusuario === usuario.Profesoralumno && nombreAlumno === alumnoCambiar) {

        usuario.Nivelusuario = nivelElegir;
        existe = 1;

        document.querySelector("#mensaje-Niveles").innerHTML = "Se cambio correctamente el nivel del usuario " + alumnoCambiar + " , ahora se encuentra en nivel: " + nivelElegir;
        document.querySelector("#error-Niveles").style.display = "none";

      } else if (nivelUsuario === "Intermedio" && nivelElegir === "Avanzado" && usuarioLogeado.Nombreusuario === usuario.Profesoralumno && nombreAlumno === alumnoCambiar) {

        usuario.Nivelusuario = nivelElegir;
        existe = 1;

        document.querySelector("#mensaje-Niveles").innerHTML = "Se cambio correctamente el nivel del usuario " + alumnoCambiar + " , ahora se encuentra en nivel: " + nivelElegir;
        document.querySelector("#error-Niveles").style.display = "none";

      } else if (nivelUsuario === nivelElegir && usuarioLogeado.Nombreusuario === usuario.Profesoralumno && nombreAlumno === alumnoCambiar) {

        existe = 1;

        document.querySelector("#mensaje-Niveles").innerHTML = "El usuario " + alumnoCambiar + " ya se encuentra en el nivel académico al cual deseas cambiarlo.";
        document.querySelector("#error-Niveles").style.display = "none";

      }
    }
  }

  if (existe === 0) {

    document.querySelector("#error-Niveles").style.display = "block";
    document.querySelector("#error-Niveles").innerHTML = "Error: el nivel del usuario " + alumnoCambiar + " es superior al nivel al que desea cambiar.";

  }
}


// ---------TERMINA FUNCIÓN CAMBIO DE NIVEL---------



// ---------FUNCIONES DE EJERCICIOS---------

let Id = 5;

class Ejercicio {

    constructor(Titulo, Descripcion, Nivel, Foto, Id, Profesor) {

        this.Titulo = Titulo;
        this.Descripcion = Descripcion;
        this.Nivel = Nivel;
        this.Foto = Foto;
        this.Id = Id;
        this.Profesor = Profesor;

    }
}

// Array de Ejercicios
let Ejercicios = [];

// Datos de prueba
ejercicioDatoDePrueba1 = new Ejercicio("Nidea", "Prueba descripcion", "Inicial", "ej1.png", 0, "Josema321");
ejercicioDatoDePrueba6 = new Ejercicio("Prueba", "Prueba descripcion", "Inicial", "ej1.png", 5, "Josema321");
ejercicioDatoDePrueba2 = new Ejercicio("Dato de Prueba 1", "Prueba descripcion 1", "Inicial", "ej2.png", 1, "Josema321");
ejercicioDatoDePrueba5 = new Ejercicio("Dato de Prueba 1", "Prueba descripcion 1", "Inicial", "ej2.png", 4, "Josema321");
ejercicioDatoDePrueba3 = new Ejercicio("Dato de Prueba 2", "Prueba descripcion...", "Intermedio", "ej3.png", 2, "Josema321");
ejercicioDatoDePrueba4 = new Ejercicio("Dato de Prueba 3", "Prueba ", "Avanzado", "ej4.png", 3, "Josema321");



// Inserción datos de Prueba
Ejercicios.push(ejercicioDatoDePrueba1);
Ejercicios.push(ejercicioDatoDePrueba2);
Ejercicios.push(ejercicioDatoDePrueba3);
Ejercicios.push(ejercicioDatoDePrueba4);
Ejercicios.push(ejercicioDatoDePrueba5);
Ejercicios.push(ejercicioDatoDePrueba6);



// ---------ALUMNOS---------

// Función Buscador

// Funcion de la tecla ENTER para la SearchBar

document.querySelector("#srcBuscar").addEventListener("keyup", presionar_Enter);

function presionar_Enter(evento) {
  console.log(evento.keyCode);
  if (evento.keyCode === 13) {
    buscador();
  }
}

// Logica de la SearchBar

function buscador() {

  let informacionBusqueda = document.querySelector("#srcBuscar").value;

  informacionBusqueda = informacionBusqueda.toLowerCase();

  let posicionTitulo;

  let posicionDescripcion;

  let titulo;

  let descripcion;

  let contador = 0;

  for (let i = 0; i < Ejercicios.length; i++) {

    ejercicio = Ejercicios[i];

    titulo = ejercicio.Titulo;

    descripcion = ejercicio.Descripcion;

    textoTitulo = titulo.toLowerCase();

    textoDescripcion = descripcion.toLowerCase();

    posicionTitulo = textoTitulo.indexOf(informacionBusqueda);

    posicionDescripcion = textoDescripcion.indexOf(informacionBusqueda);

    if (usuarioLogeado.Profesoralumno === ejercicio.Profesor && usuarioLogeado.Nivelusuario === ejercicio.Nivel && posicionTitulo >= 0 || posicionDescripcion >= 0 &&
      usuarioLogeado.Profesoralumno === ejercicio.Profesor && usuarioLogeado.Nivelusuario === ejercicio.Nivel) {

        if (verificarEjercicio(ejercicio.Profesor) === 1) {

          document.querySelector("#acceso-buscador").innerHTML += `
          <article class="tarea">
          <div class="contenedor-thumbnail">
          <img src="img/${ejercicio.Foto}" alt="">
          </div>
          <div class="contenedor-texto">
          <div>
          <h2 class="titulo-tarea">
          ${ejercicio.Titulo}
          </h2>
          </div>
          <p class="descripcion">
          ${ejercicio.Descripcion}
          </p>
          </div>
          </article>`;

          contador = contador + 1;

        }

      }

    }

    if (contador === 0 && posicionDescripcion === -1 && posicionTitulo === -1) {

      document.querySelector("#error-acceso-buscador").innerHTML = "No se encontro ninguna coincidencia.";

    }
  }

function verificarEjercicio(Profesor) {

  let existe = 0;

  if (usuarioLogeado.Profesoralumno === Profesor) {

    existe = 1;

  }

  return existe;

}

// Termina la Función del Buscador

// Función Verificar Entrega (Buscador)

function verificarEntrega(Id) {

  let existe = 0;

  for (let i = 0; i < EjerciciosResueltos.length; i++) {

    ejercicio = EjerciciosResueltos[i];

    if (ejercicio.Id === Id && usuarioLogeado.Nombreusuario === ejercicio.Nombreusuario) {

      existe = 1;

    }
  }

  return existe;

}

// Termina Función Verificar Entrega (Buscador)

// Función Thumbnail (Mostrar miniatura de las tareas)

function tareasThumbnail() {

  for (let i = 0; i < Ejercicios.length; i++) {

    ejercicio = Ejercicios[i];

    if (usuarioLogeado.Nivelusuario === ejercicio.Nivel && usuarioLogeado.Profesoralumno === ejercicio.Profesor && verificarEntrega(ejercicio.Id) === 0) {

      document.querySelector("#galeria-tareas").innerHTML +=
      `<div class="imagen-tareas">
      <img src="img/icono-2.png" alt="">
      <a onclick="mostrarTareas()">
      <div class="hover-tareas">
      <img src="img/icono-1.png" alt="">
      <p>Acceder</p>
      </a>
      </div>
      </div>`;

      document.querySelector("#mensaje-mostrar-tareas").style.display = "none";

    }

    document.querySelector("#mensaje-mostrar-tareas").innerHTML = "Felicitaciones, no tienes tareas pendientes.";

  }
}

// Termina Función Thumbnail

// Función Mostrar Más (Muestra todas las tareas)

function showmore() {

  document.querySelector("#Ancla-Tareas").style.display = "none";
  document.querySelector("#acceso-tareas").style.display = "block";

}

// Termina Función Mostrar Más

// Función Mostrar Tareas

function mostrarTareas() {

  for (let i = 0; i < Ejercicios.length; i++) {

    ejercicios = Ejercicios[i];

    if (usuarioLogeado.Nivelusuario === ejercicios.Nivel && usuarioLogeado.Profesoralumno === ejercicios.Profesor && verificarEntrega(ejercicios.Id) === 0) {

      document.querySelector("#acceso-tareas").innerHTML += `
      <article class="tarea">
      <div class="contenedor-thumbnail">
      <img src="img/${ejercicio.Foto}" alt="">
      </div>
      <div class="contenedor-texto">
      <div>
      <h2 class="titulo-tarea">
      ${ejercicio.Titulo}
      </h2>
      </div>
      <p class="descripcion">
      ${ejercicio.Descripcion}
      </p>
      <p id="entrega${ejercicio.Id}">
      No se realizo la devolucion
      </p>
      <input type="file" class="archivo-audio" name="entregaEjercicio" id="${usuarioLogeado.Nombreusuario}${ejercicio.Id}" accept="audio/*">
      <a class="acceder btnEntregar" data-Clase="${ejercicio.Id}">Entregar</a>
      </div>
      </article>`;

    }

  }


  let btnEntregar = document.querySelectorAll(".btnEntregar");


  for (let i = 0; i < btnEntregar.length; i++) {

    btnEntregar[i].addEventListener("click", idEjercicio);
    btnEntregar[i].addEventListener("click", mostrarTareas);
    btnEntregar[i].addEventListener("click", estadisticasAlumnos);

  }
}

// Termina Función Mostrar Tareas

let btnEntregas;

function idEjercicio() {

  btnEntregas = Number(this.getAttribute("data-Clase"));

  for (let i = 0; i < Ejercicios.length; i++) {

    ejercicio = Ejercicios[i];

    ejercicioNumero = Number(ejercicio.Id);

    titulo = ejercicio.Titulo;

    descripcion = ejercicio.Descripcion;

    foto = ejercicio.Foto;

    profesor = ejercicio.Profesor


    if (btnEntregas === ejercicioNumero) {

      entregaEjercicio(usuarioLogeado.Nombreusuario, titulo, descripcion, foto, profesor);

    }
  }
}

// Función Entregar Tareas

class EjercicioResuelto {

    constructor(Id, Nombreusuario, audio, Foto, Titulo, Descripcion, Estado, Devoluciones, Profesor) {

        this.Id = Id;
        this.Nombreusuario = Nombreusuario;
        this.Foto = Foto;
        this.Audio = audio;
        this.Titulo = Titulo;
        this.Descripcion = Descripcion;
        this.Estado = Estado;
        this.Devoluciones = Devoluciones;
        this.Profesor = Profesor;

    }

}

// Array de Ejercicios
let EjerciciosResueltos = [];

// Datos de prueba
nuevaResolucion0 = new EjercicioResuelto(2, "Juan123", "ej2.m4a", "ej2.png", "Dato de Prueba 1", "Prueba descripcion 1", "Entregado", "", "Josema321")
nuevaResolucion1 = new EjercicioResuelto(1, "Juan123", "ej2.m4a", "ej2.png", "Dato de Prueba 1", "Prueba descripcion 1", "Devuelto", "Perfecto, muy bien hecho, logrado a la excelencia.", "Josema321")
nuevaResolucion2 = new EjercicioResuelto(0, "Juan123", "ej1.m4a", "ej1.png", "Nidea", "Prueba descripcion", "Devuelto", "Perfecto, muy bien hecho, logrado a la excelencia.", "Josema321");

// Inserción datos de Prueba
EjerciciosResueltos.push(nuevaResolucion0);
EjerciciosResueltos.push(nuevaResolucion1);
EjerciciosResueltos.push(nuevaResolucion2);


// Función Entrega de Ejercicios

function entregaEjercicio(Nombreusuario, Titulo, Descripcion, Foto, Profesor) {

  let audioNombre = document.querySelector(`#${nombreUsuario}${btnEntregas}`).value;

  let audio = audioNombre.substring(audioNombre.lastIndexOf("\\") + 1);

  let Estado = "Entregado";

  let Devolucion = "";

  let Id = btnEntregas;

  if (audioNombre === "") {

    alert("Debes entregar un audio")

  } else {

    nuevaResolucion = new EjercicioResuelto(

      Id,
      Nombreusuario,
      audio,
      Foto,
      Titulo,
      Descripcion,
      Estado,
      Devolucion,
      Profesor,

    )

    EjerciciosResueltos.push(nuevaResolucion);

  }
}

// Termina Función Entrega de Ejercicios

// ---------PROFESORES---------

// Función Crear Ejercicio
document.querySelector("#btnCrearTarea").addEventListener("click", planteoEjercicio);

function planteoEjercicio() {

  let titulo = document.querySelector("#tituloEjercicio").value;
  let descripcion = document.querySelector("#descripcionEjercicio").value;
  let nivel = document.querySelector("#nivel").value;
  let foto = document.querySelector("#fotoEjercicio").value;
  let nombrefoto = foto.substring(foto.lastIndexOf("\\") + 1);
  Id = Id + 1;
  let profesor = usuarioLogeado.Nombreusuario;
  let nuevoEjercicio;

  if (nombrefoto === "") {

    alert("Debes seleccionar una foto");

  } else if (titulo === "") {

    alert("Olvidaste el campo título");

  } else if (descripcion === "") {

    alert("Olvidaste el campo descripción");

  } else if (titulo.length + descripcion.length < 200 && titulo.length + descripcion.length > 20) {

    nuevoEjercicio = new Ejercicio(

      titulo,
      descripcion,
      nivel,
      nombrefoto,
      Id,
      profesor

    )

    Ejercicios.push(nuevoEjercicio);

  } else {

    alert("Tu ejercicio no llego al minimo de caracteres")

  }

  mostrarTareas();

}

// Termina Función Crear Ejercicio

// Función Carga de Devoluciones

let creado = 0;

function cargaDevoluciones() {

  document.querySelector("#acceso-devoluciones").style.display = "block";

  for (let i = 0; i < EjerciciosResueltos.length; i++) {

      ejercicio = EjerciciosResueltos[i];

      if (ejercicio.Estado === "Entregado" && verificarEstado(ejercicio.Devoluciones) === 1 && creado < EjerciciosResueltos.length && ejercicio.Profesor === usuarioLogeado.Nombreusuario) {

        document.querySelector("#acceso-devoluciones").innerHTML += `
        <article class="tarea">
        <div class="contenedor-thumbnail">
        <img src="img/${ejercicio.Foto}" alt="">
        </div>
        <div class="contenedor-texto">
        <div>
        <h2 class="titulo-tarea">
        ${ejercicio.Titulo}
        </h2>
        </div>
        <p class="descripcion">
        ${ejercicio.Descripcion}
        </p>
        <audio controls>
        <source src="Audios/${ejercicio.Audio}" type="">
        </audio>
        <form>
        <div class="textarea-devolucion">
        <textarea class="textarea" id="Devolucion${ejercicio.Id}" name="devolucion" rows="4" cols="37" maxlenght="500" minlenght="3" placeholder="Escriba su devolución aquí..."></textarea>
        </div><br>
        <span class="devolucion-contador" id="devolucion-contador">0/500 (máximo de carácteres 500)</span>
        </form>
        <input type="button" value="Enviar" class="enviar btnDevolucion" data-Devolucion="${ejercicio.Id}">
        <p class="mensaje" id="mensaje-devolucion"></p>
        <p class="error" id="error-devolucion"></p>
        </div>
        </article>`;

        creado++;
      }

    }

  let btnEntregar = document.querySelectorAll(".btnDevolucion");

  for (let i = 0; i < btnEntregar.length; i++) {

      btnEntregar[i].addEventListener("click", devolucion);
      btnEntregar[i].addEventListener("click", verificarDevolucion);
      btnEntregar[i].addEventListener("click", cargaEjerciciosDevueltos);
      btnEntregar[i].addEventListener("click", cargaDevoluciones);
      btnEntregar[i].addEventListener("click", estadisticasAlumnos);

  }
}

// Termina Función Carga de Devoluciones

// Función Verificar Estado

function verificarEstado(devolucion) {

    let existe = 0;

    if (devolucion === "") {

        existe = 1;

    }

    return existe;

}

// Termina Función Verificar Estado

// Función Verificación de Devoluciones

function verificarDevolucion() {

  for (let i = 0; i < EjerciciosResueltos.length; i++) {

    ejercicio = EjerciciosResueltos[i];

    if (ejercicio.Devoluciones !== "") {

      ejercicio.Estado = "Devuelto";

    }
  }
}

// Termina Función de Verificación de Devoluciones

// Función de Devoluciones

let btnDevolucion;

function devolucion() {

  btnDevolucion = Number(this.getAttribute("data-Devolucion"));

  for (let i = 0; i < EjerciciosResueltos.length; i++) {

    ejercicio = EjerciciosResueltos[i];

    if(btnDevolucion !== ejercicio.Id){

      devoluciones = ejercicio.Devoluciones;

    } else {

      devoluciones = document.querySelector(`#Devolucion${ejercicio.Id}`).value;

    }

    if(devoluciones.length <= 500){

      ejercicio.Devoluciones = devoluciones;
      document.querySelector("#mensaje-devolucion").innerHTML = "Su devolución ha sido enviada.";


    } else {

      document.querySelector("#error-devolucion").innerHTML = "Su devolución supera el máximo de carácteres permitidos.";

    }
  }
}

// Termina Función de Devoluciones

// Función de carga de Ejercicios Devueltos

function cargaEjerciciosDevueltos() {


  for (let i = 0; i < EjerciciosResueltos.length; i++) {

    ejercicio = EjerciciosResueltos[i];

    if (usuarioLogeado.Nombreusuario === ejercicio.Nombreusuario) {

      document.querySelector("#ejercicios-devueltos").innerHTML += `
      <article class="tarea">
      <div class="contenedor-thumbnail">
      <img src="img/${ejercicio.Foto}" alt="">
      </div>
      <div class="contenedor-texto">
      <div>
      <h2 class="titulo-tarea">
      ${ejercicio.Titulo}
      </h2>
      </div>
      <p class="descripcion">
      ${ejercicio.Descripcion}
      </p>
      <audio controls>
      <source src="Audios/${ejercicio.Audio}" type="">
      </audio>
      <p>${ejercicio.Devoluciones}</p>
      </div>
      </article>`;

    }
  }
}

// Termina Función de carga de Ejercios Devueltos

// ---------TERMINAN FUNCIONES DE EJERCICIOS---------



// ---------FUNCIONES DE ESTADÍSTICAS---------

// ---------ALUMNOS---------

// Función De Estadísticas de Alumno

let cantidadEntregada;

let cantidadEj;

let cantidadDevuelta;

function estadisticasAlumnos() {

  cantidadEntregada = 0;

  cantidadDevuelta = 0;

  cantidadEj = 0;

  document.querySelector("#cantidadEntregada").innerHTML = "";

  for (let i = 0; i < EjerciciosResueltos.length; i++) {

    ejercicio = EjerciciosResueltos[i];

    if (ejercicio.Estado === "Entregado" && usuarioLogeado.Nombreusuario === ejercicio.Nombreusuario) {

      cantidadEntregada = cantidadEntregada + 1;

    } else if (ejercicio.Estado === "Devuelto" && usuarioLogeado.Nombreusuario === ejercicio.Nombreusuario) {

      cantidadDevuelta = cantidadDevuelta + 1;
      cantidadEntregada = cantidadEntregada + 1;

    }
  }

  for (let i = 0; i < Ejercicios.length; i++) {

    ejercicio = Ejercicios[i];

    if (ejercicio.Profesor === usuarioLogeado.Profesoralumno && ejercicio.Nivel === usuarioLogeado.Nivelusuario) {

      cantidadEj = cantidadEj + 1;

    }

  }

  for (let i = 0; i < Usuarios.length; i++) {

    usuario = Usuarios[i];

    if (usuario.Nombreusuario === usuarioLogeado.Nombreusuario) {

      usuario.Cantidadentregada = cantidadEntregada;

    }

  }

  document.querySelector("#hechos").innerHTML += "Has entregado " + usuarioLogeado.Cantidadentregada;
  document.querySelector("#atrasados").innerHTML += "Sin entregar " + usuarioLogeado.Cantidadentregada + " de " + cantidadEj + "<br>";
  document.querySelector("#cantidadEntregada").innerHTML += "Has entregado " + usuarioLogeado.Cantidadentregada + " de " + cantidadEj + "<br>";
  document.querySelector("#cantidadEntregada").innerHTML += "Has entregado " + usuarioLogeado.Cantidadentregada + " de " + cantidadEj + "<br>";

  document.querySelector("#cantidadEntregada").innerHTML += "Has entregado " + usuarioLogeado.Cantidadentregada + " de " + cantidadEj + "<br>";
  document.querySelector("#cantidadEntregada").innerHTML += "El profesor devolvio " + cantidadDevuelta + " de " + usuarioLogeado.Cantidadentregada;

}

// Termina Función de Estadísticas de Alumno

// ---------PROFESORES---------

// Función Carga de Estadísticas

function cargaEstadisticas(){

  for (let i = 0; i < Usuarios.length; i++) {

    usuario = Usuarios[i];

    usuariosNivel = usuario.Nivelusuario;

    tipodeUsuario = usuario.Tipodeusuario;

    nombreUsuario = usuario.Nombreusuario;

    if (tipodeUsuario === "Alumno" && usuarioLogeado.Nombreusuario === usuario.Profesoralumno) {

      document.querySelector("#alumnoCantidad").innerHTML += `

      <option value="${usuario.Nombreusuario}"> ${nombreUsuario} </option>`;

    }
  }
}

// Termina Función de Carga de Estadísticas

// Función Estadísticas de Profesor

document.querySelector("#btnEstadisticasProfesor").addEventListener("click", estadisticasProfesor);

function estadisticasProfesor() {

  alumno = document.querySelector("#alumnoCantidad").value;

  document.querySelector("#cantidadesProfesor").innerHTML = "";

  cantidadEj = 0;

  for(let i = 0; i < Usuarios.length; i++){

    usuario = Usuarios[i];

    if(alumno === usuario.Nombreusuario){

      alumno = usuario;

    }

  }

  for (let i = 0; i < Ejercicios.length; i++) {

    ejercicio = Ejercicios[i];

    if (alumno.Profesoralumno === usuarioLogeado.Nombreusuario && ejercicio.Nivel === alumno.Nivelusuario) {

      cantidadEj = cantidadEj + 1;

    }
  }

  document.querySelector("#cantidadesProfesor").innerHTML += "La cantidad de ejercicios planteados para el alumno " + alumno.Nombreusuario + " es de " + cantidadEj + " y entrego " + alumno.Cantidadentregada + "<br>";

}

// Termina Función de Estadística de Profesor

// Función Cantidad Total Entregados

let cantidadTotal;

let cantidadMayor;

function Cantidadtotalentregada(){

    cantidadTotal = 0;

    cantidadMayor = -1000;

    for(let i = 0; i < Usuarios.length; i++){

        usuario = Usuarios[i];

        if(usuario.Tipodeusuario === "Alumno" && usuario.Profesoralumno === usuarioLogeado.Nombreusuario){

            cantidadTotal = cantidadTotal + usuario.Cantidadentregada;

        }

        if(usuario.Profesoralumno === usuarioLogeado.Nombreusuario){

            if(cantidadMayor <= usuario.Cantidadentregada){

                cantidadMayor = usuario.Cantidadentregada;
                document.querySelector("#cantidadesAlumnos").innerHTML += "El alumno con mas ejercicios entregados es " + usuario.Nombreusuario + " con " + cantidadMayor + " de ejercicios entregados" + "<br>";

            }
        }
    }

    document.querySelector("#cantidadesAlumnos").innerHTML += "<br>";

    document.querySelector("#cantidadesAlumnos").innerHTML += "La cantidad total entregada de ejercicios es " + cantidadTotal;

}

// Termina Función Cantidad Total Entregados

// ---------TERMINAN FUNCIONES DE ESTADÍSTICAS---------
