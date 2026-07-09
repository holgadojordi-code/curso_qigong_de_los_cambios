/* ==========================================================================
   COURSE-DATA.JS
   Contenido del curso "Qi Gong de los Cambios". Edita este archivo para
   añadir tus PDFs, vídeos y enlaces de streaming reales.

   - pdf.file      -> ruta al PDF dentro de docs/moduloX/teoria/
   - videos[].file -> ruta al video dentro de docs/moduloX/practica-videos/
                      (o una URL de YouTube/Vimeo no listado)
   - streaming.url -> enlace a la sesión en directo (Zoom, Meet, YouTube Live...)
   - test.file      -> PDF o formulario (Google Forms, Typeform...) del test
   ========================================================================== */

const COURSE_MODULES = [
  {
    id: "modulo1",
    numero: 1,
    nivel: "Nivel 1 · El Camino de Fuera",
    titulo: "El Origen del Cambio",
    subtitulo: "El héroe recibe la llamada",
    color: "#9A51FF", // violeta ligero
    hexagrama: [true, true, true, true, true, true], // Hexagrama 1 · Qian, Lo Creativo
    resumen: "Todo surge de Wu Ji. Del vacío emerge la polaridad, y de la polaridad nacen las fuerzas que dan forma al mundo.",
    temario: {
      "Teoría": ["Tao", "Cosmogonía", "Wu Ji", "Tai Ji", "Yin-Yang", "Cielo Anterior (Xian Tian) y Cielo Posterior (Hou Tian)"],
      "Práctica": ["Apertura corporal con observación consciente", "Introducción a Wu Ji", "Forma Cielo Posterior", "Meditación de la montaña Ken 52"],
      "Oráculo": ["Qué es el I Ching", "Historia y recorrido", "Los trigramas", "Formación del hexagrama con el método de las monedas"]
    },
    pdf: { titulo: "Manual Módulo 1 · El Origen del Cambio", file: "docs/modulo1/teoria/manual-modulo1.pdf" },
    videos: [
      { titulo: "Clase 1 · Apertura corporal y Wu Ji", file: "docs/modulo1/practica-videos/clase1.mp4" },
      { titulo: "Clase 2 · Forma Cielo Posterior", file: "docs/modulo1/practica-videos/clase2.mp4" }
    ],
    streaming: { titulo: "Próxima sesión en directo · 5 y 6 de septiembre", url: "" },
    test: { titulo: "Test de repaso Módulo 1", file: "docs/modulo1/test/test-modulo1.pdf" }
  },
  {
    id: "modulo2",
    numero: 2,
    nivel: "Nivel 1 · El Camino de Fuera",
    titulo: "La Danza de las Fuerzas",
    subtitulo: "El héroe aprende a leer el mundo",
    color: "#17E0FF", // cian vivido
    hexagrama: [true, false, false, true, false, false], // Hexagrama 51 · Zhen, Lo Suscitativo
    resumen: "Los acontecimientos no están aislados: son notas de una sintonía universal. Detrás de cada situación actúan fuerzas universales.",
    temario: {
      "Teoría": ["Los ocho trigramas y los 5 elementos", "Movimientos y ley del cambio", "Sincronicidad", "Si Xiang (las 4 fuerzas) y Ba Gua (los 8 trigramas)"],
      "Práctica": ["Apertura Cielo Anterior y cierre de Fuxi y Nuwa · canal Chong Mai", "Profundización en Cielo Posterior", "Meditación de la Contemplación · hexagrama 20", "Iniciación al movimiento espontáneo"],
      "Oráculo": ["Formación de hexagramas", "Orden de los hexagramas Rey Wen", "Comprensión según Jing Fang del recorrido iniciático", "Iniciación a la interpretación y traducción de Richard Wilhelm"]
    },
    pdf: { titulo: "Manual Módulo 2 · La Danza de las Fuerzas", file: "docs/modulo2/teoria/manual-modulo2.pdf" },
    videos: [
      { titulo: "Clase 1 · Apertura Cielo Anterior", file: "docs/modulo2/practica-videos/clase1.mp4" },
      { titulo: "Clase 2 · Movimiento espontáneo", file: "docs/modulo2/practica-videos/clase2.mp4" }
    ],
    streaming: { titulo: "Próxima sesión en directo · 3 y 4 de octubre", url: "" },
    test: { titulo: "Test de repaso Módulo 2", file: "docs/modulo2/test/test-modulo2.pdf" }
  },
  {
    id: "modulo3",
    numero: 3,
    nivel: "Nivel 2 · El Camino Interior",
    titulo: "La Rueda de los Ciclos",
    subtitulo: "El héroe desciende al mundo interior",
    color: "#FFA500", // naranja fuerte
    hexagrama: [true, false, true, true, true, false], // Hexagrama 49 · Ge, la Revolución (mutación)
    resumen: "Todo sigue ciclos: la luz crece, la luz decrece. Todo nacimiento contiene una semilla de retorno.",
    temario: {
      "Teoría": ["Fuxi y Nuwa, raíces prehistóricas", "El calendario del I Ching", "Diagramas de He Tu y Lo Shu", "El Gran Tratado: Mutación, permutación y transmutación"],
      "Práctica": ["Rotación y traslación", "Luz y sombra · los hexagramas mensajeros", "Apertura espontánea a través de los círculos y espirales"],
      "Oráculo": ["Significado de las líneas", "Orden de los hexagramas Rey Wen", "Comprensión según Jing Fang del recorrido iniciático", "Métodos para obtener el hexagrama de la consulta"]
    },
    pdf: { titulo: "Manual Módulo 3 · La Rueda de los Ciclos", file: "docs/modulo3/teoria/manual-modulo3.pdf" },
    videos: [
      { titulo: "Clase 1 · Rotación y traslación", file: "docs/modulo3/practica-videos/clase1.mp4" },
      { titulo: "Clase 2 · Círculos y espirales", file: "docs/modulo3/practica-videos/clase2.mp4" }
    ],
    streaming: { titulo: "Próxima sesión en directo · 7 y 8 de noviembre", url: "" },
    test: { titulo: "Test de repaso Módulo 3", file: "docs/modulo3/test/test-modulo3.pdf" }
  },
  {
    id: "modulo4",
    numero: 4,
    nivel: "Nivel 2 · El Camino Interior",
    titulo: "El Retorno del Sabio",
    subtitulo: "El héroe vuelve transformado",
    color: "#51FFA8", // verde ligero
    hexagrama: [true, false, false, false, false, false], // Hexagrama 24 · Fu, El Retorno
    resumen: "Ya no intenta controlar el cambio: aprende a ser el cambio. Puede regresar al mundo, pero ese mundo ya no es el mismo.",
    temario: {
      "Teoría": ["Los Mensajeros como expresión de los ciclos", "Integración entre cuerpo, naturaleza y consciencia", "El Camino del Héroe: retorno y servicio"],
      "Práctica": ["Cielo Posterior y Cielo Anterior", "Luz y sombra", "Rotación y traslación", "Wu Ji profundo", "Movimiento espontáneo"],
      "Oráculo": ["El oráculo en la vida cotidiana", "La máquina de la sincronicidad al servicio de la conciencia", "Método de varillas"]
    },
    pdf: { titulo: "Manual Módulo 4 · El Retorno del Sabio", file: "docs/modulo4/teoria/manual-modulo4.pdf" },
    videos: [
      { titulo: "Clase 1 · Wu Ji profundo", file: "docs/modulo4/practica-videos/clase1.mp4" },
      { titulo: "Clase 2 · Método de varillas", file: "docs/modulo4/practica-videos/clase2.mp4" }
    ],
    streaming: { titulo: "Próxima sesión en directo · 12 y 13 de diciembre", url: "" },
    test: { titulo: "Test de repaso Módulo 4", file: "docs/modulo4/test/test-modulo4.pdf" }
  }
];
