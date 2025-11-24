const links = [
    { nombre: "¿Qué era el Seguro Popular? Explicación institucional y contexto.",
      url: "https://www.gob.mx/imss/articulos/que-era-el-seguro-popular?idiom=es" },

    { nombre: "¿Por qué es importante la atención primaria? Marco conceptual y evidencia regional.",
      url: "https://www.paho.org/es/temas/atencion-primaria-salud" },

    { nombre: "Aproximación conceptual a la Atención Primaria de Salud — R. Loewe.",
      url: "https://www.saludpublica.mx/index.php/spm/article/view/144" },

    { nombre: "Análisis crítico de la reforma del sistema de salud mexicano — Carletto.",
      url: "https://www.scielosp.org/article/sdeb/2025.v49n146/e10056/" },

    { nombre: "Análisis mixto de la encuesta de satisfacción del curso de APS — Juárez-Medel et al.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/5087" },

    { nombre: "Colección sobre calidad de atención primaria en México.",
      url: "https://saludpublica.mx/index.php/spm/issue/view/15744/showToc" },

    { nombre: "Atención primaria a la salud — Álvarez-Manilla.",
      url: "https://www.saludpublica.mx/index.php/spm/article/view/145" },

    { nombre: "Atención primaria a la salud — R. Loewe.",
      url: "https://www.saludpublica.mx/index.php/spm/article/view/144" },

    { nombre: "APS durante la pandemia COVID-19 — Rev. Médica IMSS.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/4811" },

    { nombre: "APS en México: cambio de paradigma — INSP.",
      url: "https://insp.mx/informacion-relevante/atencion-primaria-a-la-salud-en-mexico-de-una-vocacion-de-porteria-al-principal-cambio-de-paradigma-en-salud" },

    { nombre: "APS — OPS/OMS.",
      url: "https://www.paho.org/es/temas/atencion-primaria-salud" },

    { nombre: "Aumento de la sobrevida infantil — Sepúlveda et al.",
      url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0036-36342007000700012" },

    { nombre: "Barreras en implementación de guías GPC — Maya-Hernández et al.",
      url: "https://www.scielo.org.mx/pdf/spm/v63n5/0036-3634-spm-63-05-662.pdf" },

    { nombre: "Cascada de atención primaria 2022 — Bautista-Arredondo.",
      url: "https://saludpublica.mx/index.php/spm/article/view/14813" },

    { nombre: "Correlación tiempo-consulta y satisfacción — Torres-Reyes.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/5380" },

    { nombre: "Compendio evidencia sobre fin del Seguro Popular.",
      url: "https://www.asf.gob.mx/Trans/Informes/IR2010i/Grupos/Gasto_Federalizado/MRSEGUROPOPULARFINAL_a.pdf" },

    { nombre: "Consultoría de enfermería para autocuidado.",
      url: "https://revistaenfermeria.unam.mx/ojs/index.php/enfermeriauniversitaria/article/view/1048" },

    { nombre: "Marco de evaluación APS Latinoamérica — Yavich.",
      url: "https://www.saludpublica.mx/index.php/spm/article/view/6948" },

    { nombre: "Control metabólico post-DiabetIMSS.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/3909" },

    { nombre: "Costo-efectividad atención digital vs presencial.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/5305" },

    { nombre: "Del Seguro Popular al INSABI — Sovilla & Díaz.",
      url: "https://www.gestionypoliticapublica.cide.edu/ojscide/index.php/gypp/article/download/1257/300/3674" },

    { nombre: "Descontrol glucémico en prepandemia.",
      url: "https://pubmed.ncbi.nlm.nih.gov/38060875/" },

    { nombre: "Descentralización y financiamiento APS.",
      url: "https://www.gestionypoliticapublica.cide.edu/ojscide/index.php/gypp/article/download/1257/300/3674" },

    { nombre: "Guía: Introducción a la APS — Gobierno de México.",
      url: "https://www.gob.mx/cms/uploads/attachment/file/828977/Gu_a_de_Estudio_APS.pdf" },

    { nombre: "Documentos técnicos de APS — Secretaría de Salud.",
      url: "https://www.gob.mx/salud/acciones-y-programas/atencion-primaria-a-la-salud-aps" },

    { nombre: "Enfermería de Práctica Avanzada en APS.",
      url: "https://revistas.usat.edu.pe/index.php/cietna/article/view/1180" },

    { nombre: "Estudios sobre pobreza y APS en México.",
      url: "https://www.scielosp.org/article/sdeb/2019.v43nspe5/273-285/en/" },

    { nombre: "Estrategia APS para COVID — INSP.",
      url: "https://www.insp.mx/resources/images/stories/2023/docs/Estrategia_Atencion_Primaria_de_la_Salud_para_Covi.pdf" },

    { nombre: "Rol ampliado de enfermería en APS.",
      url: "https://www.revistas-enfermeria.unam.mx/ojs/index.php/enfermeriauniversitaria/article/view/892" },

    { nombre: "Evaluación del Seguro Popular — Martínez.",
      url: "https://saludpublica.mx/index.php/spm/article/view/8248/10822" },

    { nombre: "Riesgo cardiovascular en APS.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/2473" },

    { nombre: "Financiamiento APS en las Américas.",
      url: "https://www.scielosp.org/pdf/rpsp/2017.v41/e173" },

    { nombre: "Indicadores compuestos para APS.",
      url: "https://www.saludpublica.mx/index.php/spm/article/view/5326" },

    { nombre: "Auditorías oficiales APS.",
      url: "https://www.asf.gob.mx/Trans/Informes/IR2010i/Grupos/Gasto_Federalizado/MRSEGUROPOPULARFINAL_a.pdf" },

    { nombre: "Modelo EDI en APS — Rizzoli.",
      url: "https://linkinghub.elsevier.com/retrieve/pii/S1665114615002130" },

    { nombre: "APS durante COVID-19 en México.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/4811" },

    { nombre: "APS — Reyes-Morales (2024).",
      url: "https://www.saludpublica.mx/index.php/spm/article/view/15744" },

    { nombre: "APS: de Alma-Ata a Astaná.",
      url: "https://www.scielo.org.mx/scielo.php?pid=S1665-70632018000400329&script=sci_arttext" },

    { nombre: "APS en Modelo de Atención a la Salud — Borja.",
      url: "https://saludpublica.mx/index.php/spm/article/view/15755" },

    { nombre: "APS durante la pandemia — Univ. Veracruzana.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10484547/" },

    { nombre: "Salud mental y APS — Vargas Terrez.",
      url: "https://www.scielo.org.mx/scielo.php?pid=S0185-33252016000100003&script=sci_arttext" },

    { nombre: "Transformación del sistema hacia APS — Carletto.",
      url: "http://www.scielo.br/j/sdeb/a/KfgnXX9k7SvkPkrVgPjMhxN/?lang=pt" },

    { nombre: "APS en adultos mayores — Santoyo-Sánchez.",
      url: "https://www.scielo.org.mx/scielo.php?pid=S0016-38132024000300249&script=sci_arttext" },

    { nombre: "Bibliografía crítica APS — INSP.",
      url: "https://saludpublica.mx/index.php/spm/article/view/14813" },

    { nombre: "Reformas de APS en América Latina.",
      url: "https://equityhealthj.biomedcentral.com/articles/10.1186/s12939-024-02149-9" },

    { nombre: "Modelo de evaluación APS en México.",
      url: "https://www.scielo.org.mx/scielo.php?pid=S0036-36342010000100007&script=sci_arttext" },

    { nombre: "Necesidades de salud de personas mayores.",
      url: "https://www.gacetamedicademexico.com/frame_esp.php?id=942" },

    { nombre: "Necesidad de médicos para universalización.",
      url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-80642021000100001" },

    { nombre: "Conceptos de niveles de atención — Vignolo.",
      url: "https://www.scielo.edu.uy/scielo.php?pid=S1688-423X2011000100003&script=sci_arttext" },

    { nombre: "Calidad de atención en México.",
      url: "https://calidad.salud.gob.mx/site/editorial/docs/calidad_atencion_salud_enMexico_segunda_edicion.pdf" },

    { nombre: "Asignación de recursos Seguro Popular.",
      url: "https://saludpublica.mx/index.php/spm/article/view/8248/10822" },

    { nombre: "Plantas útiles en medicina tradicional.",
      url: "https://polibotanica.mx/index.php/polibotanica/article/view/353" },

    { nombre: "Protección social en salud: Seguro Popular.",
      url: "https://www.coneval.org.mx/EvaluacionDS/PP/CEIPP/IEPSM/Documents/Seguro_Popular_Seguro_Medico_Siglo_XXI.pdf" },

    { nombre: "Políticas del Sector Salud Mexicano 1980-2004.",
      url: "https://www.scielosp.org/pdf/scol/v1n2/v1n2a05.pdf" },

    { nombre: "APS y prevención — SciELO.",
      url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-70632018000400329" },

    { nombre: "Salud mental en APS — revisión.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10484547/" },

    { nombre: "Impacto del Seguro Popular — auditoría ASF.",
      url: "https://www.asf.gob.mx/Trans/Informes/IR2010i/Grupos/Gasto_Federalizado/MRSEGUROPOPULARFINAL_a.pdf" },

    { nombre: "Reformas del primer nivel — análisis México.",
      url: "https://www.saludpublica.mx/index.php/spm/article/view/15744" },

    { nombre: "Reorganización atención materna — Santoyo.",
      url: "https://www.scielo.org.mx/scielo.php?pid=S0016-38132024000300249&script=sci_arttext" },

    { nombre: "ENSANUT 2022: uso de servicios.",
      url: "https://ensanut.insp.mx/encuestas/ensanutcontinua2022/doctos/analiticos/04-Utilizacion.de.servicios-ENSANUT2022-14813-72275-2-10-20230619.pdf" },

    { nombre: "APS en población indígena — Leyva-Flores.",
      url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0102781" },

    { nombre: "Hospitalizaciones evitables — APS México.",
      url: "https://www.scielosp.org/article/sdeb/2019.v43nspe5/273-285/en/" },

    { nombre: "Salud mental en APS — Rojas.",
      url: "https://linkinghub.elsevier.com/retrieve/pii/S021265671500205X" },

    { nombre: "Determinantes sociales y APS.",
      url: "https://scielo.isciii.es/scielo.php?pid=S2529-850X2020000100081&script=sci_arttext" },

    { nombre: "Seguridad y calidad en APS — Vázquez-Cruz.",
      url: "https://pubmed.ncbi.nlm.nih.gov/30570011/" },

    { nombre: "Integración APS en crónicas.",
      url: "https://saludpublica.mx/index.php/spm/article/view/15744" },

    { nombre: "Sistema de Protección Social en Salud — teoría.",
      url: "https://www.coneval.org.mx/EvaluacionDS/PP/CEIPP/IEPSM/Documents/Seguro_Popular_Seguro_Medico_Siglo_XXI.pdf" },

    { nombre: "Calidad en atención de diabetes/hipertensión.",
      url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0036-36342011001000007" },

    { nombre: "Hospitalizaciones evitables — Frontiers.",
      url: "https://www.frontiersin.org/articles/10.3389/fpubh.2022.1060861/full" },

    { nombre: "Consultorios respiratorios y COVID-19.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/4074" },

    { nombre: "Salud mental comunitaria — Chiapas.",
      url: "https://saludpublica.mx/index.php/spm/article/view/14183" },

    { nombre: "Composición de equipos APS — ESPM.",
      url: "https://www.espm.mx/informacion-relevante/vci-composicion-integracion-equipos-atencion-primaria-salud-blog/" },

    { nombre: "Utilización efectiva de servicios — México.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9373534/" },

    { nombre: "Migrantes en México: barreras de APS.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9330619/" },

    { nombre: "Cascada de atención primaria 2022.",
      url: "https://www.saludpublica.mx/index.php/spm/article/view/14813" },

    { nombre: "Percepción de calidad APS — Doubova.",
      url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002673" },

    { nombre: "Eventos adversos en APS — Rojas-Armadillo.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/338" },

    { nombre: "Indicadores de calidad APS.",
      url: "https://www.scielo.org.mx/scielo.php?pid=S1665-11462015000400223&script=sci_arttext" },

    { nombre: "Violencia en pareja y APS — Cancún.",
      url: "https://linkinghub.elsevier.com/retrieve/pii/S0212656717300033" },

    { nombre: "Experiencias de médicos de primer contacto.",
      url: "https://revistamedica.imss.gob.mx/index.php/revista_medica/article/view/4811" },

    { nombre: "Archivos de Medicina Interna (UNAM) — APS México",
      url: "https://biblat.unam.mx/hevila/Archivosdemedicinainterna/2011/vol33/no1/3.pdf" },

    { nombre: "Salud Problema (UAM-Xochimilco) — Atención Primaria",
      url: "https://saludproblemaojs.xoc.uam.mx/index.php/saludproblema/article/download/584/584" },

    { nombre: "CIDE — Documento técnico APS México",
      url: "https://cide.repositorioinstitucional.mx/jspui/bitstream/1011/806/1/000002782_documento.pdf" },

    { nombre: "COFEMER — Modelo de Atención en Salud",
      url: "https://www.cofemersimir.gob.mx/expediente/9745/mir/23225/archivo/738558" },

    { nombre: "SciELO México — Artículo sobre APS 2011",
      url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0036-36342011000800017" },

    { nombre: "Secretaría de Salud — Distritos de Salud",
      url: "http://sidss.salud.gob.mx/site2/docs/Distritos_de_Salud_VF.pdf" },

    { nombre: "IMSS-Bienestar — Modelo de Atención a la Salud",
      url: "https://www.imss.gob.mx/sites/all/statics/imssBienestar/marcoJuridico/Acuerdo-Modelo-Atencion-Salud-Bienestar.pdf" },

    { nombre: "Gobierno de México — Informe Desafíos APS 2021",
      url: "https://www.gob.mx/cms/uploads/attachment/file/651873/Informe_Desaf_os_APS_ENERO_2021_final.pdf" },

    { nombre: "Guía de Estudio de APS — Secretaría de Salud",
      url: "https://www.gob.mx/cms/uploads/attachment/file/828977/Gu_a_de_Estudio_APS.pdf" },

    { nombre: "APS — Estudio en PMC (PubMed Central)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6985524/" },

    { nombre: "Retos e Innovación en Ciencias Básicas — APS",
      url: "https://www.cucs.udg.mx/libros/Retos_e_innovacion_desde_ciencias_basicas_2023.pdf" },

    { nombre: "Calidad Salud Pública — Evaluación de Servicios",
      url: "https://encuestas.insp.mx/calidad/descargar.php?path=ZG9jdG9zLzBUdzhpVVJ6dHZacmR4WjVuTDFwbXY1RDU5VUd6Yy5wZGY=&file=RmFqYXJkbyB5IGNvbHMgQ2FsaWRhZCBTYWx1ZCBQw7pibGljYS5wZGY=" },

    { nombre: "IMSS — Colección APS Tomo 2",
      url: "https://www.imss.gob.mx/sites/all/statics/coleccion-80/dpm/tomo-02-atencion-primaria.pdf" },

    { nombre: "Calidad de Atención en México — Secretaría de Salud",
      url: "https://calidad.salud.gob.mx/site/editorial/docs/calidad_atencion_salud_enMexico_segunda_edicion.pdf" },

    { nombre: "Informe Desafíos APS 2021 — Gobierno de México",
      url: "https://www.gob.mx/cms/uploads/attachment/file/651873/Informe_Desaf_os_APS_ENERO_2021_final.pdf" },

    { nombre: "Calidad del primer nivel de atención — OMM",
      url: "https://omm.org.mx/wp-content/uploads/2020/04/Calidad-del-primer-nivel-de-atención-de-los-Servicios-Estatales-de-Salud.pdf" },

    { nombre: "CONEVAL — Evaluación Estratégica Salud APS",
      url: "https://www.coneval.org.mx/EvaluacionDS/PP/CEIPP/IEPSM/Documents/Evaluacion_Estrategica_Salud_Primer_Informe.pdf" },

    { nombre: "UNAM — Atención Familiar (artículo APS)",
      url: "https://www.revistas.unam.mx/index.php/atencion_familiar/article/view/77663" },

    { nombre: "SciELO México — APS 2016",
      url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0036-36342016000500569" },

    { nombre: "SciELO México — APS 2021",
      url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2444-054X2021000600846" },

    { nombre: "Salud Colectiva (Argentina) — Atención Primaria",
      url: "https://revistas.unla.edu.ar/saludcolectiva/article/view/221" },
];

function cargarTabla() {
    const tbody = document.getElementById("tabla");

    links.forEach(item => {
        const fila = `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.url}</td>
                <td>
                    <button onclick="window.open('${item.url}', '_blank')">
                        Visitar sitio
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += fila;
    });
}

cargarTabla();
let listaActual = [...links]; 
let ordenActual = "az";
let filtroActual = "";

function ordenarLista() {
    listaActual.sort((a, b) => {
        if (ordenActual === "az") {
            return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' });
        } else {
            return b.nombre.localeCompare(a.nombre, 'es', { sensitivity: 'base' });
        }
    });
}

function filtrarTabla() {
    filtroActual = document.getElementById("buscador").value.toLowerCase();

    listaActual = links.filter(item =>
        item.nombre.toLowerCase().includes(filtroActual)
    );

    ordenarLista();
    renderTabla();
}

// --- Cambiar orden ---
function aplicarOrden() {
    ordenActual = document.getElementById("orden").value;
    ordenarLista();
    renderTabla();
}

// --- Renderizar la tabla ---
function renderTabla() {
    const tbody = document.getElementById("tabla");
    tbody.innerHTML = "";

    listaActual.forEach((item, index) => {
        const fila = `
            <tr>
                <td class="copy-index" onclick="copiarLink('${item.url}')">
                    ${index + 1}
                </td>
                <td>${item.nombre}</td>
                <td>${item.url}</td>
                <td>
                    <button onclick="window.open('${item.url}', '_blank')">
                        Visitar sitio
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += fila;
    });
}

function copiarLink(url) {
    navigator.clipboard.writeText(url)
        .then(() => {
            mostrarMensaje("Link copiado");
        })
        .catch(err => {
            console.error("Error al copiar:", err);
        });
}

function mostrarMensaje(texto) {
    const toast = document.getElementById("toast");
    toast.textContent = texto;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
}
// Mostrar el botón cuando se hace scroll
window.onscroll = function() {
    const btn = document.getElementById("btnArriba");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Función para volver arriba
function irArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
document.getElementById("orden").addEventListener("change", function () {
    this.style.color = "white";
});

// Inicialización
ordenarLista();
renderTabla();

