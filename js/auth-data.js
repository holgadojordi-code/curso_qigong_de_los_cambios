/* ==========================================================================
   AUTH-DATA.JS
   Lista de alumnos con acceso a la plataforma (modo demostración/local).

   IMPORTANTE — LÉEME:
   Esto es una comprobación hecha solo con JavaScript en el navegador.
   Sirve para tener un "filtro" de acceso mientras construyes el curso en
   local, pero CUALQUIER persona que abra este archivo con el navegador
   podría ver las contraseñas aquí escritas. No es una autenticación real.

   Cuando subas la web a un servidor y quieras dar acceso de verdad a tus
   alumnos, sustituye este sistema por uno de los siguientes:
     - Un backend sencillo (PHP, Node, Python) que compruebe usuario y
       contraseña en un servidor y no en el navegador.
     - Un servicio de "miembros" ya hecho (Wix Members, Netlify Identity,
       Firebase Authentication, Memberstack, etc.)
   ========================================================================== */

const COURSE_STUDENTS = [
  { user: "alumno", pass: "iching2026", nombre: "Alumno de prueba" }

  // Añade aquí a cada alumno real, por ejemplo:
  // { user: "maria.garcia", pass: "clave-temporal-1", nombre: "María García" },
  // { user: "joan.puig",    pass: "clave-temporal-2", nombre: "Joan Puig" },
];
