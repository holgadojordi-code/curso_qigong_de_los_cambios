/* ==========================================================================
   MAIN.JS — Lógica de la plataforma del alumno
   ========================================================================== */

const SESSION_KEY = "ichingqigong_alumno_sesion";

const loginScreen = document.getElementById("loginScreen");
const dashboard    = document.getElementById("dashboard");
const loginForm    = document.getElementById("loginForm");
const loginError   = document.getElementById("loginError");
const topBarRight  = document.getElementById("topBarRight");
const modulesRow   = document.getElementById("modulesRow");
const modulePanel  = document.getElementById("modulePanel");

let activeModuleId = null;

/* ---------------- Dibuja un hexagrama (6 líneas yin/yang) en SVG ---------------- */
function hexagramSVG(bits){
  // bits: array de 6 booleanos, índice 0 = línea inferior, índice 5 = línea superior
  const w = 60, lineH = 6, gap = 5, padY = 4;
  const totalH = padY * 2 + lineH * 6 + gap * 5;
  let rows = "";
  for (let i = 0; i < 6; i++){
    const yFromTop = totalH - padY - lineH - i * (lineH + gap);
    if (bits[i]){
      rows += `<rect x="0" y="${yFromTop}" width="${w}" height="${lineH}" rx="1.5" fill="currentColor"/>`;
    } else {
      const gapW = 10;
      const segW = (w - gapW) / 2;
      rows += `<rect x="0" y="${yFromTop}" width="${segW}" height="${lineH}" rx="1.5" fill="currentColor"/>`;
      rows += `<rect x="${segW + gapW}" y="${yFromTop}" width="${segW}" height="${lineH}" rx="1.5" fill="currentColor"/>`;
    }
  }
  return `<svg class="hexagram" viewBox="0 0 ${w} ${totalH}" xmlns="http://www.w3.org/2000/svg">${rows}</svg>`;
}

/* ---------------- Login ---------------- */
function tryLogin(user, pass){
  return COURSE_STUDENTS.find(s => s.user.toLowerCase() === user.trim().toLowerCase() && s.pass === pass);
}

function showDashboard(student){
  loginScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");
  topBarRight.innerHTML = `
    <span class="user-name">Hola, ${student.nombre}</span>
    <button type="button" class="btn-link" id="logoutBtn">Cerrar sesión</button>
  `;
  document.getElementById("logoutBtn").addEventListener("click", logout);
  renderModuleButtons();
}

function logout(){
  sessionStorage.removeItem(SESSION_KEY);
  dashboard.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  topBarRight.innerHTML = "";
  modulePanel.innerHTML = "";
  activeModuleId = null;
  loginForm.reset();
}

loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const student = tryLogin(user, pass);
  if (student){
    loginError.textContent = "";
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(student));
    showDashboard(student);
  } else {
    loginError.textContent = "Usuario o contraseña incorrectos.";
  }
});

/* Recupera sesión ya iniciada en este navegador */
(function restoreSession(){
  const saved = sessionStorage.getItem(SESSION_KEY);
  if (saved){
    try { showDashboard(JSON.parse(saved)); } catch(e) { /* sesión corrupta, ignorar */ }
  }
})();

/* ---------------- Botones de módulo (fila horizontal) ---------------- */
function renderModuleButtons(){
  modulesRow.innerHTML = COURSE_MODULES.map(m => `
    <button type="button" class="module-btn" data-id="${m.id}" aria-expanded="false" style="--m-color:${m.color || '#9A51FF'}">
      ${hexagramSVG(m.hexagrama)}
      <span class="m-eyebrow">Módulo ${m.numero}</span>
      <span class="m-title">${m.titulo}</span>
      <span class="m-nivel">${m.nivel}</span>
    </button>
  `).join("");

  modulesRow.querySelectorAll(".module-btn").forEach(btn => {
    btn.addEventListener("click", () => selectModule(btn.dataset.id));
  });
}

function selectModule(id){
  activeModuleId = (activeModuleId === id) ? null : id;

  modulesRow.querySelectorAll(".module-btn").forEach(btn => {
    const isActive = btn.dataset.id === activeModuleId;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-expanded", String(isActive));
  });

  renderModulePanel();
}

/* ---------------- Panel de contenido del módulo ---------------- */
function renderModulePanel(){
  if (!activeModuleId){
    modulePanel.innerHTML = "";
    return;
  }
  const m = COURSE_MODULES.find(mod => mod.id === activeModuleId);
  if (!m) return;

  const temarioHTML = Object.entries(m.temario).map(([bloque, items]) => `
    <div class="content-card">
      <h4>${bloque}</h4>
      <ul>${items.map(t => `<li style="background:none;border:none;padding:2px 0;color:var(--ink-soft);font-size:0.88rem;">· ${t}</li>`).join("")}</ul>
    </div>
  `).join("");

  const videosHTML = m.videos.map(v => `
    <li><a href="${v.file}" target="_blank" rel="noopener"><span class="tag video">Vídeo</span> ${v.titulo}</a></li>
  `).join("");

  const streamHTML = m.streaming.url
    ? `<li><a href="${m.streaming.url}" target="_blank" rel="noopener"><span class="tag live">Directo</span> ${m.streaming.titulo}</a></li>`
    : `<li><span class="stream-link"><span class="tag live">Directo</span> ${m.streaming.titulo}</span></li>
       <li class="empty-note">El enlace de la sesión en directo se añadirá aquí antes de la clase.</li>`;

  modulePanel.innerHTML = `
    <div class="module-panel" style="--m-color:${m.color || '#9A51FF'}">
      <h3>Módulo ${m.numero} · ${m.titulo}</h3>
      <p class="panel-sub">${m.subtitulo} — ${m.resumen}</p>

      <div class="content-grid">
        ${temarioHTML}

        <div class="content-card">
          <h4>Material y PDF</h4>
          <ul>
            <li><a href="${m.pdf.file}" target="_blank" rel="noopener"><span class="tag pdf">PDF</span> ${m.pdf.titulo}</a></li>
          </ul>
        </div>

        <div class="content-card">
          <h4>Vídeos de la práctica</h4>
          <ul>${videosHTML}</ul>
        </div>

        <div class="content-card">
          <h4>Sesión en streaming</h4>
          <ul>${streamHTML}</ul>
        </div>

        <div class="content-card">
          <h4>Test del módulo</h4>
          <ul>
            <li><a href="${m.test.file}" target="_blank" rel="noopener"><span class="tag test">Test</span> ${m.test.titulo}</a></li>
          </ul>
        </div>
      </div>
    </div>
  `;
}
