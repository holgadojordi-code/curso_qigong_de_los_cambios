/* ==========================================================================
   AUTH-DATA.JS
   Acceso genérico para los alumnos de la plataforma.

   Se usa un único usuario y contraseña compartidos por todos los alumnos,
   sin guardar datos personales (nombres, teléfonos, emails) en este
   archivo, ya que el repositorio de GitHub es público y cualquiera podría
   leer este archivo con el navegador.

   IMPORTANTE — LÉEME:
   Esto sigue siendo solo una comprobación hecha en JavaScript, no una
   autenticación real de servidor. Sirve como filtro para que nadie entre
   "por casualidad", pero alguien con conocimientos técnicos podría ver
   este usuario y contraseña mirando el código de la página. Por eso no
   hay datos personales aquí: si alguien llegara a verlo, solo vería el
   usuario y contraseña genéricos, nunca información de tus alumnos.

   Para cambiar el usuario o la contraseña, edita los valores de aquí abajo.
   ========================================================================== */

const COURSE_STUDENTS = [
  { nombre: "Alumno/a", user: "eltao", pass: "wuwey2026@" }
];
